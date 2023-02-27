import { RESTDataSource } from "@apollo/datasource-rest";
import { GraphQLError } from "graphql";

// FIXME: change to an SQL backend from fuzzworks
class StaticDataApi extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = "https://sde.jita.space/";
  }

  // @ts-ignore
  async didReceiveResponse(response, request) {
    if (response.ok) {
      return {
        body: await this.parseBody(response),
        headers: {
          ...Object.fromEntries(response.headers.entries()),
          expires: new Date(Date.now() + 3600 * 1000).toUTCString(),
        },
      };
    }
  }

  override cacheOptionsFor(response, request) {
    // cache stuff for one hour
    return {
      ttl: 3600,
    };
  }

  async isAgent(id) {
    const { body, headers } = await this.get("agents.json");
    return body.hasOwnProperty(id);
  }

  async isAgentInSpace(id) {
    const { body } = await this.get("agentsInSpace.json");
    return body.hasOwnProperty(id);
    //return body.map(({ agentID }) => agentID).includes(Number(id));
  }

  async isResearchAgent(id) {
    const { body } = await this.get("researchAgents.json");
    return body.hasOwnProperty(id);
    //return body.map(({ agentID }) => agentID).includes(Number(id));
  }

  async getAgents() {
    const { body, headers } = await this.get("agents.json");
    return {
      headers,
      body: Object.values(body).map((agent: any) => ({
        id: agent.characterID,
        level: agent.level,
        isLocator: agent.isLocator == 1,
        division: {
          id: agent.divisionID,
          //name: npcCorporationDivisions[agent.divisionID].internalName,
        },
        corporation: { id: agent.corporationID },
        location: { id: agent.locationID },
        agentType: { id: agent.agentTypeID },
      })),
    };
  }

  async getAgentsInSpace() {
    const { body, headers } = await this.get("agentsInSpace.json");
    return {
      headers,
      body: Object.values(body).map((agent: any) => ({
        id: agent.characterID,
        dungeon: { id: agent.dungeonID },
        solarSystem: { id: agent.solarSystemID },
        spawnPoint: { id: agent.spawnPointID },
        type: { id: agent.typeID },
      })),
    };
  }

  async getResearchAgents() {
    const { body, headers } = await this.get("researchAgents.json");
    return {
      headers,
      body: Object.values(body).map(({ characterID, skills }) => ({
        id: characterID,
        researchSkills: skills.map(({ typeID }) => ({ id: typeID })),
      })),
    };
  }

  async getAgent(id) {
    const { body, headers } = await this.getAgents();
    return {
      headers,
      body: body.filter((agent) => agent.id == id)[0],
    };
  }

  async getAgentDivision(id) {
    const { body, headers } = await this.get("npcCorporationDivisions.json");
    return {
      headers,
      body: {
        id,
        description: body[id].description,
        name: body[id].nameID.en,
        internalName: body[id].internalName,
        leaderType: body[id].leaderTypeNameID.en,
      },
    };
  }

  async getAgentInSpace(id) {
    const { body, headers } = await this.get("agentsInSpace.json");
    return {
      headers,
      body: {
        id: body[id].characterID,
        dungeon: { id: body[id].dungeonID },
        solarSystem: { id: body[id].solarSystemID },
        spawnPoint: { id: body[id].spawnPointID },
        type: { id: body[id].typeID },
      },
    };
  }

  async getResearchAgent(id) {
    const { body, headers } = await this.get("researchAgents.json");
    console.log("GET RESEARCH AGENT", id, body[id]);
    return {
      headers,
      body: {
        id: body[id].characterID,
        researchSkills: body[id].skills.map(({ typeID }) => ({ id: typeID })),
      },
    };
  }

  async getIcons() {
    const { body, headers } = await this.get("/iconIDs.json");
    return {
      headers,
      body: Object.values(body).map(({ iconID, iconFile, description }) => ({
        id: iconID,
        file: iconFile,
        description: description,
      })),
    };
  }

  async validateIconId(iconId) {
    const { body } = await this.get("/iconIDs.json");
    if (!body.hasOwnProperty(iconId)) {
      console.log("invalid icon id: " + iconId);
      throw new GraphQLError("Invalid icon id " + iconId);
    }
  }

  async getIcon(id) {
    await this.validateIconId(id);
    const { body, headers } = await this.get("/iconIDs.json");
    return {
      headers,
      body: {
        id: id,
        file: body[id].iconFile,
        description: body[id].description,
      },
    };
  }
}

export default StaticDataApi;
