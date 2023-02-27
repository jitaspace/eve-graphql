import type { QueryResolvers } from "./../types.generated";

export const ping: NonNullable<QueryResolvers["ping"]> = async (
  _parent,
  _arg,
  { dataSources }
) => {
  dataSources.metaApi.getPing();
};
