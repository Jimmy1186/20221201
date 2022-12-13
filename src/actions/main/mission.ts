import { Mission } from '~/messages/missions';
// import { MissionStatus } from '~/types/missions';

export const CREATE_MISSION = 'CREATE_MISSION' as const;
export const createMission = (data: { mission: Mission }) => ({
  type: CREATE_MISSION,
  mission: data.mission,
});

export const ASSIGN_MISSION = 'ASSIGN_MISSION' as const;
export const assignMission = (data: { amrId: string; mission: Mission }) => ({
  type: ASSIGN_MISSION,
  amrId: data.amrId,
  mission: data.mission,
});

export const CANCEL_MISSION = 'CANCEL_MISSION' as const;
export const cancelMission = (data: { missionId: string }) => ({
  type: CANCEL_MISSION,
  missionId: data.missionId,
});

export const CANCEL_AMR_MISSION = 'CANCEL_AMR_MISSION' as const;
export const cancelAmrMission = (data: { amrId: string }) => ({
  type: CANCEL_AMR_MISSION,
  amrId: data.amrId,
});

export const ABORT_MISSION = `ABORT_MISSION` as const;
export const abortMission = (data: { missionId: string; amrId: string }) => ({
  type: ABORT_MISSION,
  ...data,
});

export const UPDATE_CARRIER_INFO = `UPDATE_CARRIER_INFO` as const;

export const updateCarrierInfo = (data: {
  carrierId: string;
  carrierStatus: string;
  carrierLoc: string;
}) => ({
  type: UPDATE_CARRIER_INFO,
  ...data,
});

export const COMMAND_CONTINUE = `COMMAND_CONTINUE` as const;

export const commandContinue = (data: { commandId: string }) => ({
  type: COMMAND_CONTINUE,
  ...data,
});

export type MissionAction = ReturnType<
  | typeof createMission
  | typeof assignMission
  | typeof cancelMission
  | typeof cancelAmrMission
  | typeof abortMission
  | typeof updateCarrierInfo
  | typeof commandContinue
>;
