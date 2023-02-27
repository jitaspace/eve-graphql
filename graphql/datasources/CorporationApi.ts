import { CorporationApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class CorporationApi extends GeneratedApi {
  async getCorporationApiByIdConverted(corporationId, opts?, requestInit?) {
    const result = await super.getCorporationsCorporationId(
      corporationId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: corporationId,
        alliance: result.body.alliance_id
          ? { id: result.body.alliance_id }
          : null,
        // workaround for https://github.com/esi/esi-issues/issues/453 (or maybe unreported?)
        // in NPC corporations, the ceo_id may be set to 1 to denote that there is no CEO
        ceo: result.body.ceo_id != 1 ? { id: result.body.ceo_id } : null,
        // workaround for https://github.com/esi/esi-issues/issues/453
        // in NPC corporations, the creator_id may be set to 1 to denote that there is no corporation creator
        creator:
          result.body.creator_id != 1 ? { id: result.body.creator_id } : null,
        dateFounded: result.body.date_founded,
        description: result.body.description,
        faction: result.body.faction_id ? { id: result.body.faction_id } : null,
        homeStation: result.body.home_station_id
          ? { id: result.body.home_station_id }
          : null,
        memberCount: result.body.member_count,
        name: result.body.name,
        shares: result.body.shares,
        taxRate: result.body.tax_rate,
        ticker: result.body.ticker,
        url: result.body.url,
        warEligible: result.body.war_eligible,
      },
    };
  }

  async getCorporationAllianceHistoryConverted(
    corporationId,
    opts?,
    requestInit?
  ) {
    const result = await super.getCorporationsCorporationIdAlliancehistory(
      corporationId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: result.body.map(
        ({ alliance_id, start_date, record_id, is_deleted }) => ({
          alliance: alliance_id ? { id: alliance_id } : null,
          startDate: start_date,
          recordId: record_id,
          isDeleted: is_deleted === null,
        })
      ),
    };
  }

  async getCorporationIconsConverted(corporationId, opts?, requestInit?) {
    const result = await super.getCorporationsCorporationIdIcons(
      corporationId,
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

export default CorporationApi;
