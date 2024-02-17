export interface Pais {
  name:         Name;
  tld?:         string[];
  cca2:         string;
  ccn3?:        string;
  cca3:         string;
  cioc?:        string;
  independent?: boolean;
  status:       Status;
  unMember:     boolean;
  currencies:   Currencies;
  idd:          Idd;
  capital:      string[];
  altSpellings: string[];
  region:       Region;
  subregion?:   string;
  languages:    { [key: string]: string };
  translations: { [key: string]: Translation };
  latlng:       number[];
  landlocked:   boolean;
  borders?:     string[];
  area:         number;
  demonyms:     Demonyms;
  flag:         string;
  maps:         Maps;
  population:   number;
  gini?:        { [key: string]: number };
  fifa?:        string;
  car:          Car;
  timezones:    string[];
  continents:   Continent[];
  flags:        Flags;
  coatOfArms:   CoatOfArms;
  startOfWeek:  StartOfWeek;
  capitalInfo:  CapitalInfo;
  postalCode?:  PostalCode;
}

export interface CapitalInfo {
  latlng?: number[];
}

export interface Car {
  signs?: string[];
  side:   Side;
}

export enum Side {
  Left = "left",
  Right = "right",
}

export interface CoatOfArms {
  png?: string;
  svg?: string;
}

export enum Continent {
  Africa = "Africa",
  Antarctica = "Antarctica",
  Asia = "Asia",
  Europe = "Europe",
  NorthAmerica = "North America",
  Oceania = "Oceania",
  SouthAmerica = "South America",
}

export interface Currencies {
  ILS?: Aed;
  EUR?: Aed;
  ERN?: Aed;
  LRD?: Aed;
  SGD?: Aed;
  BMD?: Aed;
  UGX?: Aed;
  TOP?: Aed;
  AED?: Aed;
  SRD?: Aed;
  CKD?: Aed;
  NZD?: Aed;
  SOS?: Aed;
  ZMW?: Aed;
  UZS?: Aed;
  VES?: Aed;
  TMT?: Aed;
  SAR?: Aed;
  ALL?: Aed;
  EGP?: Aed;
  MGA?: Aed;
  XPF?: Aed;
  CAD?: Aed;
  USD?: Aed;
  SDG?: BAM;
  XAF?: Aed;
  AZN?: Aed;
  KES?: Aed;
  XOF?: Aed;
  MRU?: Aed;
  GMD?: Aed;
  VND?: Aed;
  TTD?: Aed;
  SCR?: Aed;
  AFN?: Aed;
  BRL?: Aed;
  SYP?: Aed;
  GBP?: Aed;
  SHP?: Aed;
  GTQ?: Aed;
  KWD?: Aed;
  STN?: Aed;
  PLN?: Aed;
  GHS?: Aed;
  TZS?: Aed;
  AMD?: Aed;
  IRR?: Aed;
  JEP?: Aed;
  WST?: Aed;
  TJS?: Aed;
  ETB?: Aed;
  NIO?: Aed;
  DZD?: Aed;
  MAD?: Aed;
  BND?: Aed;
  RON?: Aed;
  NOK?: Aed;
  GNF?: Aed;
  XCD?: Aed;
  PAB?: Aed;
  DKK?: Aed;
  CZK?: Aed;
  PHP?: Aed;
  CRC?: Aed;
  BAM?: BAM;
  MZN?: Aed;
  PKR?: Aed;
  PEN?: Aed;
  KPW?: Aed;
  HUF?: Aed;
  BDT?: Aed;
  IQD?: Aed;
  AOA?: Aed;
  CUC?: Aed;
  CUP?: Aed;
  FJD?: Aed;
  COP?: Aed;
  RSD?: Aed;
  FOK?: Aed;
  MVR?: Aed;
  JOD?: Aed;
  TRY?: Aed;
  MYR?: Aed;
  PYG?: Aed;
  ZAR?: Aed;
  AUD?: Aed;
  KID?: Aed;
  KZT?: Aed;
  VUV?: Aed;
  GIP?: Aed;
  ISK?: Aed;
  QAR?: Aed;
  CLP?: Aed;
  MMK?: Aed;
  THB?: Aed;
  BZD?: Aed;
  AWG?: Aed;
  NGN?: Aed;
  BHD?: Aed;
  LAK?: Aed;
  SBD?: Aed;
  MNT?: Aed;
  TVD?: Aed;
  DOP?: Aed;
  FKP?: Aed;
  NPR?: Aed;
  BWP?: Aed;
  ANG?: Aed;
  ZWL?: Aed;
  LSL?: Aed;
  ARS?: Aed;
  TWD?: Aed;
  YER?: Aed;
  BGN?: Aed;
  MDL?: Aed;
  IMP?: Aed;
  CDF?: Aed;
  HTG?: Aed;
  OMR?: Aed;
  CVE?: Aed;
  IDR?: Aed;
  BIF?: Aed;
  RWF?: Aed;
  BSD?: Aed;
  SZL?: Aed;
  SSP?: Aed;
  HNL?: Aed;
  LKR?: Aed;
  CHF?: Aed;
  HKD?: Aed;
}

export interface Aed {
  name:   string;
  symbol: string;
}

export interface BAM {
  name: string;
}

export interface Demonyms {
  eng:  Eng;
  fra?: Eng;
}

export interface Eng {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}

export interface Idd {
  root:     string;
  suffixes: string[];
}

export interface Maps {
  googleMaps:     string;
  openStreetMaps: string;
}

export interface Name {
  common:     string;
  official:   string;
  nativeName: { [key: string]: Translation };
}

export interface Translation {
  official: string;
  common:   string;
}

export interface PostalCode {
  format: string;
  regex?: string;
}

export enum Region {
  Africa = "Africa",
  Americas = "Americas",
  Antarctic = "Antarctic",
  Asia = "Asia",
  Europe = "Europe",
  Oceania = "Oceania",
}

export enum StartOfWeek {
  Monday = "monday",
  Saturday = "saturday",
  Sunday = "sunday",
}

export enum Status {
  OfficiallyAssigned = "officially-assigned",
  UserAssigned = "user-assigned",
}
