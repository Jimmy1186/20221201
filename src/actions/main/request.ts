import { filter, Observable } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { AllMissions } from '~/messages/missions';
import { Direction } from '~/types/map';
import { MissionHistory } from '~/types/missions';
import { OutputStationInfo } from '~/types/outputStation';
import { PalletPortAction, PalletPortInfo } from '~/types/palletport';
import { PeripheralInfo, PeripheralTypes } from '~/types/peripherals';
import { StationInfo } from '~/types/station';

const REQ = `REQUEST` as const;
const RES = `RESPONSE` as const;

export function ofReq<T extends string, A extends { type: string; reqType?: string }>(t: T) {
  return (source$: Observable<A>) =>
    source$.pipe(
      filter(function predicate(action: A): action is A extends { type: T; reqType: typeof REQ } ? A : never {
        return action.type === t && action.reqType === REQ;
      }),
    );
}

export function isReq<T extends string, A extends { type: string; reqType?: string }>(
  action: A,
  t: T,
): action is A extends { type: T; reqType: typeof REQ } ? A : never {
  return action.type === t && action.reqType === REQ;
}

export function ofRes<T extends string, A extends { type: string; reqType?: string }>(t: T) {
  return (source$: Observable<A>) =>
    source$.pipe(
      filter(function predicate(action: A): action is A extends { type: T; reqType: typeof REQ } ? A : never {
        return action.type === t && action.reqType === RES;
      }),
    );
}

export function ofResourceType<T extends string, A extends { resourceType: PeripheralTypes }>(t: T) {
  return (source$: Observable<A>) => source$.pipe(filter((action: A) => action.resourceType === t));
}

export const ESTIMATE_TRAVEL_TIME = `ESTIMATE_TRAVEL_TIME` as const;
export const reqEstimateTravelTime = (data: { amrId: string; startId?: string; destId: string }) => ({
  ...data,
  type: ESTIMATE_TRAVEL_TIME,
  reqType: REQ,
  reqId: uuid(),
});
export const resEstimateTravelTime = (data: { reqId: string; estimateTime: number }) => ({
  type: ESTIMATE_TRAVEL_TIME,
  reqType: RES,
  reqId: data.reqId,
  estimateTime: data.estimateTime,
});

export const SHORTEST_TRAVEL_TIME = `SHORTEST_TRAVEL_TIME` as const;
export const reqShortestTravelTime = (data: { amrId: string; destIds: string[] }) => ({
  type: SHORTEST_TRAVEL_TIME,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  destIds: data.destIds,
});
export const resShortestTravelTime = (data: { reqId: string; destId: string; estimateTime: number }) => ({
  type: SHORTEST_TRAVEL_TIME,
  reqType: RES,
  reqId: data.reqId,
  destId: data.destId,
  estimateTime: data.estimateTime,
});

export const BOOK_CHARGING_STATION = `BOOK_CHARGING_STATION` as const;
export const reqBookChargingStation = (data: { amrId: string }) => ({
  type: BOOK_CHARGING_STATION,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
});
export const resBookChargingStation = (data: { reqId: string; chargingStationId: string }) => ({
  type: BOOK_CHARGING_STATION,
  reqType: RES,
  reqId: data.reqId,
  chargingStationId: data.chargingStationId,
});

export const CHECK_ACTIVE_OUTPUT_STATION = `CHECK_ACTIVE_OUTPUT_STATION` as const;
export const reqCheckActiveOutputStation = (data: { source: string }) => ({
  type: CHECK_ACTIVE_OUTPUT_STATION,
  reqType: REQ,
  reqId: uuid(),
  ...data,
});
export const resCheckActiveOutputStation = (data: { reqId: string; result: boolean }) => ({
  type: CHECK_ACTIVE_OUTPUT_STATION,
  reqType: RES,
  reqId: data.reqId,
  result: data.result,
});

export const BOOK_PRE_OUTPUT_STATION = `BOOK_PRE_OUTPUT_STATION` as const;
export const reqBookPreOutputStation = (data: { amrId: string; source: string }) => ({
  type: BOOK_PRE_OUTPUT_STATION,
  reqType: REQ,
  reqId: uuid(),
  ...data,
});
export const resBookPreOutputStation = (data: { reqId: string; preOutputStationId: string }) => ({
  type: BOOK_PRE_OUTPUT_STATION,
  reqType: RES,
  reqId: data.reqId,
  preOutputStationId: data.preOutputStationId,
});

