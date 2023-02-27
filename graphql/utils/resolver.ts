import moment from "moment";
import { GraphQLError, GraphQLResolveInfo } from "graphql";
import { CacheScope } from "apollo-server-types";
import { ResolverFn } from "@/graphql/types.generated";
import { ContextValue } from "@/types/graphql";
import { RESTDataSource } from "apollo-datasource-rest";

// given a date, return the number of seconds until that date
// useful to compute Cache-Control's maxAge field from 'expires' headers
export function secondsUntil(expirationDate: any) {
  const ttl = expirationDate
    ? moment(expirationDate).diff(moment(), "seconds") + 1
    : 0;
  if (ttl < 0) {
    console.log("\nNEGATIVE TTL DETECTED:", ttl);
    console.log("Current time:", moment().toISOString());
    console.log("Expiration time:", moment(expirationDate).toISOString(), "\n");
  }
  return ttl;
}

// given the HTTP "expires" header, return the number of seconds until that date
export function setMaxAgeFromExpiresHeader(
  expires: string | undefined,
  cacheControl: GraphQLResolveInfo["cacheControl"]
) {
  if (expires) {
    console.log("SETTING TTL TO", secondsUntil(expires));
    cacheControl.cacheHint.restrict({
      maxAge: secondsUntil(expires),
      scope: CacheScope.Public,
    });
  }
}

// Common pattern in a resolver is to make an API call, cache the result and return the body.
// This function takes a "apiCall" function that returns a Promise (typically to make an API call),
// and optionally a "transform" function that transforms the body.
// FIXME: We must check if the TTL has already been defined — we should return the Min() of both!!!
//        Right now we are just returning the TTL from the last resolver call.
export function retrieveAndCache<TResult, TParent, TArgs>(
  apiCall: ResolverFn<TResult, TParent, ContextValue, TArgs>,
  transformResult?: (
    body: RESTDataSource["fetch"]["body"],
    {
      parent,
      args,
      context,
      info,
    }: {
      parent: TParent;
      args: TArgs;
      context: ContextValue;
      info: GraphQLResolveInfo;
    }
  ) => any,
  debug = false
): ResolverFn<TResult, TParent, ContextValue, TArgs> {
  return async (parent, args, context, info) => {
    try {
      if (parent && parent.hasOwnProperty(info.fieldName)) {
        //console.log("CACHED", info.fieldName);
        // @ts-expect-error
        return parent[info.fieldName];
      }

      let result = await apiCall(parent, args, context, info);
      while (result instanceof Promise) {
        result = await result;
      }

      const { body, headers }: RESTDataSource["fetch"] = result;

      if (debug) {
        console.log("headers", headers);
        console.log("body", body);
      }

      if (headers["date"]) {
        console.log("date", headers["date"], "expires", headers["expires"]);
      }
      if (headers["expires"]) {
        console.log("SETTING TTL TO", secondsUntil(headers["expires"]));
        info.cacheControl.cacheHint.restrict({
          maxAge: secondsUntil(headers["expires"]),
          //scope: CacheScope.Public,
        });
      }
      setMaxAgeFromExpiresHeader(result.headers["expires"], info.cacheControl);
      const transformedResult = transformResult
        ? transformResult(body, { parent, args, context, info })
        : body;
      if (debug) {
        console.log("transformedResult", transformedResult);
      }
      console.log("DONE! CACHE HINT IS", info.cacheControl);
      return transformedResult;
    } catch (error) {
      console.log("RETRIEVED A NICE ERROR", error);
      console.log("apicall:", apiCall);
      //console.log("parent:", parent);
      console.log(
        "field <",
        info.fieldName,
        "> on type",
        info.parentType?.name
      );
      console.log("userID", context.user?.id);
      throw new GraphQLError(error as string);
    }
  };
}

// common body transformation pattern - just to retrieve one of its properties
export const getProperty =
  (property: string) => (body: { [property: string]: any }) =>
    body[property];

export const getRequestedFieldName = (
  body: RESTDataSource["fetch"]["body"],
  {
    info,
  }: {
    info: GraphQLResolveInfo;
  }
) => body[info.fieldName];

// common transformation pattern - transform an id to an object with that id
export const toIdObject = (id: any) => ({ id });

// common transformation pattern - transform list of ids into list of objects with those ids
export const toArrayOfIdObjects = (body: (string | number)[]) =>
  body.map(toIdObject);
