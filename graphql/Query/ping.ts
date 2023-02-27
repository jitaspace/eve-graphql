import { retrieveAndCache } from "../utils/resolver";
import type { QueryResolvers } from "./../types.generated";

export const ping: NonNullable<QueryResolvers["ping"]> = retrieveAndCache(
  (_parent, args_, { dataSources }) => dataSources.metaApi.getPing()
);
