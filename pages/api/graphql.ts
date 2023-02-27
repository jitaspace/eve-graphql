import { startServerAndCreateNextHandler } from "@as-integrations/next";
import datasources from "../../graphql/datasources";
import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { ApolloServer } from "@apollo/server";
import { ContextValue } from "@/types/graphql";
import { resolvers } from "@/graphql/resolvers.generated";
import { typeDefs } from "@/graphql/typeDefs.generated";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import { ApolloServerPluginSchemaReporting } from "@apollo/server/plugin/schemaReporting";
import { ApolloServerPluginUsageReporting } from "@apollo/server/plugin/usageReporting";
import { ApolloServerPluginCacheControl } from "@apollo/server/plugin/cacheControl";
import Keyv from "keyv";
import * as jose from "jose";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";

// Create connection to Redis to use as a cache
const keyv = new Keyv(process.env.REDIS_URI);
keyv.on("error", (err) => console.log("Keyv Connection Error", err));

const cache = new KeyvAdapter(keyv);

const JWKS = jose.createRemoteJWKSet(
  new URL("https://login.eveonline.com/oauth/jwks")
);

const apolloServer = startServerAndCreateNextHandler(
  new ApolloServer<ContextValue>({
    resolvers,
    typeDefs,
    cache,
    introspection: process.env.NODE_ENV !== "production",
    plugins: [
      process.env.NODE_ENV === "production"
        ? ApolloServerPluginLandingPageProductionDefault()
        : ApolloServerPluginLandingPageLocalDefault(),
      ApolloServerPluginSchemaReporting(),
      ApolloServerPluginUsageReporting({
        sendErrors: { unmodified: true },
      }),
      ApolloServerPluginCacheControl(),
    ],
  }),
  {
    context: async (req, res) => {
      const token =
        req.headers.authorization &&
        req.headers.authorization.toLowerCase().startsWith("bearer ")
          ? req.headers.authorization.split(" ")[1]
          : null;
      const user = token
        ? { token, payload: (await jose.jwtVerify(token, JWKS)).payload }
        : undefined;
      // @ts-expect-error
      if (token) user.id = user["sub"].split(":").slice(-1)[0];
      return {
        req,
        res,
        cache: cache,
        token: user?.token,
        authenticated: !!token,
        user: user?.payload,
        dataSources: datasources({
          cache: cache,
          token: user?.token,
        }),
      };
    },
  }
);

export async function apiRouteHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await NextCors(req, res, {
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  });

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  return apolloServer(req, res);
}

export default apiRouteHandler;
