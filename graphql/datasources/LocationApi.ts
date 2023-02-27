import { LocationApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class LocationApi extends GeneratedApi {
  async getCharacterLocationConverted(id, opts?, requestInit?) {
    const result = await super.getCharactersCharacterIdLocation(
      id,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        solarSystem: { id: result.body.solar_system_id },
        station: result.body.station_id ? { id: result.body.station_id } : null,
        structure: result.body.structure_id
          ? { id: result.body.structure_id }
          : null,
      },
    };
  }
}

export default LocationApi;
