export interface Constructor {
  constructorId: string;
  name: string;
  nationality: string;
  url: string;
}

export interface Driver {
  code: string;
  dateOfBirth: string;
  driverId: string;
  familyName: string;
  givenName: string;
  nationality: string;
  url: string;
}

export interface FastestLap {
  AverageSpeed: AverageSpeed;
  Time: Time;
  lap: string;
  rank: string;
}

export interface AverageSpeed {
  units: string;
  speed: string;
}

export interface Time {
  time: string;
  millis?: string;
}

export interface Result {
  Constructor: Constructor;
  Driver: Driver;
  FastestLap: FastestLap;
  Time: Time;
  grid: string;
  laps: string;
  number: string;
  points: string;
  position: string;
  positionText: string;
  status: string;
}

export interface Circuit {
  Location: RaceLocation;
  circuitId: string;
  circuitName: string;
}

export interface RaceLocation {
  country: string;
  lat: string;
  locality: string;
  long: string;
}

export interface Race {
  Circuit: Circuit;
  Results: Result[];
  date: string;
  raceName: string;
  round: string;
  season: string;
  time: string;
  url: string;
}

export interface RaceTable {
  Races: Race[];
  season: string;
}

export interface MRData {
  RaceTable: RaceTable;
  limit: string;
  offset: string;
  series: string;
  total: string;
  url: string;
  xmlns: string;
}

export interface Season {
  MRData: MRData;
}

export interface DriverPoints {
  driver: Driver;
  points: number;
}