export const BOOK_OUTPUT_STATION = `BOOK_OUTPUT_STATION` as const;
export const reqBookOutputStation = (data: { amrId: string; source: string }) => ({
  type: BOOK_OUTPUT_STATION,
  reqType: REQ,
  reqId: uuid(),
  ...data,
});
export const resBookOutputStation = (data: { reqId: string; outputStationId: string }) => ({
  type: BOOK_OUTPUT_STATION,
  reqType: RES,
  reqId: data.reqId,
  outputStationId: data.outputStationId,
});

export const BOOK_STANDBY_LOCATION = `BOOK_STANDBY_LOCATION` as const;
export const reqBookStandbyLocation = (data: { amrId: string; hasPallet: boolean }) => ({
  type: BOOK_STANDBY_LOCATION,
  reqType: REQ,
  reqId: uuid(),
  ...data,
});
export const resBookStandbyLocation = (data: { reqId: string; standbyLocationId: string }) => ({
  type: BOOK_STANDBY_LOCATION,
  reqType: RES,
  reqId: data.reqId,
  standbyLocationId: data.standbyLocationId,
});

export const CLOSEST_AVAILABLE_PALLET_PORT = `CLOSEST_AVAILABLE_PALLET_PORT` as const;
export const reqClosestAvailablePalletPort = (data: {
  amrId: string;
  mission: AllMissions;
  actionType: PalletPortAction;
}) => ({
  type: CLOSEST_AVAILABLE_PALLET_PORT,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  actionType: data.actionType,
  mission: data.mission,
});
export const resClosestAvailablePalletPort = (data: { reqId: string; palletPortId: string }) => ({
  type: CLOSEST_AVAILABLE_PALLET_PORT,
  reqType: RES,
  reqId: data.reqId,
  palletPortId: data.palletPortId,
});

export const CHECK_PALLET_PORT = `CHECK_PALLET_PORT` as const;
export const reqCheckPalletPort = (data: {
  amrId: string;
  palletPortId: string;
  actionType: PalletPortAction;
}) => ({
  type: CHECK_PALLET_PORT,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  palletPortId: data.palletPortId,
  actionType: data.actionType,
});
export const resCheckPalletPort = (data: { reqId: string; result: boolean }) => ({
  type: CHECK_PALLET_PORT,
  reqType: RES,
  reqId: data.reqId,
  result: data.result,
});

export const BOOK_PALLET_PORT = `BOOK_PALLET_PORT` as const;
export const reqBookPalletPort = (data: {
  amrId: string;
  mission: AllMissions;
  actionType: PalletPortAction;
}) => ({
  type: BOOK_PALLET_PORT,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  actionType: data.actionType,
  mission: data.mission,
});
export const resBookPalletPort = (data: { reqId: string; palletPortId: string }) => ({
  type: BOOK_PALLET_PORT,
  reqType: RES,
  reqId: data.reqId,
  palletPortId: data.palletPortId,
});

export const UNBOOK_PALLET_PORT = `UNBOOK_PALLET_PORT` as const;
export const reqUnbookPalletPort = (data: { amrId: string; actionType: PalletPortAction }) => ({
  type: UNBOOK_PALLET_PORT,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  actionType: data.actionType,
});
export const resUnbookPalletPort = (data: { reqId: string }) => ({
  type: UNBOOK_PALLET_PORT,
  reqType: RES,
  reqId: data.reqId,
});

export const LOCATION_STATUS = `LOCATION_STATUS` as const;
export const reqLocationStatus = (data: { locationId: string }) => ({
  type: LOCATION_STATUS,
  reqType: REQ,
  reqId: uuid(),
  locationId: data.locationId,
});

export const resLocationStatus = (data: { reqId: string; isInService: boolean }) => ({
  type: LOCATION_STATUS,
  reqType: RES,
  reqId: data.reqId,
  isInService: data.isInService,
});

