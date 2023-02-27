import { MarketApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class MarketApi extends GeneratedApi {
  async getMarketGroupByIdConverted(marketGroupId, opts?, requestInit?) {
    const result = await super.getMarketsGroupsMarketGroupId(
      marketGroupId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: marketGroupId,
        name: result.body.name,
        description: result.body.description,
        parentGroup: result.body.parent_group_id
          ? { id: result.body.parent_group_id }
          : null,
        types: result.body.types.map((id) => ({ id })),
      },
    };
  }
}

export default MarketApi;
