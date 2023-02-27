import {
  AssetsApi,
  BookmarksApi,
  CalendarApi,
  ClonesApi,
  ContactsApi,
  ContractsApi,
  FactionWarfareApi,
  FittingsApi,
  FleetsApi,
  IndustryApi,
  InsuranceApi,
  KillmailsApi,
  LoyaltyApi,
  MailApi,
  OpportunitiesApi,
  PlanetaryInteractionApi,
  RoutesApi,
  SearchApi,
  SkillsApi,
  SovereigntyApi,
  UserInterfaceApi,
  WalletApi,
  WarsApi,
} from "@eve-graph/esi-apollo-datasource";
import { MetaApi } from "@eve-graph/esi-meta-apollo-datasource";
import AllianceApi from "./AllianceApi";
import CharacterApi from "./CharacterApi";
import CorporationApi from "./CorporationApi";
import DogmaApi from "./DogmaApi";
import HoboleaksApi from "./HoboleaksApi";
import ImageApi from "./ImageApi";
import IncursionsApi from "./IncursionsApi";
import LocationApi from "./LocationApi";
import MarketApi from "./MarketApi";
import StaticDataApi from "./StaticDataApi";
import StatusApi from "./StatusApi";
import UniverseApi from "./UniverseApi";

export {
  AllianceApi,
  CharacterApi,
  CorporationApi,
  DogmaApi,
  HoboleaksApi,
  ImageApi,
  IncursionsApi,
  LocationApi,
  MarketApi,
  StaticDataApi,
  StatusApi,
  UniverseApi,
};

export default (options) => ({
  metaApi: new MetaApi(options),
  // @ts-ignore
  allianceApi: new AllianceApi(options),
  assetsApi: new AssetsApi(options),
  bookmarksApi: new BookmarksApi(options),
  calendarApi: new CalendarApi(options),
  // @ts-ignore
  characterApi: new CharacterApi(options),
  clonesApi: new ClonesApi(options),
  contactsApi: new ContactsApi(options),
  contractsApi: new ContractsApi(options),
  // @ts-ignore
  corporationApi: new CorporationApi(options),
  // @ts-ignore
  dogmaApi: new DogmaApi(options),
  factionWarfareApi: new FactionWarfareApi(options),
  fittingsApi: new FittingsApi(options),
  fleetsApi: new FleetsApi(options),
  hoboleaksApi: new HoboleaksApi(options),
  imageApi: new ImageApi(options),
  // @ts-ignore
  incursionsApi: new IncursionsApi(options),
  industryApi: new IndustryApi(options),
  insuranceApi: new InsuranceApi(options),
  killmailsApi: new KillmailsApi(options),
  // @ts-ignore
  locationApi: new LocationApi(options),
  loyaltyApi: new LoyaltyApi(options),
  mailApi: new MailApi(options),
  // @ts-ignore
  marketApi: new MarketApi(options),
  opportunitiesApi: new OpportunitiesApi(options),
  planetaryInteractionApi: new PlanetaryInteractionApi(options),
  routesApi: new RoutesApi(options),
  searchApi: new SearchApi(options),
  skillsApi: new SkillsApi(options),
  sovereigntyApi: new SovereigntyApi(options),
  staticDataApi: new StaticDataApi(options),
  // @ts-ignore
  statusApi: new StatusApi(options),
  // @ts-ignore
  universeApi: new UniverseApi(options),
  userInterfaceApi: new UserInterfaceApi(options),
  walletApi: new WalletApi(options),
  warsApi: new WarsApi(options),
});