export const FIND_BEST_OUTPUT_STATION = `FIND_BEST_OUTPUT_STATION` as const;
export const reqFindBestOutputStation = (data: { locationId: string }) => ({
  type: FIND_BEST_OUTPUT_STATION,
  reqType: REQ,
  reqId: uuid(),
  locationId: data.locationId,
});

export const resFindBestOutputStation = (data: { reqId: string; locationId: string }) => ({
  type: FIND_BEST_OUTPUT_STATION,
  reqType: RES,
  reqId: data.reqId,
  locationId: data.locationId,
});

export const GET_SHIPMENT_STATION_FROM_LINE = `GET_SHIPMENT_STATION_FROM_LINE` as const;
export const reqShipmentStationFromLine = (data: {
  amrId: string;
  currentLocation: string;
  line: string;
}) => ({
  type: GET_SHIPMENT_STATION_FROM_LINE,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  currentLocation: data.currentLocation,
  line: data.line,
});

export const resShipmentStationFromLine = (data: { reqId: string; locationId: string }) => ({
  type: GET_SHIPMENT_STATION_FROM_LINE,
  reqType: RES,
  reqId: data.reqId,
  locationId: data.locationId,
});

export const GET_EMPTY_STATION_FROM_LINE = `GET_EMPTY_STATION_FROM_LINE` as const;
export const reqEmptyStationFromLine = (data: { amrId: string; currentLocation: string; line: string }) => ({
  type: GET_EMPTY_STATION_FROM_LINE,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  currentLocation: data.currentLocation,
  line: data.line,
});

export const resEmptyStationFromLine = (data: { reqId: string; locationId: string }) => ({
  type: GET_EMPTY_STATION_FROM_LINE,
  reqType: RES,
  reqId: data.reqId,
  locationId: data.locationId,
});

export const PERIPHERAL_STATUS = `PERIPHERAL_STATUS` as const;

export const reqPeripheralStatus = (data: { resourceType: PeripheralTypes }) => ({
  type: PERIPHERAL_STATUS,
  reqType: REQ,
  reqId: uuid(),
  resourceType: data.resourceType,
});

export const resPeripheralStatus = (data: {
  reqId: string;
  resourceType: PeripheralTypes;
  stations: PeripheralInfo[] | StationInfo[] | PalletPortInfo[] | OutputStationInfo[];
}) => ({
  type: PERIPHERAL_STATUS,
  reqType: RES,
  reqId: data.reqId,
  resourceType: data.resourceType,
  stations: data.stations,
});

export const PALLET_PORT_INFO = `PALLET_PORT_INFO` as const;
export const reqPalletPortInfo = (data: { palletPortId: string }) => ({
  type: PALLET_PORT_INFO,
  reqType: REQ,
  reqId: uuid(),
  palletPortId: data.palletPortId,
});
export const resPalletPortInfo = (data: {
  reqId: string;
  palletId: string;
  count: number;
  isInService: boolean;
}) => ({
  type: PALLET_PORT_INFO,
  reqType: RES,
  ...data,
});

export const LOCATION_DIRECTION = `LOCATION_DIRECTION` as const;
export const reqLocationDirection = (data: { amrId: string; locationId: string }) => ({
  type: LOCATION_DIRECTION,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
  locationId: data.locationId,
});
export const resLocationDirection = (data: { reqId: string; direction: Direction }) => ({
  type: LOCATION_DIRECTION,
  reqType: RES,
  reqId: data.reqId,
  direction: data.direction,
});

export const LOCATION_OCCUPIER = `LOCATION_OCCUPIER` as const;
export const reqLocationOccupier = (data: { locationId: string }) => ({
  type: LOCATION_OCCUPIER,
  reqType: REQ,
  reqId: uuid(),
  locationId: data.locationId,
});

export const resLocationOccupier = (data: { reqId: string; amrId: string }) => ({
  type: LOCATION_OCCUPIER,
  reqType: RES,
  reqId: data.reqId,
  amrId: data.amrId,
});

export const VEHICLE_INFO = `VEHICLE_INFO` as const;
export const reqVehicleInfo = (data: { amrId: string }) => ({
  type: VEHICLE_INFO,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
});

