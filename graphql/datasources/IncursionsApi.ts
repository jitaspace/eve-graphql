import { IncursionsApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class IncursionsApi extends GeneratedApi {
  async getIncursionsConverted(opts?, requestInit?) {
    const result = await super.getIncursions(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertIncursion),
    };
  }

  convertIncursion = ({
    constellation_id,
    faction_id,
    has_boss,
    infested_solar_systems,
    influence,
    staging_solar_system_id,
    state,
    type,
  }) => ({
    constellation: {
      id: constellation_id,
    },
    faction: { id: faction_id },
    hasBoss: has_boss,
    infestedSolarSystems: infested_solar_systems.map((id) => ({
      id,
    })),
    influence: influence,
    stagingSolarSystem: {
      id: staging_solar_system_id,
    },
    state: state.toUpperCase(),
    type: type,
  });
}

export default IncursionsApi;
