import { Alarm } from '~/messages/alarms';
import { AllMissions, Mission } from '~/messages/missions';

export const REPORT_MISSION_ASSIGNED = `REPORT_MISSION_ASSIGNED` as const;
export const reportMissionAssigned = (data: { amrId: string; missionId: string }) => ({
  type: REPORT_MISSION_ASSIGNED,
  amrId: data.amrId,
  missionId: data.missionId,
});

export const REPORT_MISSION_STARTED = `REPORT_MISSION_STARTED` as const;
export const reportMissionStarted = (data: { amrId: string; missionId: string }) => ({
  type: REPORT_MISSION_STARTED,
  amrId: data.amrId,
  missionId: data.missionId,
});

export const REPORT_MISSION_FINISHED = `REPORT_MISSION_FINISHED` as const;
export const reportMissionFinished = (data: {
  amrId: string;
  missionId: string;
  mission: AllMissions;
  locationId: string;
}) => ({
  type: REPORT_MISSION_FINISHED,
  amrId: data.amrId,
  missionId: data.missionId,
  mission: data.mission,
  locationId: data.locationId,
});

export const REPORT_CARRIER_MOVE_COMPLETE = `REPORT_CARRIER_MOVE_COMPLETE` as const;
export const reportCarrierMoveComplete = (data: {
  amrId: string;
  missionId: string;
  mission: AllMissions;
  locationId: string;
}) => ({
  type: REPORT_CARRIER_MOVE_COMPLETE,
  amrId: data.amrId,
  missionId: data.missionId,
  mission: data.mission,
  locationId: data.locationId,
});

export const REPORT_AMR_DEPART_STATION = `REPORT_AMR_DEPART_STATION` as const;
export const reportAmrDepartStation = (data: {
  amrId: string;
  missionId: string;
  nextLocationId: string;
  carrierId: string;
}) => ({
  type: REPORT_AMR_DEPART_STATION,
  amrId: data.amrId,
  missionId: data.missionId,
  nextLocationId: data.nextLocationId,
  carrierId: data.carrierId,
});

export const REPORT_AMR_ARRIVED_STATION = `REPORT_AMR_ARRIVED_STATION` as const;
export const reportAmrArrivedStation = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
  carrierId: string;
}) => ({
  type: REPORT_AMR_ARRIVED_STATION,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
  carrierId: data.carrierId,
});

export const REPORT_AMR_OFFLOAD_PALLET_STARTED = `REPORT_AMR_OFFLOAD_PALLET_STARTED` as const;
export const reportAmrOffloadPalletStarted = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
  carrierId: string;
  commandType: string;
}) => ({
  type: REPORT_AMR_OFFLOAD_PALLET_STARTED,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
  carrierId: data.carrierId,
  commandType: data.commandType,
});

export const REPORT_AMR_OFFLOAD_PALLET_COMPLETED = `REPORT_AMR_OFFLOAD_PALLET_COMPLETED` as const;
export const reportAmrOffloadPalletCompleted = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
  carrierId: string;
}) => ({
  type: REPORT_AMR_OFFLOAD_PALLET_COMPLETED,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
  carrierId: data.carrierId,
});

export const REPORT_AMR_LOAD_PALLET_STARTED = `REPORT_AMR_LOAD_PALLET_STARTED` as const;
export const reportAmrLoadPalletStarted = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
  carrierId: string;
  commandType?: string;
}) => ({
  type: REPORT_AMR_LOAD_PALLET_STARTED,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
  carrierId: data.carrierId,
  commandType: data.commandType,
});

export const REPORT_AMR_LOAD_PALLET_COMPLETED = `REPORT_AMR_LOAD_PALLET_COMPLETED` as const;
export const reportAmrLoadPalletCompleted = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
  carrierId: string;
}) => ({
  type: REPORT_AMR_LOAD_PALLET_COMPLETED,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
  carrierId: data.carrierId,
});

export const REPORT_AMR_ARRIVED_SOURCE_LOCATION = `REPORT_AMR_ARRIVED_SOURCE_LOCATION` as const;
export const reportAmrArrivedSourceLocation = (data: {
  amrId: string;
  missionId: string;
  locationId: string;
}) => ({
  type: REPORT_AMR_ARRIVED_SOURCE_LOCATION,
  amrId: data.amrId,
  missionId: data.missionId,
  locationId: data.locationId,
});

export const REPORT_ALARM = `REPORT_ALARM` as const;
export const reportAlarm = (alarm: Alarm) => ({
  type: REPORT_ALARM,
  alarm,
});

export const REPORT_CANCEL_MISSION_RESULT = `REPORT_CANCEL_MISSION_RESULT` as const;
export const reportCancelMissionResult = (data: { missionId: string; isCanceled: boolean }) => ({
  type: REPORT_CANCEL_MISSION_RESULT,
  ...data,
});

export type ReportAction = ReturnType<
  | typeof reportMissionAssigned
  | typeof reportMissionStarted
  | typeof reportMissionFinished
  | typeof reportAmrDepartStation
  | typeof reportAmrArrivedStation
  | typeof reportAmrOffloadPalletStarted
  | typeof reportAmrOffloadPalletCompleted
  | typeof reportAmrLoadPalletStarted
  | typeof reportAmrLoadPalletCompleted
  | typeof reportAmrArrivedSourceLocation
  | typeof reportCarrierMoveComplete
  | typeof reportAlarm
  | typeof reportCancelMissionResult
>;
