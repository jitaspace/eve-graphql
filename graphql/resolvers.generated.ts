/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from "./types.generated";
import { AgentDivision } from "./AgentDivision";
import { AgentInSpace } from "./AgentInSpace";
import { AgentType } from "./AgentType";
import { Alliance } from "./Alliance";
import { AllianceMembership } from "./AllianceMembership";
import { Ancestry } from "./Ancestry";
import { AppliedAttribute } from "./AppliedAttribute";
import { AppliedEffect } from "./AppliedEffect";
import { AsteroidBelt } from "./AsteroidBelt";
import { Attribute } from "./Attribute";
import { AuthenticatedPlayer } from "./AuthenticatedPlayer";
import { Bloodline } from "./Bloodline";
import { Category } from "./Category";
import { Constellation } from "./Constellation";
import { Corporation } from "./Corporation";
import { CorporationMembership } from "./CorporationMembership";
import { Dungeon } from "./Dungeon";
import { Effect } from "./Effect";
import { EffectModifier } from "./EffectModifier";
import { Endpoint } from "./Endpoint";
import { Faction } from "./Faction";
import { Graphic } from "./Graphic";
import { Group } from "./Group";
import { Icon } from "./Icon";
import { ImageVariation } from "./ImageVariation";
import { Incursion } from "./Incursion";
import { ItemExchangeContract } from "./ItemExchangeContract";
import { MarketGroup } from "./MarketGroup";
import { Moon } from "./Moon";
import { nop as Mutation_nop } from "./Mutation/nop";
import { OpportunityGroup } from "./OpportunityGroup";
import { OpportunityTask } from "./OpportunityTask";
import { Planet } from "./Planet";
import { Player } from "./Player";
import { PlayerLocation } from "./PlayerLocation";
import { PlayerOnlineStatus } from "./PlayerOnlineStatus";
import { PlayerShip } from "./PlayerShip";
import { Position } from "./Position";
import { agent as Query_agent } from "./Query/agent";
import { agents as Query_agents } from "./Query/agents";
import { alliance as Query_alliance } from "./Query/alliance";
import { alliances as Query_alliances } from "./Query/alliances";
import { ancestries as Query_ancestries } from "./Query/ancestries";
import { ancestry as Query_ancestry } from "./Query/ancestry";
import { asteroidBelt as Query_asteroidBelt } from "./Query/asteroidBelt";
import { attribute as Query_attribute } from "./Query/attribute";
import { attributes as Query_attributes } from "./Query/attributes";
import { bloodline as Query_bloodline } from "./Query/bloodline";
import { bloodlines as Query_bloodlines } from "./Query/bloodlines";
import { categories as Query_categories } from "./Query/categories";
import { category as Query_category } from "./Query/category";
import { character as Query_character } from "./Query/character";
import { constellation as Query_constellation } from "./Query/constellation";
import { constellations as Query_constellations } from "./Query/constellations";
import { corporation as Query_corporation } from "./Query/corporation";
import { effect as Query_effect } from "./Query/effect";
import { effects as Query_effects } from "./Query/effects";
import { faction as Query_faction } from "./Query/faction";
import { factions as Query_factions } from "./Query/factions";
import { graphic as Query_graphic } from "./Query/graphic";
import { graphics as Query_graphics } from "./Query/graphics";
import { group as Query_group } from "./Query/group";
import { groups as Query_groups } from "./Query/groups";
import { icon as Query_icon } from "./Query/icon";
import { icons as Query_icons } from "./Query/icons";
import { incursions as Query_incursions } from "./Query/incursions";
import { marketGroup as Query_marketGroup } from "./Query/marketGroup";
import { marketGroups as Query_marketGroups } from "./Query/marketGroups";
import { me as Query_me } from "./Query/me";
import { moon as Query_moon } from "./Query/moon";
import { npcCorporations as Query_npcCorporations } from "./Query/npcCorporations";
import { opportunityGroup as Query_opportunityGroup } from "./Query/opportunityGroup";
import { opportunityGroups as Query_opportunityGroups } from "./Query/opportunityGroups";
import { opportunityTask as Query_opportunityTask } from "./Query/opportunityTask";
import { opportunityTasks as Query_opportunityTasks } from "./Query/opportunityTasks";
import { ping as Query_ping } from "./Query/ping";
import { planet as Query_planet } from "./Query/planet";
import { race as Query_race } from "./Query/race";
import { races as Query_races } from "./Query/races";
import { region as Query_region } from "./Query/region";
import { regions as Query_regions } from "./Query/regions";
import { serverStatus as Query_serverStatus } from "./Query/serverStatus";
import { solarSystem as Query_solarSystem } from "./Query/solarSystem";
import { solarSystems as Query_solarSystems } from "./Query/solarSystems";
import { star as Query_star } from "./Query/star";
import { stargate as Query_stargate } from "./Query/stargate";
import { station as Query_station } from "./Query/station";
import { status as Query_status } from "./Query/status";
import { type as Query_type } from "./Query/type";
import { types as Query_types } from "./Query/types";
import { unit as Query_unit } from "./Query/unit";
import { units as Query_units } from "./Query/units";
import { Race } from "./Race";
import { Region } from "./Region";
import { RegularAgent } from "./RegularAgent";
import { ResearchAgent } from "./ResearchAgent";
import { ServerStatus } from "./ServerStatus";
import { SolarSystem } from "./SolarSystem";
import { SpawnPoint } from "./SpawnPoint";
import { Star } from "./Star";
import { Stargate } from "./Stargate";
import { Station } from "./Station";
import { Structure } from "./Structure";
import { hello as Subscription_hello } from "./Subscription/hello";
import { postCreated as Subscription_postCreated } from "./Subscription/postCreated";
import { serverStatus as Subscription_serverStatus } from "./Subscription/serverStatus";
import { Type } from "./Type";
import { Unit } from "./Unit";
export const resolvers: Resolvers = {
  Query: {
    agent: Query_agent,
    agents: Query_agents,
    alliance: Query_alliance,
    alliances: Query_alliances,
    ancestries: Query_ancestries,
    ancestry: Query_ancestry,
    asteroidBelt: Query_asteroidBelt,
    attribute: Query_attribute,
    attributes: Query_attributes,
    bloodline: Query_bloodline,
    bloodlines: Query_bloodlines,
    categories: Query_categories,
    category: Query_category,
    character: Query_character,
    constellation: Query_constellation,
    constellations: Query_constellations,
    corporation: Query_corporation,
    effect: Query_effect,
    effects: Query_effects,
    faction: Query_faction,
    factions: Query_factions,
    graphic: Query_graphic,
    graphics: Query_graphics,
    group: Query_group,
    groups: Query_groups,
    icon: Query_icon,
    icons: Query_icons,
    incursions: Query_incursions,
    marketGroup: Query_marketGroup,
    marketGroups: Query_marketGroups,
    me: Query_me,
    moon: Query_moon,
    npcCorporations: Query_npcCorporations,
    opportunityGroup: Query_opportunityGroup,
    opportunityGroups: Query_opportunityGroups,
    opportunityTask: Query_opportunityTask,
    opportunityTasks: Query_opportunityTasks,
    ping: Query_ping,
    planet: Query_planet,
    race: Query_race,
    races: Query_races,
    region: Query_region,
    regions: Query_regions,
    serverStatus: Query_serverStatus,
    solarSystem: Query_solarSystem,
    solarSystems: Query_solarSystems,
    star: Query_star,
    stargate: Query_stargate,
    station: Query_station,
    status: Query_status,
    type: Query_type,
    types: Query_types,
    unit: Query_unit,
    units: Query_units,
  },
  Mutation: { nop: Mutation_nop },
  Subscription: {
    hello: Subscription_hello,
    postCreated: Subscription_postCreated,
    serverStatus: Subscription_serverStatus,
  },
  AgentDivision: AgentDivision,
  AgentInSpace: AgentInSpace,
  AgentType: AgentType,
  Alliance: Alliance,
  AllianceMembership: AllianceMembership,
  Ancestry: Ancestry,
  AppliedAttribute: AppliedAttribute,
  AppliedEffect: AppliedEffect,
  AsteroidBelt: AsteroidBelt,
  Attribute: Attribute,
  AuthenticatedPlayer: AuthenticatedPlayer,
  Bloodline: Bloodline,
  Category: Category,
  Constellation: Constellation,
  Corporation: Corporation,
  CorporationMembership: CorporationMembership,
  Dungeon: Dungeon,
  Effect: Effect,
  EffectModifier: EffectModifier,
  Endpoint: Endpoint,
  Faction: Faction,
  Graphic: Graphic,
  Group: Group,
  Icon: Icon,
  ImageVariation: ImageVariation,
  Incursion: Incursion,
  ItemExchangeContract: ItemExchangeContract,
  MarketGroup: MarketGroup,
  Moon: Moon,
  OpportunityGroup: OpportunityGroup,
  OpportunityTask: OpportunityTask,
  Planet: Planet,
  Player: Player,
  PlayerLocation: PlayerLocation,
  PlayerOnlineStatus: PlayerOnlineStatus,
  PlayerShip: PlayerShip,
  Position: Position,
  Race: Race,
  Region: Region,
  RegularAgent: RegularAgent,
  ResearchAgent: ResearchAgent,
  ServerStatus: ServerStatus,
  SolarSystem: SolarSystem,
  SpawnPoint: SpawnPoint,
  Star: Star,
  Stargate: Stargate,
  Station: Station,
  Structure: Structure,
  Type: Type,
  Unit: Unit,
};
