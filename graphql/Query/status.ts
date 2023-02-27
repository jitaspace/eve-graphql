import type { QueryResolvers } from "./../types.generated";
import { retrieveAndCache } from "@/graphql/utils/resolver";

export const status: NonNullable<QueryResolvers["status"]> = retrieveAndCache(
  (_, __, { dataSources }) => dataSources.metaApi.getStatus()
);
