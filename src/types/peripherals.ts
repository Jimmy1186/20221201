export type PeripheralTypes =
  | 'CHARGING_STATION'
  | 'PALLET_PORT'
  | 'GENERAL_STATION'
  | 'STANDBY_LOCATION'
  | 'OUTPUT_STATION';

export type PeripheralInfo = {
  id: string;
  booker: string;
  occupier: string;
};
