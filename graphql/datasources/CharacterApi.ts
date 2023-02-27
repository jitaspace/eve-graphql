import { CharacterApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class CharacterApi extends GeneratedApi {
  async getCharacterByIdConverted(characterId, opts?, requestInit?) {
    const result = await super.getCharactersCharacterId(
      characterId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: characterId,
        alliance: result.body.alliance_id
          ? { id: result.body.alliance_id }
          : null,
        birthday: result.body.birthday,
        bloodline: { id: result.body.bloodline_id },
        corporation: { id: result.body.corporation_id },
        description: result.body.description,
        faction: result.body.faction_id ? { id: result.body.faction_id } : null,
        gender: result.body.gender,
        name: result.body.name,
        race: { id: result.body.race_id },
        securityStatus: result.body.security_status,
        title: result.body.title,
      },
    };
  }

  async getCharacterCorporationHistoryConverted(
    characterId,
    opts?,
    requestInit?
  ) {
    const result = await super.getCharactersCharacterIdCorporationhistory(
      characterId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: result.body.map((membership) => ({
        id: membership.corporation_id,
        startDate: membership.start_date,
        recordId: membership.record_id,
        corporation: { id: membership.corporation_id },
        isDeleted: membership.is_deleted === null,
      })),
    };
  }

  async getCharacterPortraitsConverted(characterId, opts?, requestInit?) {
    const result = await super.getCharactersCharacterIdPortrait(
      characterId,
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

export default CharacterApi;
