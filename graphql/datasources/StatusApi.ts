import { StatusApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";

class StatusApi extends GeneratedApi {
  async getConvertedStatus(opts?, requestInit?) {
    const result = await super.getStatus(opts, requestInit);
    return {
      ...result,
      body: {
        id: opts?.datasource ?? "tranquility",
        numPlayers: result.body.players,
        version: result.body.server_version,
        startTime: new Date(result.body.start_time).toISOString(),
        vipMode: result.body.vip ?? false,
        lastUpdated: result.headers["last-modified"],
      },
    };
  }
}

export default StatusApi;
