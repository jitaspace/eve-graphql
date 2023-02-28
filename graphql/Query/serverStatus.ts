import type { QueryResolvers } from "./../types.generated";
import { retrieveAndCache } from "@/graphql/utils/resolver";

export const serverStatus: NonNullable<QueryResolvers["serverStatus"]> =
  retrieveAndCache((_, { id }, { dataSources }) =>
    dataSources.statusApi.getConvertedStatus()
  );
