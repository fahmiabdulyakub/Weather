export interface WeatherType {
  cod: string;
  message: number;
  cnt: number;
  list?: ListEntityType[] | null;
  city: City;
}
export interface ListEntityType {
  dt: number;
  main: MainType;
  weather: WeatherEntityType[];
  clouds: CloudsType;
  wind: WindType;
  visibility: number;
  pop: number;
  sys: SysType;
  dt_txt: string;
}
export interface MainType {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface WeatherEntityType {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface CloudsType {
  all: number;
}
export interface WindType {
  speed: number;
  deg: number;
  gust: number;
}
export interface SysType {
  pod: string;
}
export interface City {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}
export interface Coord {
  lat: number;
  lon: number;
}
