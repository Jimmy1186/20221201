import { StationActReq } from '~/types/station';

export const UPDATE_PALLET_PORT = `UPDATE_PALLET_PORT` as const;
export const updatePalletPort = (
  palletPorts: { palletPortId: string; isInService: boolean; count: number; lowestPalletId?: string }[],
) => ({
  type: UPDATE_PALLET_PORT,
  palletPorts,
});

export const UPDATE_STATION_STATUS = `UPDATE_STATION_STATUS` as const;
export const updateStationStatus = (
  stations: { stationId: string; actReq: StationActReq; isInService?: boolean }[],
) => ({
  type: UPDATE_STATION_STATUS,
  stations,
});

export const UNBOOK_CHARGING_STATION = `UNBOOK_CHARGING_STATION` as const;
export const unbookChargingStation = (data: { amrId: string }) => ({
  type: UNBOOK_CHARGING_STATION,
  amrId: data.amrId,
});

export const UNBOOK_STANDBY_LOCATION = `UNBOOK_STANDBY_LOCATION` as const;
export const unbookStandbyLocation = (data: { amrId: string }) => ({
  type: UNBOOK_STANDBY_LOCATION,
  amrId: data.amrId,
});

export const CLAIM_PERIPHERAL_LOCATION = 'CLAIM_PERIPHERAL_LOCATION' as const;
export const CLAIM_DESTINATION = 'CLAIM_DESTINATION' as const;
export const CLAIM_LOCATION = 'CLAIM_LOCATION' as const;
export type ClaimType = typeof CLAIM_DESTINATION | typeof CLAIM_LOCATION;
export const claimPeripheralLocation = (data: { amrId: string; locId: string; claimType: ClaimType }) => ({
  type: CLAIM_PERIPHERAL_LOCATION,
  amrId: data.amrId,
  locationId: data.locId,
  claimType: data.claimType,
});

export const UNCLAIM_PERIPHERAL_LOCATION = 'UNCLAIM_PERIPHERAL_LOCATION' as const;
export const unclaimPeripheralLocation = (data: { amrId: string; locId: string; claimType: ClaimType }) => ({
  type: UNCLAIM_PERIPHERAL_LOCATION,
  amrId: data.amrId,
  locationId: data.locId,
  claimType: data.claimType,
});

export type StationAction = ReturnType<
  | typeof updatePalletPort
  | typeof updateStationStatus
  | typeof unbookChargingStation
  | typeof unbookStandbyLocation
  | typeof claimPeripheralLocation
  | typeof unclaimPeripheralLocation
>;
