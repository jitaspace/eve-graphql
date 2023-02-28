// @ts-expect-error
import { AllianceApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class AllianceApi extends GeneratedApi {
  async getAllianceByIdConverted(allianceId, opts?, requestInit?) {
    const result = await super.getAlliancesAllianceId(
      allianceId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: allianceId,
        creatorCorporation: { id: result.body.creator_corporation_id },
        creator: { id: result.body.creator_id },
        dateFounded: result.body.date_founded,
        executorCorporation: result.body.executor_corporation_id
          ? { id: result.body.executor_corporation_id }
          : null,
        faction: result.body.faction_id ? { id: result.body.faction_id } : null,
        name: result.body.name,
        ticker: result.body.ticker,
      },
    };
  }

  async getAllianceIconsConverted(allianceId, opts?, requestInit?) {
    const result = await super.getAlliancesAllianceIdIcons(
      allianceId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: Object.keys(result.body).map((name) => ({
        name,
        url: result.body[name],
      })),
    };
  }
}

export default AllianceApi;
