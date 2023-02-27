import { RESTDataSource } from "@apollo/datasource-rest";

// FIXME: change to an SQL backend from fuzzworks
class HoboleaksApi extends RESTDataSource {
  constructor(options) {
    super(options);
    this.baseURL = "https://sde.hoboleaks.space/tq";
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

  async getDogmaUnits() {
    const { body, headers } = await this.get("dogmaunits.json");
    return {
      headers,
      body: Object.keys(body),
    };
  }

  async getDogmaUnitById(id) {
    const { body, headers } = await this.get("dogmaunits.json");
    return {
      headers,
      body: {
        id,
        name: body[id].name,
        displayName: body[id].displayName,
        description: body[id].description,
      },
    };
  }

  async getAgentTypes() {
    const { body, headers } = await this.get("agenttypes.json");
    return {
      headers,
      body: Object.keys(body).map((id) => ({
        id,
        name: body[id],
      })),
    };
  }

  async getAgentType(id) {
    const { body, headers } = await this.get("agenttypes.json");
    return {
      headers,
      body: { id: id, name: body[id] },
    };
  }
}

export default HoboleaksApi;
