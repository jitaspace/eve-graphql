import { GraphQLResolveInfo } from "graphql";
import { ContextValue } from "../types/graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Agent = {
  agentType: AgentType;
  alliance?: Maybe<Alliance>;
  birthday: Scalars["String"];
  bloodline: Bloodline;
  corporation: Corporation;
  corporationHistory: Array<CorporationMembership>;
  description?: Maybe<Scalars["String"]>;
  division: AgentDivision;
  faction?: Maybe<Faction>;
  gender: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  isLocator: Scalars["Boolean"];
  level: Scalars["Int"];
  location: Station;
  name: Scalars["String"];
  race: Race;
  securityStatus?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type AgentDivision = {
  __typename: "AgentDivision";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type AgentInSpace = Agent &
  Character & {
    __typename: "AgentInSpace";
    agentType: AgentType;
    alliance?: Maybe<Alliance>;
    birthday: Scalars["String"];
    bloodline: Bloodline;
    corporation: Corporation;
    corporationHistory: Array<CorporationMembership>;
    description?: Maybe<Scalars["String"]>;
    division: AgentDivision;
    dungeon: Dungeon;
    faction?: Maybe<Faction>;
    gender: Scalars["String"];
    id: Scalars["ID"];
    images: Array<ImageVariation>;
    isLocator: Scalars["Boolean"];
    level: Scalars["Int"];
    location: Station;
    name: Scalars["String"];
    race: Race;
    securityStatus?: Maybe<Scalars["Float"]>;
    solarSystem: SolarSystem;
    spawnPoint: SpawnPoint;
    title?: Maybe<Scalars["String"]>;
    type: Type;
  };

export type AgentType = {
  __typename: "AgentType";
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Alliance = {
  __typename: "Alliance";
  corporations: Array<Corporation>;
  creator: Character;
  creatorCorporation: Corporation;
  dateFounded: Scalars["String"];
  executorCorporation?: Maybe<Corporation>;
  faction?: Maybe<Faction>;
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  name: Scalars["String"];
  ticker: Scalars["String"];
};

export type AllianceMembership = {
  __typename: "AllianceMembership";
  alliance?: Maybe<Alliance>;
  isDeleted: Scalars["Boolean"];
  recordId: Scalars["Int"];
  startDate: Scalars["String"];
};

export type Ancestry = {
  __typename: "Ancestry";
  bloodline: Bloodline;
  description: Scalars["String"];
  icon?: Maybe<Icon>;
  id: Scalars["ID"];
  name: Scalars["String"];
  shortDescription?: Maybe<Scalars["String"]>;
};

export type AppliedAttribute = {
  __typename: "AppliedAttribute";
  attribute: Attribute;
  value: Scalars["Float"];
};

export type AppliedEffect = {
  __typename: "AppliedEffect";
  effect: Effect;
  isDefault: Scalars["Boolean"];
};

export type AsteroidBelt = {
  __typename: "AsteroidBelt";
  id: Scalars["ID"];
  name: Scalars["String"];
  position: Position;
  solarSystem: SolarSystem;
};

export type Attribute = {
  __typename: "Attribute";
  defaultValue?: Maybe<Scalars["Float"]>;
  description?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  highIsGood?: Maybe<Scalars["Boolean"]>;
  icon?: Maybe<Icon>;
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  published?: Maybe<Scalars["Boolean"]>;
  stackable?: Maybe<Scalars["Boolean"]>;
  unit?: Maybe<Unit>;
};

export type AuthenticatedPlayer = Character & {
  __typename: "AuthenticatedPlayer";
  alliance?: Maybe<Alliance>;
  birthday: Scalars["String"];
  bloodline: Bloodline;
  corporation: Corporation;
  corporationHistory: Array<CorporationMembership>;
  description?: Maybe<Scalars["String"]>;
  faction?: Maybe<Faction>;
  gender: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  location: PlayerLocation;
  name: Scalars["String"];
  race: Race;
  securityStatus?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Bloodline = {
  __typename: "Bloodline";
  charisma: Scalars["Int"];
  corporation: Corporation;
  description: Scalars["String"];
  id: Scalars["ID"];
  intelligence: Scalars["Int"];
  memory: Scalars["Int"];
  name: Scalars["String"];
  perception: Scalars["Int"];
  race: Race;
  shipType?: Maybe<Type>;
  willpower: Scalars["Int"];
};

export type CacheControlScope = "PRIVATE" | "PUBLIC";

export type Category = {
  __typename: "Category";
  groups: Array<Group>;
  id: Scalars["ID"];
  name: Scalars["String"];
  published: Scalars["Boolean"];
};

export type Character = {
  alliance?: Maybe<Alliance>;
  birthday: Scalars["String"];
  bloodline: Bloodline;
  corporation: Corporation;
  corporationHistory: Array<CorporationMembership>;
  description?: Maybe<Scalars["String"]>;
  faction?: Maybe<Faction>;
  gender: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  name: Scalars["String"];
  race: Race;
  securityStatus?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Constellation = {
  __typename: "Constellation";
  id: Scalars["ID"];
  name: Scalars["String"];
  position: Position;
  region: Region;
  solarSystems: Array<SolarSystem>;
};

export type Contract = {
  dateExpired: Scalars["String"];
  dateIssued: Scalars["String"];
  daysToComplete?: Maybe<Scalars["Int"]>;
  forCorporation: Scalars["Boolean"];
  id: Scalars["ID"];
  issuer?: Maybe<Character>;
  issuerCorporation?: Maybe<Corporation>;
  title?: Maybe<Scalars["String"]>;
  type: ContractType;
  volume?: Maybe<Scalars["Float"]>;
};

export type ContractType =
  | "auction"
  | "courier"
  | "itemexchange"
  | "loan"
  | "unknown";

export type Corporation = {
  __typename: "Corporation";
  alliance?: Maybe<Alliance>;
  allianceHistory: Array<AllianceMembership>;
  ceo?: Maybe<Character>;
  creator?: Maybe<Character>;
  dateFounded?: Maybe<Scalars["String"]>;
  description?: Maybe<Scalars["String"]>;
  faction?: Maybe<Faction>;
  homeStation?: Maybe<Station>;
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  memberCount: Scalars["Int"];
  name: Scalars["String"];
  shares?: Maybe<Scalars["Int"]>;
  taxRate: Scalars["Float"];
  ticker: Scalars["String"];
  url?: Maybe<Scalars["String"]>;
  warEligible?: Maybe<Scalars["Boolean"]>;
};

export type CorporationMembership = {
  __typename: "CorporationMembership";
  corporation: Corporation;
  isDeleted: Scalars["Boolean"];
  recordId: Scalars["Int"];
  startDate: Scalars["String"];
};

export type Dungeon = {
  __typename: "Dungeon";
  id: Scalars["ID"];
};

export type Effect = {
  __typename: "Effect";
  description?: Maybe<Scalars["String"]>;
  disallowAutoRepeat?: Maybe<Scalars["Boolean"]>;
  dischargeAttribute?: Maybe<Attribute>;
  displayName?: Maybe<Scalars["String"]>;
  durationAttribute?: Maybe<Attribute>;
  effectCategory?: Maybe<Scalars["Int"]>;
  electronicChance?: Maybe<Scalars["Boolean"]>;
  falloffAttribute?: Maybe<Attribute>;
  icon?: Maybe<Icon>;
  id: Scalars["ID"];
  isAssistance?: Maybe<Scalars["Boolean"]>;
  isOffensive?: Maybe<Scalars["Boolean"]>;
  isWarpSafe?: Maybe<Scalars["Boolean"]>;
  modifiers: Array<EffectModifier>;
  name?: Maybe<Scalars["String"]>;
  postExpression?: Maybe<Scalars["Int"]>;
  preExpression?: Maybe<Scalars["Int"]>;
  published?: Maybe<Scalars["Boolean"]>;
  rangeAttribute?: Maybe<Attribute>;
  rangeChance?: Maybe<Scalars["Boolean"]>;
  trackingSpeedAttribute?: Maybe<Attribute>;
};

export type EffectModifier = {
  __typename: "EffectModifier";
  domain?: Maybe<Scalars["String"]>;
  effect?: Maybe<Effect>;
  func: Scalars["String"];
  modifiedAttribute?: Maybe<Attribute>;
  modifyingAttribute?: Maybe<Attribute>;
  operator?: Maybe<Scalars["Int"]>;
};

export type Endpoint = {
  __typename: "Endpoint";
  endpoint: Scalars["ID"];
  method: Scalars["String"];
  route: Scalars["String"];
  status: EndpointStatus;
  tags: Array<Maybe<Scalars["String"]>>;
};

export type EndpointStatus = "green" | "red" | "yellow";

export type Faction = {
  __typename: "Faction";
  corporation?: Maybe<Corporation>;
  description: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  isUnique: Scalars["Boolean"];
  militiaCorporation?: Maybe<Corporation>;
  name: Scalars["String"];
  sizeFactor: Scalars["Float"];
  solarSystem?: Maybe<SolarSystem>;
  stationCount: Scalars["Int"];
  stationSystemCount: Scalars["Int"];
};

export type Graphic = {
  __typename: "Graphic";
  collisionFile?: Maybe<Scalars["String"]>;
  graphicFile?: Maybe<Scalars["String"]>;
  iconFolder?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  sofDna?: Maybe<Scalars["String"]>;
  sofFactionName?: Maybe<Scalars["String"]>;
  sofHullName?: Maybe<Scalars["String"]>;
  sofRaceName?: Maybe<Scalars["String"]>;
};

export type Group = {
  __typename: "Group";
  category: Category;
  id: Scalars["ID"];
  name: Scalars["String"];
  published: Scalars["Boolean"];
  types: Array<Type>;
};

export type Icon = {
  __typename: "Icon";
  description?: Maybe<Scalars["String"]>;
  file: Scalars["String"];
  id: Scalars["ID"];
};

export type ImageVariation = {
  __typename: "ImageVariation";
  name: Scalars["ID"];
  url: Scalars["String"];
};

export type Incursion = {
  __typename: "Incursion";
  constellation: Constellation;
  faction: Faction;
  hasBoss: Scalars["Boolean"];
  infestedSolarSystems: Array<SolarSystem>;
  influence: Scalars["Float"];
  stagingSolarSystem: SolarSystem;
  state: IncursionState;
  type: Scalars["String"];
};

export type IncursionState = "ESTABLISHED" | "MOBILIZING" | "WITHDRAWING";

export type ItemExchangeContract = Contract & {
  __typename: "ItemExchangeContract";
  buyout?: Maybe<Scalars["Float"]>;
  collateral?: Maybe<Scalars["Float"]>;
  dateExpired: Scalars["String"];
  dateIssued: Scalars["String"];
  daysToComplete?: Maybe<Scalars["Int"]>;
  endLocation?: Maybe<Station>;
  forCorporation: Scalars["Boolean"];
  id: Scalars["ID"];
  issuer?: Maybe<Character>;
  issuerCorporation?: Maybe<Corporation>;
  price?: Maybe<Scalars["Float"]>;
  reward?: Maybe<Scalars["Float"]>;
  startLocation?: Maybe<Station>;
  title?: Maybe<Scalars["String"]>;
  type: ContractType;
  volume?: Maybe<Scalars["Float"]>;
};

export type MarketGroup = {
  __typename: "MarketGroup";
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  parentGroup?: Maybe<MarketGroup>;
  types: Array<Type>;
};

export type Moon = {
  __typename: "Moon";
  id: Scalars["ID"];
  name: Scalars["String"];
  position: Position;
  solarSystem: SolarSystem;
};

export type Mutation = {
  __typename: "Mutation";
  nop: Scalars["String"];
};

export type OpportunityGroup = {
  __typename: "OpportunityGroup";
  connectedGroups: Array<OpportunityGroup>;
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  notification: Scalars["String"];
  requiredTasks: Array<OpportunityTask>;
};

export type OpportunityTask = {
  __typename: "OpportunityTask";
  description: Scalars["String"];
  id: Scalars["ID"];
  name: Scalars["String"];
  notification: Scalars["String"];
};

export type Planet = {
  __typename: "Planet";
  asteroidBelts: Array<AsteroidBelt>;
  id: Scalars["ID"];
  moons: Array<Moon>;
  name: Scalars["String"];
  position: Position;
  solarSystem: SolarSystem;
  type: Type;
};

export type Player = Character & {
  __typename: "Player";
  alliance?: Maybe<Alliance>;
  birthday: Scalars["String"];
  bloodline: Bloodline;
  corporation: Corporation;
  corporationHistory: Array<CorporationMembership>;
  description?: Maybe<Scalars["String"]>;
  faction?: Maybe<Faction>;
  gender: Scalars["String"];
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  name: Scalars["String"];
  race: Race;
  securityStatus?: Maybe<Scalars["Float"]>;
  title?: Maybe<Scalars["String"]>;
};

export type PlayerLocation = {
  __typename: "PlayerLocation";
  solarSystem: SolarSystem;
  station?: Maybe<Station>;
  structure?: Maybe<Structure>;
};

export type PlayerOnlineStatus = {
  __typename: "PlayerOnlineStatus";
  isOnline: Scalars["Boolean"];
  lastLogin?: Maybe<Scalars["String"]>;
  lastLogout?: Maybe<Scalars["String"]>;
  numLogins?: Maybe<Scalars["Int"]>;
};

export type PlayerShip = {
  __typename: "PlayerShip";
  itemId: Scalars["ID"];
  name: Scalars["String"];
  type: Type;
};

export type Position = {
  __typename: "Position";
  x: Scalars["Float"];
  y: Scalars["Float"];
  z: Scalars["Float"];
};

export type Query = {
  __typename: "Query";
  agent: Agent;
  agents: Array<Agent>;
  alliance: Alliance;
  alliances: Array<Alliance>;
  ancestries: Array<Ancestry>;
  ancestry: Ancestry;
  asteroidBelt: AsteroidBelt;
  attribute: Attribute;
  attributes: Array<Attribute>;
  bloodline: Bloodline;
  bloodlines: Array<Bloodline>;
  categories: Array<Category>;
  category: Category;
  character: Character;
  constellation: Constellation;
  constellations: Array<Constellation>;
  corporation: Corporation;
  effect: Effect;
  effects: Array<Effect>;
  faction: Faction;
  factions: Array<Faction>;
  graphic: Graphic;
  graphics: Array<Graphic>;
  group: Group;
  groups: Array<Group>;
  icon: Icon;
  icons: Array<Icon>;
  incursions: Array<Incursion>;
  marketGroup: MarketGroup;
  marketGroups: Array<MarketGroup>;
  me: AuthenticatedPlayer;
  moon: Moon;
  npcCorporations: Array<Corporation>;
  opportunityGroup: OpportunityGroup;
  opportunityGroups: Array<OpportunityGroup>;
  opportunityTask: OpportunityTask;
  opportunityTasks: Array<OpportunityTask>;
  ping: Scalars["String"];
  planet: Planet;
  race: Race;
  races: Array<Race>;
  region: Region;
  regions: Array<Region>;
  serverStatus: ServerStatus;
  solarSystem: SolarSystem;
  solarSystems: Array<SolarSystem>;
  star: Star;
  stargate: Stargate;
  station: Station;
  status: Array<Endpoint>;
  type: Type;
  types: Array<Type>;
  unit: Unit;
  units: Array<Unit>;
};

export type QueryAgentArgs = {
  id: Scalars["ID"];
};

export type QueryAllianceArgs = {
  id: Scalars["ID"];
};

export type QueryAncestryArgs = {
  id: Scalars["ID"];
};

export type QueryAsteroidBeltArgs = {
  id: Scalars["ID"];
};

export type QueryAttributeArgs = {
  id: Scalars["ID"];
};

export type QueryBloodlineArgs = {
  id: Scalars["ID"];
};

export type QueryCategoryArgs = {
  id: Scalars["ID"];
};

export type QueryCharacterArgs = {
  id: Scalars["ID"];
};

export type QueryConstellationArgs = {
  id: Scalars["ID"];
};

export type QueryCorporationArgs = {
  id: Scalars["ID"];
};

export type QueryEffectArgs = {
  id: Scalars["ID"];
};

export type QueryFactionArgs = {
  id: Scalars["ID"];
};

export type QueryGraphicArgs = {
  id: Scalars["ID"];
};

export type QueryGroupArgs = {
  id: Scalars["ID"];
};

export type QueryIconArgs = {
  id: Scalars["ID"];
};

export type QueryMarketGroupArgs = {
  id: Scalars["ID"];
};

export type QueryMoonArgs = {
  id: Scalars["ID"];
};

export type QueryOpportunityGroupArgs = {
  id: Scalars["ID"];
};

export type QueryOpportunityTaskArgs = {
  id: Scalars["ID"];
};

export type QueryPlanetArgs = {
  id: Scalars["ID"];
};

export type QueryRaceArgs = {
  id: Scalars["ID"];
};

export type QueryRegionArgs = {
  id: Scalars["ID"];
};

export type QueryServerStatusArgs = {
  id?: InputMaybe<Scalars["ID"]>;
};

export type QuerySolarSystemArgs = {
  id: Scalars["ID"];
};

export type QueryStarArgs = {
  id: Scalars["ID"];
};

export type QueryStargateArgs = {
  id: Scalars["ID"];
};

export type QueryStationArgs = {
  id: Scalars["ID"];
};

export type QueryTypeArgs = {
  id: Scalars["ID"];
};

export type QueryUnitArgs = {
  id: Scalars["ID"];
};

export type Race = {
  __typename: "Race";
  description: Scalars["String"];
  faction: Faction;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type Region = {
  __typename: "Region";
  constellations: Array<Constellation>;
  description?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type RegularAgent = Agent &
  Character & {
    __typename: "RegularAgent";
    agentType: AgentType;
    alliance?: Maybe<Alliance>;
    birthday: Scalars["String"];
    bloodline: Bloodline;
    corporation: Corporation;
    corporationHistory: Array<CorporationMembership>;
    description?: Maybe<Scalars["String"]>;
    division: AgentDivision;
    faction?: Maybe<Faction>;
    gender: Scalars["String"];
    id: Scalars["ID"];
    images: Array<ImageVariation>;
    isLocator: Scalars["Boolean"];
    level: Scalars["Int"];
    location: Station;
    name: Scalars["String"];
    race: Race;
    securityStatus?: Maybe<Scalars["Float"]>;
    title?: Maybe<Scalars["String"]>;
  };

export type ResearchAgent = Agent &
  Character & {
    __typename: "ResearchAgent";
    agentType: AgentType;
    alliance?: Maybe<Alliance>;
    birthday: Scalars["String"];
    bloodline: Bloodline;
    corporation: Corporation;
    corporationHistory: Array<CorporationMembership>;
    description?: Maybe<Scalars["String"]>;
    division: AgentDivision;
    faction?: Maybe<Faction>;
    gender: Scalars["String"];
    id: Scalars["ID"];
    images: Array<ImageVariation>;
    isLocator: Scalars["Boolean"];
    level: Scalars["Int"];
    location: Station;
    name: Scalars["String"];
    race: Race;
    researchSkills: Array<Type>;
    securityStatus?: Maybe<Scalars["Float"]>;
    title?: Maybe<Scalars["String"]>;
  };

export type ServerStatus = {
  __typename: "ServerStatus";
  id: Scalars["ID"];
  lastUpdated: Scalars["String"];
  numPlayers: Scalars["Int"];
  startTime: Scalars["String"];
  version: Scalars["String"];
  vipMode: Scalars["Boolean"];
};

export type SolarSystem = {
  __typename: "SolarSystem";
  constellation: Constellation;
  id: Scalars["ID"];
  name: Scalars["String"];
  npcKills: Scalars["Int"];
  planets: Array<Planet>;
  podKills: Scalars["Int"];
  position: Position;
  securityClass?: Maybe<Scalars["String"]>;
  securityStatus: Scalars["Float"];
  shipJumps: Scalars["Int"];
  shipKills: Scalars["Int"];
  star?: Maybe<Star>;
  stargates: Array<Stargate>;
  stations: Array<Station>;
};

export type SpawnPoint = {
  __typename: "SpawnPoint";
  id: Scalars["ID"];
};

export type Star = {
  __typename: "Star";
  age: Scalars["String"];
  id: Scalars["ID"];
  luminosity: Scalars["Float"];
  name: Scalars["String"];
  radius: Scalars["Int"];
  solarSystem: SolarSystem;
  spectralClass: Scalars["String"];
  temperature: Scalars["Int"];
  type: Type;
};

export type Stargate = {
  __typename: "Stargate";
  destination: Stargate;
  id: Scalars["ID"];
  name: Scalars["String"];
  position: Position;
  solarSystem: SolarSystem;
  type: Type;
};

export type Station = {
  __typename: "Station";
  id: Scalars["ID"];
  maxDockableShipVolume: Scalars["Float"];
  name: Scalars["String"];
  officeRentalCost: Scalars["Float"];
  owner: Corporation;
  position: Position;
  race: Race;
  reprocessingEfficiency: Scalars["Float"];
  reprocessingStationsTake: Scalars["Float"];
  services: Array<Scalars["String"]>;
  solarSystem?: Maybe<SolarSystem>;
  type: Type;
};

export type Structure = {
  __typename: "Structure";
  id: Scalars["ID"];
  name: Scalars["String"];
  owner: Corporation;
  position: Position;
  solarSystem: SolarSystem;
  type?: Maybe<Type>;
};

export type Subscription = {
  __typename: "Subscription";
  hello: Scalars["String"];
  postCreated: Scalars["String"];
  serverStatus: ServerStatus;
};

export type Type = {
  __typename: "Type";
  attributes: Array<AppliedAttribute>;
  capacity?: Maybe<Scalars["Float"]>;
  description: Scalars["String"];
  effects: Array<AppliedEffect>;
  graphic?: Maybe<Graphic>;
  group: Group;
  icon?: Maybe<Icon>;
  id: Scalars["ID"];
  images: Array<ImageVariation>;
  marketGroup?: Maybe<MarketGroup>;
  mass?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  packagedVolume?: Maybe<Scalars["Float"]>;
  portionSize?: Maybe<Scalars["Int"]>;
  published: Scalars["Boolean"];
  radius?: Maybe<Scalars["Float"]>;
  volume?: Maybe<Scalars["Float"]>;
};

export type Unit = {
  __typename: "Unit";
  description?: Maybe<Scalars["String"]>;
  displayName?: Maybe<Scalars["String"]>;
  id: Scalars["ID"];
  name: Scalars["String"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Agent:
    | ResolversTypes["AgentInSpace"]
    | ResolversTypes["RegularAgent"]
    | ResolversTypes["ResearchAgent"];
  String: ResolverTypeWrapper<Scalars["String"]>;
  ID: ResolverTypeWrapper<Scalars["ID"]>;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  AgentDivision: ResolverTypeWrapper<AgentDivision>;
  AgentInSpace: ResolverTypeWrapper<AgentInSpace>;
  AgentType: ResolverTypeWrapper<AgentType>;
  Alliance: ResolverTypeWrapper<Alliance>;
  AllianceMembership: ResolverTypeWrapper<AllianceMembership>;
  Ancestry: ResolverTypeWrapper<Ancestry>;
  AppliedAttribute: ResolverTypeWrapper<AppliedAttribute>;
  AppliedEffect: ResolverTypeWrapper<AppliedEffect>;
  AsteroidBelt: ResolverTypeWrapper<AsteroidBelt>;
  Attribute: ResolverTypeWrapper<Attribute>;
  AuthenticatedPlayer: ResolverTypeWrapper<AuthenticatedPlayer>;
  Bloodline: ResolverTypeWrapper<Bloodline>;
  CacheControlScope: CacheControlScope;
  Category: ResolverTypeWrapper<Category>;
  Character:
    | ResolversTypes["AgentInSpace"]
    | ResolversTypes["AuthenticatedPlayer"]
    | ResolversTypes["Player"]
    | ResolversTypes["RegularAgent"]
    | ResolversTypes["ResearchAgent"];
  Constellation: ResolverTypeWrapper<Constellation>;
  Contract: ResolversTypes["ItemExchangeContract"];
  ContractType: ContractType;
  Corporation: ResolverTypeWrapper<Corporation>;
  CorporationMembership: ResolverTypeWrapper<CorporationMembership>;
  Dungeon: ResolverTypeWrapper<Dungeon>;
  Effect: ResolverTypeWrapper<Effect>;
  EffectModifier: ResolverTypeWrapper<EffectModifier>;
  Endpoint: ResolverTypeWrapper<Endpoint>;
  EndpointStatus: EndpointStatus;
  Faction: ResolverTypeWrapper<Faction>;
  Graphic: ResolverTypeWrapper<Graphic>;
  Group: ResolverTypeWrapper<Group>;
  Icon: ResolverTypeWrapper<Icon>;
  ImageVariation: ResolverTypeWrapper<ImageVariation>;
  Incursion: ResolverTypeWrapper<Incursion>;
  IncursionState: IncursionState;
  ItemExchangeContract: ResolverTypeWrapper<ItemExchangeContract>;
  MarketGroup: ResolverTypeWrapper<MarketGroup>;
  Moon: ResolverTypeWrapper<Moon>;
  Mutation: ResolverTypeWrapper<{}>;
  OpportunityGroup: ResolverTypeWrapper<OpportunityGroup>;
  OpportunityTask: ResolverTypeWrapper<OpportunityTask>;
  Planet: ResolverTypeWrapper<Planet>;
  Player: ResolverTypeWrapper<Player>;
  PlayerLocation: ResolverTypeWrapper<PlayerLocation>;
  PlayerOnlineStatus: ResolverTypeWrapper<PlayerOnlineStatus>;
  PlayerShip: ResolverTypeWrapper<PlayerShip>;
  Position: ResolverTypeWrapper<Position>;
  Query: ResolverTypeWrapper<{}>;
  Race: ResolverTypeWrapper<Race>;
  Region: ResolverTypeWrapper<Region>;
  RegularAgent: ResolverTypeWrapper<RegularAgent>;
  ResearchAgent: ResolverTypeWrapper<ResearchAgent>;
  ServerStatus: ResolverTypeWrapper<ServerStatus>;
  SolarSystem: ResolverTypeWrapper<SolarSystem>;
  SpawnPoint: ResolverTypeWrapper<SpawnPoint>;
  Star: ResolverTypeWrapper<Star>;
  Stargate: ResolverTypeWrapper<Stargate>;
  Station: ResolverTypeWrapper<Station>;
  Structure: ResolverTypeWrapper<Structure>;
  Subscription: ResolverTypeWrapper<{}>;
  Type: ResolverTypeWrapper<Type>;
  Unit: ResolverTypeWrapper<Unit>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Agent:
    | ResolversParentTypes["AgentInSpace"]
    | ResolversParentTypes["RegularAgent"]
    | ResolversParentTypes["ResearchAgent"];
  String: Scalars["String"];
  ID: Scalars["ID"];
  Boolean: Scalars["Boolean"];
  Int: Scalars["Int"];
  Float: Scalars["Float"];
  AgentDivision: AgentDivision;
  AgentInSpace: AgentInSpace;
  AgentType: AgentType;
  Alliance: Alliance;
  AllianceMembership: AllianceMembership;
  Ancestry: Ancestry;
  AppliedAttribute: AppliedAttribute;
  AppliedEffect: AppliedEffect;
  AsteroidBelt: AsteroidBelt;
  Attribute: Attribute;
  AuthenticatedPlayer: AuthenticatedPlayer;
  Bloodline: Bloodline;
  Category: Category;
  Character:
    | ResolversParentTypes["AgentInSpace"]
    | ResolversParentTypes["AuthenticatedPlayer"]
    | ResolversParentTypes["Player"]
    | ResolversParentTypes["RegularAgent"]
    | ResolversParentTypes["ResearchAgent"];
  Constellation: Constellation;
  Contract: ResolversParentTypes["ItemExchangeContract"];
  Corporation: Corporation;
  CorporationMembership: CorporationMembership;
  Dungeon: Dungeon;
  Effect: Effect;
  EffectModifier: EffectModifier;
  Endpoint: Endpoint;
  Faction: Faction;
  Graphic: Graphic;
  Group: Group;
  Icon: Icon;
  ImageVariation: ImageVariation;
  Incursion: Incursion;
  ItemExchangeContract: ItemExchangeContract;
  MarketGroup: MarketGroup;
  Moon: Moon;
  Mutation: {};
  OpportunityGroup: OpportunityGroup;
  OpportunityTask: OpportunityTask;
  Planet: Planet;
  Player: Player;
  PlayerLocation: PlayerLocation;
  PlayerOnlineStatus: PlayerOnlineStatus;
  PlayerShip: PlayerShip;
  Position: Position;
  Query: {};
  Race: Race;
  Region: Region;
  RegularAgent: RegularAgent;
  ResearchAgent: ResearchAgent;
  ServerStatus: ServerStatus;
  SolarSystem: SolarSystem;
  SpawnPoint: SpawnPoint;
  Star: Star;
  Stargate: Stargate;
  Station: Station;
  Structure: Structure;
  Subscription: {};
  Type: Type;
  Unit: Unit;
};

export type CacheControlDirectiveArgs = {
  inheritMaxAge?: Maybe<Scalars["Boolean"]>;
  maxAge?: Maybe<Scalars["Int"]>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<
  Result,
  Parent,
  ContextType = ContextValue,
  Args = CacheControlDirectiveArgs
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type AgentResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Agent"] = ResolversParentTypes["Agent"]
> = {
  __resolveType: TypeResolveFn<
    "AgentInSpace" | "RegularAgent" | "ResearchAgent",
    ParentType,
    ContextType
  >;
  agentType?: Resolver<ResolversTypes["AgentType"], ParentType, ContextType>;
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  division?: Resolver<ResolversTypes["AgentDivision"], ParentType, ContextType>;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  isLocator?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["Station"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type AgentDivisionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AgentDivision"] = ResolversParentTypes["AgentDivision"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentInSpaceResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AgentInSpace"] = ResolversParentTypes["AgentInSpace"]
> = {
  agentType?: Resolver<ResolversTypes["AgentType"], ParentType, ContextType>;
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  division?: Resolver<ResolversTypes["AgentDivision"], ParentType, ContextType>;
  dungeon?: Resolver<ResolversTypes["Dungeon"], ParentType, ContextType>;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  isLocator?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["Station"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  spawnPoint?: Resolver<ResolversTypes["SpawnPoint"], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AgentTypeResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AgentType"] = ResolversParentTypes["AgentType"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllianceResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Alliance"] = ResolversParentTypes["Alliance"]
> = {
  corporations?: Resolver<
    Array<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  creator?: Resolver<ResolversTypes["Character"], ParentType, ContextType>;
  creatorCorporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  dateFounded?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  executorCorporation?: Resolver<
    Maybe<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AllianceMembershipResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AllianceMembership"] = ResolversParentTypes["AllianceMembership"]
> = {
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  isDeleted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recordId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AncestryResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Ancestry"] = ResolversParentTypes["Ancestry"]
> = {
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes["Icon"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shortDescription?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedAttributeResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AppliedAttribute"] = ResolversParentTypes["AppliedAttribute"]
> = {
  attribute?: Resolver<ResolversTypes["Attribute"], ParentType, ContextType>;
  value?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AppliedEffectResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AppliedEffect"] = ResolversParentTypes["AppliedEffect"]
> = {
  effect?: Resolver<ResolversTypes["Effect"], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AsteroidBeltResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AsteroidBelt"] = ResolversParentTypes["AsteroidBelt"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AttributeResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Attribute"] = ResolversParentTypes["Attribute"]
> = {
  defaultValue?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  highIsGood?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  icon?: Resolver<Maybe<ResolversTypes["Icon"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  published?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  stackable?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  unit?: Resolver<Maybe<ResolversTypes["Unit"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticatedPlayerResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["AuthenticatedPlayer"] = ResolversParentTypes["AuthenticatedPlayer"]
> = {
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  location?: Resolver<
    ResolversTypes["PlayerLocation"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BloodlineResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Bloodline"] = ResolversParentTypes["Bloodline"]
> = {
  charisma?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  intelligence?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  memory?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  perception?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  shipType?: Resolver<Maybe<ResolversTypes["Type"]>, ParentType, ContextType>;
  willpower?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CategoryResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Category"] = ResolversParentTypes["Category"]
> = {
  groups?: Resolver<Array<ResolversTypes["Group"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CharacterResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Character"] = ResolversParentTypes["Character"]
> = {
  __resolveType: TypeResolveFn<
    | "AgentInSpace"
    | "AuthenticatedPlayer"
    | "Player"
    | "RegularAgent"
    | "ResearchAgent",
    ParentType,
    ContextType
  >;
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
};

export type ConstellationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Constellation"] = ResolversParentTypes["Constellation"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  region?: Resolver<ResolversTypes["Region"], ParentType, ContextType>;
  solarSystems?: Resolver<
    Array<ResolversTypes["SolarSystem"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ContractResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Contract"] = ResolversParentTypes["Contract"]
> = {
  __resolveType: TypeResolveFn<"ItemExchangeContract", ParentType, ContextType>;
  dateExpired?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dateIssued?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  daysToComplete?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  forCorporation?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  issuer?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  issuerCorporation?: Resolver<
    Maybe<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ContractType"], ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
};

export type CorporationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Corporation"] = ResolversParentTypes["Corporation"]
> = {
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  allianceHistory?: Resolver<
    Array<ResolversTypes["AllianceMembership"]>,
    ParentType,
    ContextType
  >;
  ceo?: Resolver<Maybe<ResolversTypes["Character"]>, ParentType, ContextType>;
  creator?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  dateFounded?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  homeStation?: Resolver<
    Maybe<ResolversTypes["Station"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  memberCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shares?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  taxRate?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  ticker?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  warEligible?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CorporationMembershipResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["CorporationMembership"] = ResolversParentTypes["CorporationMembership"]
> = {
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  isDeleted?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  recordId?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DungeonResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Dungeon"] = ResolversParentTypes["Dungeon"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EffectResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Effect"] = ResolversParentTypes["Effect"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  disallowAutoRepeat?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  dischargeAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  durationAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  effectCategory?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  electronicChance?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  falloffAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  icon?: Resolver<Maybe<ResolversTypes["Icon"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isAssistance?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isOffensive?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  isWarpSafe?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  modifiers?: Resolver<
    Array<ResolversTypes["EffectModifier"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  postExpression?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  preExpression?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  published?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  rangeAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  rangeChance?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  trackingSpeedAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EffectModifierResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["EffectModifier"] = ResolversParentTypes["EffectModifier"]
> = {
  domain?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  effect?: Resolver<Maybe<ResolversTypes["Effect"]>, ParentType, ContextType>;
  func?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  modifiedAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  modifyingAttribute?: Resolver<
    Maybe<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  operator?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type EndpointResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Endpoint"] = ResolversParentTypes["Endpoint"]
> = {
  endpoint?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  method?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  route?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  status?: Resolver<ResolversTypes["EndpointStatus"], ParentType, ContextType>;
  tags?: Resolver<
    Array<Maybe<ResolversTypes["String"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FactionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Faction"] = ResolversParentTypes["Faction"]
> = {
  corporation?: Resolver<
    Maybe<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  isUnique?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  militiaCorporation?: Resolver<
    Maybe<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sizeFactor?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  solarSystem?: Resolver<
    Maybe<ResolversTypes["SolarSystem"]>,
    ParentType,
    ContextType
  >;
  stationCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  stationSystemCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GraphicResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Graphic"] = ResolversParentTypes["Graphic"]
> = {
  collisionFile?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  graphicFile?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  iconFolder?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  sofDna?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sofFactionName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sofHullName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  sofRaceName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GroupResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Group"] = ResolversParentTypes["Group"]
> = {
  category?: Resolver<ResolversTypes["Category"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  types?: Resolver<Array<ResolversTypes["Type"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IconResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Icon"] = ResolversParentTypes["Icon"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  file?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageVariationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["ImageVariation"] = ResolversParentTypes["ImageVariation"]
> = {
  name?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IncursionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Incursion"] = ResolversParentTypes["Incursion"]
> = {
  constellation?: Resolver<
    ResolversTypes["Constellation"],
    ParentType,
    ContextType
  >;
  faction?: Resolver<ResolversTypes["Faction"], ParentType, ContextType>;
  hasBoss?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  infestedSolarSystems?: Resolver<
    Array<ResolversTypes["SolarSystem"]>,
    ParentType,
    ContextType
  >;
  influence?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  stagingSolarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  state?: Resolver<ResolversTypes["IncursionState"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemExchangeContractResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["ItemExchangeContract"] = ResolversParentTypes["ItemExchangeContract"]
> = {
  buyout?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  collateral?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  dateExpired?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  dateIssued?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  daysToComplete?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  endLocation?: Resolver<
    Maybe<ResolversTypes["Station"]>,
    ParentType,
    ContextType
  >;
  forCorporation?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  issuer?: Resolver<
    Maybe<ResolversTypes["Character"]>,
    ParentType,
    ContextType
  >;
  issuerCorporation?: Resolver<
    Maybe<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  price?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  reward?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  startLocation?: Resolver<
    Maybe<ResolversTypes["Station"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes["ContractType"], ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MarketGroupResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["MarketGroup"] = ResolversParentTypes["MarketGroup"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  parentGroup?: Resolver<
    Maybe<ResolversTypes["MarketGroup"]>,
    ParentType,
    ContextType
  >;
  types?: Resolver<Array<ResolversTypes["Type"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MoonResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Moon"] = ResolversParentTypes["Moon"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]
> = {
  nop?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
};

export type OpportunityGroupResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["OpportunityGroup"] = ResolversParentTypes["OpportunityGroup"]
> = {
  connectedGroups?: Resolver<
    Array<ResolversTypes["OpportunityGroup"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  notification?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  requiredTasks?: Resolver<
    Array<ResolversTypes["OpportunityTask"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OpportunityTaskResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["OpportunityTask"] = ResolversParentTypes["OpportunityTask"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  notification?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlanetResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Planet"] = ResolversParentTypes["Planet"]
> = {
  asteroidBelts?: Resolver<
    Array<ResolversTypes["AsteroidBelt"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  moons?: Resolver<Array<ResolversTypes["Moon"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Player"] = ResolversParentTypes["Player"]
> = {
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerLocationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["PlayerLocation"] = ResolversParentTypes["PlayerLocation"]
> = {
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  station?: Resolver<Maybe<ResolversTypes["Station"]>, ParentType, ContextType>;
  structure?: Resolver<
    Maybe<ResolversTypes["Structure"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerOnlineStatusResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["PlayerOnlineStatus"] = ResolversParentTypes["PlayerOnlineStatus"]
> = {
  isOnline?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  lastLogin?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lastLogout?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  numLogins?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlayerShipResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["PlayerShip"] = ResolversParentTypes["PlayerShip"]
> = {
  itemId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Position"] = ResolversParentTypes["Position"]
> = {
  x?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  y?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  z?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  agent?: Resolver<
    ResolversTypes["Agent"],
    ParentType,
    ContextType,
    RequireFields<QueryAgentArgs, "id">
  >;
  agents?: Resolver<Array<ResolversTypes["Agent"]>, ParentType, ContextType>;
  alliance?: Resolver<
    ResolversTypes["Alliance"],
    ParentType,
    ContextType,
    RequireFields<QueryAllianceArgs, "id">
  >;
  alliances?: Resolver<
    Array<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  ancestries?: Resolver<
    Array<ResolversTypes["Ancestry"]>,
    ParentType,
    ContextType
  >;
  ancestry?: Resolver<
    ResolversTypes["Ancestry"],
    ParentType,
    ContextType,
    RequireFields<QueryAncestryArgs, "id">
  >;
  asteroidBelt?: Resolver<
    ResolversTypes["AsteroidBelt"],
    ParentType,
    ContextType,
    RequireFields<QueryAsteroidBeltArgs, "id">
  >;
  attribute?: Resolver<
    ResolversTypes["Attribute"],
    ParentType,
    ContextType,
    RequireFields<QueryAttributeArgs, "id">
  >;
  attributes?: Resolver<
    Array<ResolversTypes["Attribute"]>,
    ParentType,
    ContextType
  >;
  bloodline?: Resolver<
    ResolversTypes["Bloodline"],
    ParentType,
    ContextType,
    RequireFields<QueryBloodlineArgs, "id">
  >;
  bloodlines?: Resolver<
    Array<ResolversTypes["Bloodline"]>,
    ParentType,
    ContextType
  >;
  categories?: Resolver<
    Array<ResolversTypes["Category"]>,
    ParentType,
    ContextType
  >;
  category?: Resolver<
    ResolversTypes["Category"],
    ParentType,
    ContextType,
    RequireFields<QueryCategoryArgs, "id">
  >;
  character?: Resolver<
    ResolversTypes["Character"],
    ParentType,
    ContextType,
    RequireFields<QueryCharacterArgs, "id">
  >;
  constellation?: Resolver<
    ResolversTypes["Constellation"],
    ParentType,
    ContextType,
    RequireFields<QueryConstellationArgs, "id">
  >;
  constellations?: Resolver<
    Array<ResolversTypes["Constellation"]>,
    ParentType,
    ContextType
  >;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType,
    RequireFields<QueryCorporationArgs, "id">
  >;
  effect?: Resolver<
    ResolversTypes["Effect"],
    ParentType,
    ContextType,
    RequireFields<QueryEffectArgs, "id">
  >;
  effects?: Resolver<Array<ResolversTypes["Effect"]>, ParentType, ContextType>;
  faction?: Resolver<
    ResolversTypes["Faction"],
    ParentType,
    ContextType,
    RequireFields<QueryFactionArgs, "id">
  >;
  factions?: Resolver<
    Array<ResolversTypes["Faction"]>,
    ParentType,
    ContextType
  >;
  graphic?: Resolver<
    ResolversTypes["Graphic"],
    ParentType,
    ContextType,
    RequireFields<QueryGraphicArgs, "id">
  >;
  graphics?: Resolver<
    Array<ResolversTypes["Graphic"]>,
    ParentType,
    ContextType
  >;
  group?: Resolver<
    ResolversTypes["Group"],
    ParentType,
    ContextType,
    RequireFields<QueryGroupArgs, "id">
  >;
  groups?: Resolver<Array<ResolversTypes["Group"]>, ParentType, ContextType>;
  icon?: Resolver<
    ResolversTypes["Icon"],
    ParentType,
    ContextType,
    RequireFields<QueryIconArgs, "id">
  >;
  icons?: Resolver<Array<ResolversTypes["Icon"]>, ParentType, ContextType>;
  incursions?: Resolver<
    Array<ResolversTypes["Incursion"]>,
    ParentType,
    ContextType
  >;
  marketGroup?: Resolver<
    ResolversTypes["MarketGroup"],
    ParentType,
    ContextType,
    RequireFields<QueryMarketGroupArgs, "id">
  >;
  marketGroups?: Resolver<
    Array<ResolversTypes["MarketGroup"]>,
    ParentType,
    ContextType
  >;
  me?: Resolver<ResolversTypes["AuthenticatedPlayer"], ParentType, ContextType>;
  moon?: Resolver<
    ResolversTypes["Moon"],
    ParentType,
    ContextType,
    RequireFields<QueryMoonArgs, "id">
  >;
  npcCorporations?: Resolver<
    Array<ResolversTypes["Corporation"]>,
    ParentType,
    ContextType
  >;
  opportunityGroup?: Resolver<
    ResolversTypes["OpportunityGroup"],
    ParentType,
    ContextType,
    RequireFields<QueryOpportunityGroupArgs, "id">
  >;
  opportunityGroups?: Resolver<
    Array<ResolversTypes["OpportunityGroup"]>,
    ParentType,
    ContextType
  >;
  opportunityTask?: Resolver<
    ResolversTypes["OpportunityTask"],
    ParentType,
    ContextType,
    RequireFields<QueryOpportunityTaskArgs, "id">
  >;
  opportunityTasks?: Resolver<
    Array<ResolversTypes["OpportunityTask"]>,
    ParentType,
    ContextType
  >;
  ping?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  planet?: Resolver<
    ResolversTypes["Planet"],
    ParentType,
    ContextType,
    RequireFields<QueryPlanetArgs, "id">
  >;
  race?: Resolver<
    ResolversTypes["Race"],
    ParentType,
    ContextType,
    RequireFields<QueryRaceArgs, "id">
  >;
  races?: Resolver<Array<ResolversTypes["Race"]>, ParentType, ContextType>;
  region?: Resolver<
    ResolversTypes["Region"],
    ParentType,
    ContextType,
    RequireFields<QueryRegionArgs, "id">
  >;
  regions?: Resolver<Array<ResolversTypes["Region"]>, ParentType, ContextType>;
  serverStatus?: Resolver<
    ResolversTypes["ServerStatus"],
    ParentType,
    ContextType,
    Partial<QueryServerStatusArgs>
  >;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType,
    RequireFields<QuerySolarSystemArgs, "id">
  >;
  solarSystems?: Resolver<
    Array<ResolversTypes["SolarSystem"]>,
    ParentType,
    ContextType
  >;
  star?: Resolver<
    ResolversTypes["Star"],
    ParentType,
    ContextType,
    RequireFields<QueryStarArgs, "id">
  >;
  stargate?: Resolver<
    ResolversTypes["Stargate"],
    ParentType,
    ContextType,
    RequireFields<QueryStargateArgs, "id">
  >;
  station?: Resolver<
    ResolversTypes["Station"],
    ParentType,
    ContextType,
    RequireFields<QueryStationArgs, "id">
  >;
  status?: Resolver<Array<ResolversTypes["Endpoint"]>, ParentType, ContextType>;
  type?: Resolver<
    ResolversTypes["Type"],
    ParentType,
    ContextType,
    RequireFields<QueryTypeArgs, "id">
  >;
  types?: Resolver<Array<ResolversTypes["Type"]>, ParentType, ContextType>;
  unit?: Resolver<
    ResolversTypes["Unit"],
    ParentType,
    ContextType,
    RequireFields<QueryUnitArgs, "id">
  >;
  units?: Resolver<Array<ResolversTypes["Unit"]>, ParentType, ContextType>;
};

export type RaceResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Race"] = ResolversParentTypes["Race"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  faction?: Resolver<ResolversTypes["Faction"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Region"] = ResolversParentTypes["Region"]
> = {
  constellations?: Resolver<
    Array<ResolversTypes["Constellation"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RegularAgentResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["RegularAgent"] = ResolversParentTypes["RegularAgent"]
> = {
  agentType?: Resolver<ResolversTypes["AgentType"], ParentType, ContextType>;
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  division?: Resolver<ResolversTypes["AgentDivision"], ParentType, ContextType>;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  isLocator?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["Station"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResearchAgentResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["ResearchAgent"] = ResolversParentTypes["ResearchAgent"]
> = {
  agentType?: Resolver<ResolversTypes["AgentType"], ParentType, ContextType>;
  alliance?: Resolver<
    Maybe<ResolversTypes["Alliance"]>,
    ParentType,
    ContextType
  >;
  birthday?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bloodline?: Resolver<ResolversTypes["Bloodline"], ParentType, ContextType>;
  corporation?: Resolver<
    ResolversTypes["Corporation"],
    ParentType,
    ContextType
  >;
  corporationHistory?: Resolver<
    Array<ResolversTypes["CorporationMembership"]>,
    ParentType,
    ContextType
  >;
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  division?: Resolver<ResolversTypes["AgentDivision"], ParentType, ContextType>;
  faction?: Resolver<Maybe<ResolversTypes["Faction"]>, ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  isLocator?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  level?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  location?: Resolver<ResolversTypes["Station"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  researchSkills?: Resolver<
    Array<ResolversTypes["Type"]>,
    ParentType,
    ContextType
  >;
  securityStatus?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServerStatusResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["ServerStatus"] = ResolversParentTypes["ServerStatus"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  lastUpdated?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  numPlayers?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  startTime?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  version?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  vipMode?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SolarSystemResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["SolarSystem"] = ResolversParentTypes["SolarSystem"]
> = {
  constellation?: Resolver<
    ResolversTypes["Constellation"],
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  npcKills?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  planets?: Resolver<Array<ResolversTypes["Planet"]>, ParentType, ContextType>;
  podKills?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  securityClass?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  securityStatus?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  shipJumps?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  shipKills?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  star?: Resolver<Maybe<ResolversTypes["Star"]>, ParentType, ContextType>;
  stargates?: Resolver<
    Array<ResolversTypes["Stargate"]>,
    ParentType,
    ContextType
  >;
  stations?: Resolver<
    Array<ResolversTypes["Station"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpawnPointResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["SpawnPoint"] = ResolversParentTypes["SpawnPoint"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StarResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Star"] = ResolversParentTypes["Star"]
> = {
  age?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  luminosity?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  radius?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  spectralClass?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  temperature?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StargateResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Stargate"] = ResolversParentTypes["Stargate"]
> = {
  destination?: Resolver<ResolversTypes["Stargate"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StationResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Station"] = ResolversParentTypes["Station"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  maxDockableShipVolume?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  officeRentalCost?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes["Corporation"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  race?: Resolver<ResolversTypes["Race"], ParentType, ContextType>;
  reprocessingEfficiency?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  reprocessingStationsTake?: Resolver<
    ResolversTypes["Float"],
    ParentType,
    ContextType
  >;
  services?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  solarSystem?: Resolver<
    Maybe<ResolversTypes["SolarSystem"]>,
    ParentType,
    ContextType
  >;
  type?: Resolver<ResolversTypes["Type"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StructureResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Structure"] = ResolversParentTypes["Structure"]
> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  owner?: Resolver<ResolversTypes["Corporation"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["Position"], ParentType, ContextType>;
  solarSystem?: Resolver<
    ResolversTypes["SolarSystem"],
    ParentType,
    ContextType
  >;
  type?: Resolver<Maybe<ResolversTypes["Type"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Subscription"] = ResolversParentTypes["Subscription"]
> = {
  hello?: SubscriptionResolver<
    ResolversTypes["String"],
    "hello",
    ParentType,
    ContextType
  >;
  postCreated?: SubscriptionResolver<
    ResolversTypes["String"],
    "postCreated",
    ParentType,
    ContextType
  >;
  serverStatus?: SubscriptionResolver<
    ResolversTypes["ServerStatus"],
    "serverStatus",
    ParentType,
    ContextType
  >;
};

export type TypeResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Type"] = ResolversParentTypes["Type"]
> = {
  attributes?: Resolver<
    Array<ResolversTypes["AppliedAttribute"]>,
    ParentType,
    ContextType
  >;
  capacity?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  effects?: Resolver<
    Array<ResolversTypes["AppliedEffect"]>,
    ParentType,
    ContextType
  >;
  graphic?: Resolver<Maybe<ResolversTypes["Graphic"]>, ParentType, ContextType>;
  group?: Resolver<ResolversTypes["Group"], ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes["Icon"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  images?: Resolver<
    Array<ResolversTypes["ImageVariation"]>,
    ParentType,
    ContextType
  >;
  marketGroup?: Resolver<
    Maybe<ResolversTypes["MarketGroup"]>,
    ParentType,
    ContextType
  >;
  mass?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  packagedVolume?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  portionSize?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  published?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  radius?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  volume?: Resolver<Maybe<ResolversTypes["Float"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UnitResolvers<
  ContextType = ContextValue,
  ParentType extends ResolversParentTypes["Unit"] = ResolversParentTypes["Unit"]
> = {
  description?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  displayName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ContextValue> = {
  Agent?: AgentResolvers<ContextType>;
  AgentDivision?: AgentDivisionResolvers<ContextType>;
  AgentInSpace?: AgentInSpaceResolvers<ContextType>;
  AgentType?: AgentTypeResolvers<ContextType>;
  Alliance?: AllianceResolvers<ContextType>;
  AllianceMembership?: AllianceMembershipResolvers<ContextType>;
  Ancestry?: AncestryResolvers<ContextType>;
  AppliedAttribute?: AppliedAttributeResolvers<ContextType>;
  AppliedEffect?: AppliedEffectResolvers<ContextType>;
  AsteroidBelt?: AsteroidBeltResolvers<ContextType>;
  Attribute?: AttributeResolvers<ContextType>;
  AuthenticatedPlayer?: AuthenticatedPlayerResolvers<ContextType>;
  Bloodline?: BloodlineResolvers<ContextType>;
  Category?: CategoryResolvers<ContextType>;
  Character?: CharacterResolvers<ContextType>;
  Constellation?: ConstellationResolvers<ContextType>;
  Contract?: ContractResolvers<ContextType>;
  Corporation?: CorporationResolvers<ContextType>;
  CorporationMembership?: CorporationMembershipResolvers<ContextType>;
  Dungeon?: DungeonResolvers<ContextType>;
  Effect?: EffectResolvers<ContextType>;
  EffectModifier?: EffectModifierResolvers<ContextType>;
  Endpoint?: EndpointResolvers<ContextType>;
  Faction?: FactionResolvers<ContextType>;
  Graphic?: GraphicResolvers<ContextType>;
  Group?: GroupResolvers<ContextType>;
  Icon?: IconResolvers<ContextType>;
  ImageVariation?: ImageVariationResolvers<ContextType>;
  Incursion?: IncursionResolvers<ContextType>;
  ItemExchangeContract?: ItemExchangeContractResolvers<ContextType>;
  MarketGroup?: MarketGroupResolvers<ContextType>;
  Moon?: MoonResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  OpportunityGroup?: OpportunityGroupResolvers<ContextType>;
  OpportunityTask?: OpportunityTaskResolvers<ContextType>;
  Planet?: PlanetResolvers<ContextType>;
  Player?: PlayerResolvers<ContextType>;
  PlayerLocation?: PlayerLocationResolvers<ContextType>;
  PlayerOnlineStatus?: PlayerOnlineStatusResolvers<ContextType>;
  PlayerShip?: PlayerShipResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Race?: RaceResolvers<ContextType>;
  Region?: RegionResolvers<ContextType>;
  RegularAgent?: RegularAgentResolvers<ContextType>;
  ResearchAgent?: ResearchAgentResolvers<ContextType>;
  ServerStatus?: ServerStatusResolvers<ContextType>;
  SolarSystem?: SolarSystemResolvers<ContextType>;
  SpawnPoint?: SpawnPointResolvers<ContextType>;
  Star?: StarResolvers<ContextType>;
  Stargate?: StargateResolvers<ContextType>;
  Station?: StationResolvers<ContextType>;
  Structure?: StructureResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
  Type?: TypeResolvers<ContextType>;
  Unit?: UnitResolvers<ContextType>;
};

export type DirectiveResolvers<ContextType = ContextValue> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
