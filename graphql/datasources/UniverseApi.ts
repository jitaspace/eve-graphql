import { UniverseApi as GeneratedApi } from "@eve-graph/esi-apollo-datasource";
import { GraphQLError } from "graphql";

class UniverseApi extends GeneratedApi {
  async validateRegionId(regionId) {
    const { body } = await super.getUniverseRegions();
    if (!body.includes(parseInt(regionId))) {
      throw new GraphQLError("Invalid region id");
    }
  }

  async getRegionByIdConverted(regionId, opts?, requestInit?) {
    await this.validateRegionId(regionId);
    const result = await super.getUniverseRegionsRegionId(
      regionId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: result.body.region_id,
        name: result.body.name,
        description: result.body.description,
        constellations: result.body.constellations.map((id) => ({ id })),
      },
    };
  }
  async validateConstellationId(constellationId) {
    const { body } = await super.getUniverseConstellations();
    if (!body.includes(parseInt(constellationId))) {
      throw new GraphQLError("Invalid graphic id");
    }
  }

  async getConstellationByIdConverted(constellationId, opts?, requestInit?) {
    await this.validateConstellationId(constellationId);
    const result = await super.getUniverseConstellationsConstellationId(
      constellationId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: constellationId,
        name: result.body.name,
        position: result.body.position,
        region: { id: result.body.region_id },
        solarSystems: result.body.systems.map((id) => ({ id })),
      },
    };
  }

  async getFactionsConverted(opts?, requestInit?) {
    const result = await super.getUniverseFactions(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertFaction),
    };
  }

  async getFactionByIdConverted(factionId, opts?, requestInit?) {
    const result = await super.getUniverseFactions(opts, requestInit);
    return {
      ...result,
      body: this.convertFaction(
        result.body.filter(({ faction_id }) => faction_id == factionId)[0]
      ),
    };
  }

  async validateGraphicId(graphicId) {
    const { body } = await super.getUniverseGraphics();
    if (!body.includes(parseInt(graphicId))) {
      throw new GraphQLError("Invalid graphic id");
    }
  }

  async getGraphicByIdConverted(graphicId, opts?, requestInit?) {
    await this.validateGraphicId(graphicId);
    const result = await super.getUniverseGraphicsGraphicId(
      graphicId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: graphicId,
        collisionFile: result.body.collision_file,
        graphicFile: result.body.graphic_file,
        iconFolder: result.body.icon_folder,
        sofDna: result.body.sof_dna,
        sofFactionName: result.body.sof_fation_name,
        sofHullName: result.body.sof_hull_name,
        sofRaceName: result.body.sof_race_name,
      },
    };
  }

  async getAllGroupIds() {
    //console.log("Checking all groups...");
    const { body, headers } = await super.getUniverseGroups();
    let groupIds = body;
    //console.log("page 1 starts with:", body.slice(0, 5));
    //console.log("num pages:", headers["x-pages"]);
    for (let pageNumber = 2; pageNumber <= headers["x-pages"]; pageNumber++) {
      //console.log("getting page", pageNumber);
      const { body } = await super.getUniverseGroups({ page: pageNumber });
      //console.log("page " + pageNumber + " starts with:", body.slice(0, 5));
      groupIds = groupIds.concat(body);
    }
    // a bit weird, returning just the headers from the first page...
    // but for our use-case it should be fine... fingers crossed.
    return { body: groupIds, headers };
  }

  async validateGroupId(groupId) {
    const { body } = await this.getAllGroupIds();
    if (!body.includes(parseInt(groupId))) {
      throw new GraphQLError("Invalid group id");
    }
  }

  async getGroupByIdConverted(groupId, opts?, requestInit?) {
    await this.validateGroupId(groupId);
    const result = await super.getUniverseGroupsGroupId(
      groupId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: groupId,
        category: { id: result.body.category_id },
        name: result.body.name,
        published: result.body.published,
        types: result.body.types.map((id) => ({ id })),
      },
    };
  }

  async getPlanetByIdConverted(planetId, opts?, requestInit?) {
    const result = await super.getUniversePlanetsPlanetId(
      planetId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: planetId,
        name: result.body.name,
        position: result.body.position,
        solarSystem: { id: result.body.system_id },
        type: { id: result.body.type_id },
      },
    };
  }

  async getRacesConverted(opts?, requestInit?) {
    const result = await super.getUniverseRaces(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertRace),
    };
  }

  async getRaceByIdConverted(raceId, opts?, requestInit?) {
    const result = await super.getUniverseRaces(opts, requestInit);
    return {
      ...result,
      body: this.convertRace(
        result.body.filter(({ race_id }) => race_id == raceId)[0]
      ),
    };
  }

  async validateSolarSystemId(solarSystemId) {
    const { body } = await super.getUniverseSystems();
    if (!body.includes(parseInt(solarSystemId))) {
      throw new GraphQLError("Invalid solar system id");
    }
  }

  async getSolarSystemByIdConverted(solarSystemId, opts?, requestInit?) {
    await this.validateSolarSystemId(solarSystemId);
    const result = await super.getUniverseSystemsSystemId(
      solarSystemId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: solarSystemId,
        constellation: { id: result.body.constellation_id },
        name: result.body.name,
        position: result.body.position,
        planets:
          result.body.planets?.map(({ planet_id }) => ({
            id: planet_id,
          })) ?? [],
        region: { id: result.body.region_id },
        securityClass: result.body.security_class,
        securityStatus: result.body.security_status,
        star: result.body.star_id ? { id: result.body.star_id } : null,
        stargates: result.body.stargates?.map((id) => ({ id })) ?? [],
        stations: result.body.stations?.map((id) => ({ id })) ?? [],
      },
    };
  }

  async getPlanetAsteroidBeltIdsConverted(planetId, opts?, requestInit?) {
    const planet = await super.getUniversePlanetsPlanetId(
      planetId,
      opts,
      requestInit
    );
    const solarSystemId = planet.body.system_id;
    const solarSystem = await super.getUniverseSystemsSystemId(
      solarSystemId,
      opts,
      requestInit
    );
    return {
      ...solarSystem,
      body:
        solarSystem.body.planets
          .filter(({ planet_id }) => planet_id == planetId)[0]
          .asteroid_belts?.map((id) => ({ id })) ?? [],
    };
  }

  async getPlanetMoonIdsConverted(planetId, opts?, requestInit?) {
    const planet = await super.getUniversePlanetsPlanetId(
      planetId,
      opts,
      requestInit
    );
    const solarSystemId = planet.body.system_id;
    const solarSystem = await super.getUniverseSystemsSystemId(
      solarSystemId,
      opts,
      requestInit
    );
    return {
      ...solarSystem,
      body:
        solarSystem.body.planets
          .filter(({ planet_id }) => planet_id == planetId)[0]
          .moons?.map((id) => ({ id })) ?? [],
    };
  }

  async getStarByIdConverted(starId, opts?, requestInit?) {
    const result = await super.getUniverseStarsStarId(
      starId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: starId,
        age: result.body.age,
        luminosity: result.body.luminosity,
        name: result.body.name,
        radius: result.body.radius,
        solarSystem: { id: result.body.solar_system_id },
        spectralClass: result.body.spectral_class,
        temperature: result.body.temperature,
        type: { id: result.body.type_id },
      },
    };
  }

  async getStargateByIdConverted(stargateId, opts?, requestInit?) {
    const result = await super.getUniverseStargatesStargateId(
      stargateId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: stargateId,
        name: result.body.name,
        destination: {
          id: result.body.destination.stargate_id,
        },
        position: result.body.position,
        solarSystem: { id: result.body.system_id },
        type: { id: result.body.type_id },
      },
    };
  }

  async getStationByIdConverted(stationId, opts?, requestInit?) {
    const result = await super.getUniverseStationsStationId(
      stationId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: stationId,
        name: result.body.name,
        position: result.body.position,
        // Patch for Doomheim which returns an invalid solar system ID of 1.
        solarSystem:
          result.body.system_id != 1 ? { id: result.body.system_id } : null,
        type: { id: result.body.type_id },
        maxDockableShipVolume: result.body.max_dockable_ship_volume,
        officeRentalCost: result.body.office_rental_cost,
        reprocessingEfficiency: result.body.reprocessing_efficiency,
        reprocessingStationsTake: result.body.reprocessing_stations_take,
        services: result.body.services,
        owner: result.body.owner ? { id: result.body.owner } : null,
        race: result.body.race_id ? { id: result.body.race_id } : null,
      },
    };
  }

  async getAllTypeIds() {
    console.log("Checking all types...");
    const { body, headers } = await super.getUniverseTypes();
    let typeIds = body;
    console.log("page 1 starts with:", body.slice(0, 5));
    console.log("num pages:", headers["x-pages"]);
    for (let pageNumber = 2; pageNumber <= headers["x-pages"]; pageNumber++) {
      console.log("getting page", pageNumber);
      const { body } = await super.getUniverseTypes({ page: pageNumber });
      console.log("page " + pageNumber + " starts with:", body.slice(0, 5));
      typeIds = typeIds.concat(body);
    }
    // a bit weird, returning just the headers from the first page...
    // but for our use-case it should be fine... fingers crossed.
    return { body: typeIds, headers };
  }

  async getTypeByIdConverted(typeId, opts?, requestInit?) {
    const result = await super.getUniverseTypesTypeId(
      typeId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: typeId,
        name: result.body.name,
        group: { id: result.body.group_id },
        description: result.body.description,
        mass: result.body.mass,
        volume: result.body.volume,
        packagedVolume: result.body.packaged_volume,
        portionSize: result.body.portion_size,
        capacity: result.body.capacity,
        published: result.body.published,
        radius: result.body.radius,
        marketGroup: result.body.market_group_id
          ? { id: result.body.market_group_id }
          : null,
        graphic: result.body.graphic_id ? { id: result.body.graphic_id } : null,
        icon: result.body.icon_id ? { id: result.body.icon_id } : null,
        attributes:
          result.body.dogma_attributes?.map(({ attribute_id, value }) => ({
            attribute: { id: attribute_id },
            value,
          })) ?? [],
        effects:
          result.body.dogma_effects?.map(({ effect_id, is_default }) => ({
            effect: { id: effect_id },
            isDefault: is_default,
          })) ?? [],
      },
    };
  }

  async getMoonByIdConverted(moonId, opts?, requestInit?) {
    const result = await super.getUniverseMoonsMoonId(
      moonId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: moonId,
        name: result.body.name,
        position: result.body.position,
        solarSystem: { id: result.body.system_id },
      },
    };
  }

  async getAsteroidBeltByIdConverted(asteroidBeltId, opts?, requestInit?) {
    const result = await super.getUniverseAsteroidBeltsAsteroidBeltId(
      asteroidBeltId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: asteroidBeltId,
        name: result.body.name,
        position: result.body.position,
        solarSystem: { id: result.body.system_id },
      },
    };
  }

  async getBloodlinesConverted(opts?, requestInit?) {
    const result = await super.getUniverseBloodlines(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertBloodline),
    };
  }

  async getBloodlineByIdConverted(bloodlineId, opts?, requestInit?) {
    const result = await super.getUniverseBloodlines(opts, requestInit);
    return {
      ...result,
      body: this.convertBloodline(
        result.body.filter(({ bloodline_id }) => bloodline_id == bloodlineId)[0]
      ),
    };
  }

  async getCategoryByIdConverted(categoryId, opts?, requestInit?) {
    const result = await super.getUniverseCategoriesCategoryId(
      categoryId,
      opts,
      requestInit
    );
    return {
      ...result,
      body: {
        id: categoryId,
        name: result.body.name,
        published: result.body.published,
        groups: result.body.groups.map((id) => ({ id })),
      },
    };
  }

  async getSystemJumpsConverted(opts?, requestInit?) {
    const result = await super.getUniverseSystemJumps(opts, requestInit);
    return {
      ...result,
      body: result.body.map(({ system_id, ship_jumps }) => ({
        id: system_id,
        shipJumps: ship_jumps,
      })),
    };
  }

  async getSystemJumpsBySystemIdConverted(systemId, opts?, requestInit?) {
    const result = await super.getUniverseSystemJumps(opts, requestInit);
    return {
      ...result,
      body:
        result.body.filter(
          ({ system_id }) => system_id == parseInt(systemId)
        )[0]?.ship_jumps ?? 0,
    };
  }

  async getSystemKillsConverted(opts?, requestInit?) {
    const result = await super.getUniverseSystemKills(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertSystemKills),
    };
  }

  async getSystemKillsBySystemIdConverted(systemId, opts?, requestInit?) {
    const result = await super.getUniverseSystemKills(opts, requestInit);
    const system = result.body.filter(({ system_id }) => system_id == systemId);
    return {
      ...result,
      body: this.convertSystemKills(
        system.length > 0 ? system[0] : { system_id: systemId }
      ),
    };
  }

  async getAncestriesConverted(opts?, requestInit?) {
    const result = await super.getUniverseAncestries(opts, requestInit);
    return {
      ...result,
      body: result.body.map(this.convertAncestry),
    };
  }

  async getAncestryByIdConverted(ancestryId, opts?, requestInit?) {
    const result = await super.getUniverseAncestries(opts, requestInit);
    return {
      ...result,
      body: this.convertAncestry(
        result.body.filter(({ id }) => id == ancestryId)[0]
      ),
    };
  }

  convertAncestry = ({
    id,
    bloodline_id,
    description,
    icon_id,
    name,
    short_description,
  }) => ({
    id: id,
    bloodline: { id: bloodline_id },
    description: description,
    icon: icon_id ? { id: icon_id } : null,
    name: name,
    shortDescription: short_description,
  });

  convertSystemKills = (systemKills) => ({
    id: systemKills.system_id,
    npcKills: systemKills.npc_kills ?? 0,
    podKills: systemKills.pod_kills ?? 0,
    shipKills: systemKills.ship_kills ?? 0,
  });

  convertBloodline = ({
    bloodline_id,
    charisma,
    corporation_id,
    description,
    intelligence,
    memory,
    name,
    perception,
    race_id,
    ship_type_id,
    willpower,
  }) => ({
    id: bloodline_id,
    charisma,
    corporation: {
      id: corporation_id,
    },
    description,
    intelligence,
    memory,
    name,
    perception,
    race: race_id && !isNaN(race_id) ? { id: race_id } : null,
    shipType:
      ship_type_id && !isNaN(ship_type_id) ? { id: ship_type_id } : null,
    willpower,
  });

  convertRace = ({ race_id, name, description, alliance_id }) => ({
    id: race_id,
    name,
    description,
    // These alliance IDs are actually faction IDs
    // see https://github.com/esi/esi-issues/issues/1333
    faction: { id: alliance_id },
  });

  convertFaction = ({
    corporation_id,
    description,
    faction_id,
    is_unique,
    militia_corporation_id,
    name,
    size_factor,
    solar_system_id,
    station_count,
    station_system_count,
  }) => ({
    id: faction_id,
    corporation: corporation_id ? { id: corporation_id } : null,
    description: description,
    isUnique: is_unique,
    militiaCorporation: militia_corporation_id
      ? { id: militia_corporation_id }
      : null,
    name,
    sizeFactor: size_factor,
    solarSystem: solar_system_id ? { id: solar_system_id } : null,
    stationCount: station_count,
    stationSystemCount: station_system_count,
  });
}

export default UniverseApi;