export const resVehicleInfo = (data: {
  reqId: string;
  amrId: string;
  hasPallet: boolean;
  carrierId: string;
  battery: number;
}) => ({
  type: VEHICLE_INFO,
  reqType: RES,
  reqId: data.reqId,
  ...data,
});

export const ALL_PLANS = `ALL_PLANS` as const;
export const reqAllPlans = () => ({
  type: ALL_PLANS,
  reqType: REQ,
  reqId: uuid(),
});

export const resAllPlans = (data: { reqId: string; plans: { id: string; planString: string }[] }) => ({
  type: ALL_PLANS,
  reqType: RES,
  reqId: data.reqId,
  plans: data.plans,
});

export const ALL_MISSIONS = `ALL_MISSIONS` as const;
export const reqAllMissions = () => ({
  type: ALL_MISSIONS,
  reqType: REQ,
  reqId: uuid(),
});

export const resAllMissions = (data: { reqId: string; missions: { id: string; data: Object }[] }) => ({
  type: ALL_MISSIONS,
  reqType: RES,
  reqId: data.reqId,
  missions: data.missions,
});

export const MISSION_HISTORY = `MISSION_HISTORY` as const;
export const reqMissionHistory = (data: { missionId: string }) => ({
  type: MISSION_HISTORY,
  reqType: REQ,
  reqId: uuid(),
  ...data,
});
export const resMissionHistory = (data: { reqId: string; history: MissionHistory[] }) => ({
  type: MISSION_HISTORY,
  reqType: RES,
  ...data,
});

export const VEHICLE_LOCATION = `VEHICLE_LOCATION` as const;
export const reqVehicleLocation = (data: { amrId: string }) => ({
  type: VEHICLE_LOCATION,
  reqType: REQ,
  reqId: uuid(),
  amrId: data.amrId,
});
export const resVehicleLocation = (data: { reqId: string; locationId: string }) => ({
  type: VEHICLE_LOCATION,
  reqType: RES,
  reqId: data.reqId,
  locationId: data.locationId,
});

type ReqFn =
  | typeof reqEstimateTravelTime
  | typeof reqShortestTravelTime
  | typeof reqBookChargingStation
  | typeof reqClosestAvailablePalletPort
  | typeof reqCheckPalletPort
  | typeof reqCheckActiveOutputStation
  | typeof reqBookPreOutputStation
  | typeof reqBookPalletPort
  | typeof reqBookOutputStation
  | typeof reqBookStandbyLocation
  | typeof reqUnbookPalletPort
  | typeof reqLocationStatus
  | typeof reqPeripheralStatus
  | typeof reqShipmentStationFromLine
  | typeof reqEmptyStationFromLine
  | typeof reqLocationOccupier
  | typeof reqPalletPortInfo
  | typeof reqLocationDirection
  | typeof reqAllPlans
  | typeof reqAllMissions
  | typeof reqMissionHistory
  | typeof reqFindBestOutputStation
  | typeof reqVehicleInfo;

export type ReqAction = ReturnType<ReqFn>;
export type ResAction = ReturnType<
  | typeof resEstimateTravelTime
  | typeof resShortestTravelTime
  | typeof resBookChargingStation
  | typeof resClosestAvailablePalletPort
  | typeof resCheckPalletPort
  | typeof resCheckActiveOutputStation
  | typeof resBookPreOutputStation
  | typeof resBookPalletPort
  | typeof resBookOutputStation
  | typeof resBookStandbyLocation
  | typeof resUnbookPalletPort
  | typeof resLocationStatus
  | typeof resPeripheralStatus
  | typeof resShipmentStationFromLine
  | typeof resEmptyStationFromLine
  | typeof resLocationOccupier
  | typeof resPalletPortInfo
  | typeof resLocationDirection
  | typeof resAllPlans
  | typeof resAllMissions
  | typeof resMissionHistory
  | typeof resFindBestOutputStation
  | typeof resVehicleInfo
>;

export type ReqType = ReqAction['type'];
export type Send<
  T extends ReqType = ReqType,
  A extends ReqFn = ReqFn,
  B extends ResAction = ResAction,
> = A extends (data: any) => { type: T }
  ? (...args: Parameters<A>) => B extends { type: T } ? Promise<B> : never
  : never;
