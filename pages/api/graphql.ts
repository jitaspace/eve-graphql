import { startServerAndCreateNextHandler } from "@as-integrations/next";
import generateDatasources from "../../graphql/datasources";
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

const apolloServer = startServerAndCreateNextHandler(
  new ApolloServer<ContextValue>({
    resolvers,
    typeDefs,
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
    context: async (req, res) => ({
      req,
      res,
      //auth: await getAuth(req),
      dataSources: generateDatasources(),
    }),
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
