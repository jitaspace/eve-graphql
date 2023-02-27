import type { QueryResolvers } from "./../types.generated";
import { retrieveAndCache, toArrayOfIdObjects } from "@/graphql/utils/resolver";

export const categories: NonNullable<QueryResolvers["categories"]> =
  retrieveAndCache(
    (_, __, { dataSources }) => dataSources.universeApi.getUniverseCategories(),
    toArrayOfIdObjects
  );
