import { MissionType } from '~/types/missions'
import { MaintenanceLevel } from '~/types/fleetInfo';
import { MissionStatus } from '~/types/missions';



export const RESEND_PALLET_PORT_ACT_REQUEST = `RESEND_PALLET_PORT_ACT_REQUEST` as const;
export const resendPalletPortActRequest = (data: {
  locationId: string;
  action: string;
  isCollection: boolean;
}) => ({
  type: RESEND_PALLET_PORT_ACT_REQUEST,
  locationId: data.locationId,
  action: data.action,
  isCollection: data.isCollection,
});

export const VEHICLE_READY = 'VEHICLE_READY' as const;
export const vehicleReady = (data: { amrId: string }) => ({
  type: VEHICLE_READY,
  ...data,
});

export const VEHICLE_IDLE = 'VEHICLE_IDLE' as const;
export const vehicleIdle = (data: { amrId: string; hasPallet: boolean; carrierId: string }) => ({
  type: VEHICLE_IDLE,
  amrId: data.amrId,
  hasPallet: data.hasPallet,
  carrierId: data.carrierId,
});

export const ALL_VEHICLE_READY = 'ALL_VEHICLE_READY' as const;
export const allVehicleReady = () => ({
  type: ALL_VEHICLE_READY,
});

export const REVIVED_MISSION_ASSIGNED = 'REVIVED_MISSION_ASSIGNED' as const;
export const revivedMissionAssigned = () => ({
  type: REVIVED_MISSION_ASSIGNED,
});

export const LOG = 'LOG' as const;
export const log = (title: string, message: Object) => ({
  type: LOG,
  title,
  message,
});

export const UPDATE_MISSION_COLLECTION = 'UPDATE_MISSION_COLLECTION' as const;
export const updateMissionCollection = (data: {
  missions: {
    amrId: string;
    missionId: string;
    missionType: MissionType;
    missionStatus: MissionStatus;
    createdAt: string;
    assignedAt: string;
    startedAt: string;
    completedAt: string;
  }[];
}) => ({
  type: UPDATE_MISSION_COLLECTION,
  missions: data.missions,
});

export const UPDATE_AMR_MAINTENANCE_LEVEL = 'UPDATE_AMR_MAINTENANCE_LEVEL' as const;
export const updateAmrMaintenanceLevel = (data: { amrId: string; maintenanceLevel: MaintenanceLevel }) => ({
  type: UPDATE_AMR_MAINTENANCE_LEVEL,
  ...data,
});

export type DebugAction = ReturnType<
  | typeof resendPalletPortActRequest
  | typeof log
  | typeof allVehicleReady
  | typeof vehicleReady
  | typeof vehicleIdle
  | typeof revivedMissionAssigned
  | typeof updateMissionCollection
  | typeof updateAmrMaintenanceLevel
>;
