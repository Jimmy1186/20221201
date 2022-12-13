import { ExecutionStatus } from '~/types/missions';
import { Direction } from '~/types/map';
import { IOStatus } from '~/types/io';
import { FleetInfo } from '~/types/fleetInfo';
import { PlanningOptions } from '~/types/plan';
import { OperatingCommand } from '~/types/operatingCommand';
import { SimplePose } from '~/types/pose';

export const START_TRAFFIC_NAVIGATION = 'START_TRAFFIC_NAVIGATION' as const;
export const startTrafficNavigation = (data: {
  amrId: string;
  destId: string;
  options?: PlanningOptions;
}) => ({
  type: START_TRAFFIC_NAVIGATION,
  ...data,
});

export const COMPLETE_TRAFFIC_NAVIGATION = 'COMPLETE_TRAFFIC_NAVIGATION' as const;
export const completeTrafficNavigation = (data: { amrId: string; locationId: string }) => ({
  type: COMPLETE_TRAFFIC_NAVIGATION,
  ...data,
});

export const SEND_MOVE_TO_POINT_COMMAND = 'SEND_MOVE_TO_POINT_COMMAND' as const;
export const sendMoveToPointCommand = (data: {
  amrId: string;
  x: number;
  y: number;
  tolerance: number;
  inflationRadius: number;
  cmdId: number;
}) => ({
  ...data,
  type: SEND_MOVE_TO_POINT_COMMAND,
});

export const SEND_MOVE_TO_POINT_PRECISELY_COMMAND = 'SEND_MOVE_TO_POINT_PRECISELY_COMMAND' as const;
export const sendMoveToPointPreciselyCommand = (data: {
  amrId: string;
  x: number;
  y: number;
  yaw: number;
  xyGoalTolerance: number;
  yawGoalTolerance: number;
  tolerance: number;
  inflationRadius: number;
  cmdId: number;
}) => ({
  ...data,
  type: SEND_MOVE_TO_POINT_PRECISELY_COMMAND,
});

export const SEND_SET_POSE_COMMAND = 'SEND_SET_POSE_COMMAND' as const;
export const sendSetPoseCommand = (data: { amrId: string; x: number; y: number; yaw: number }) => ({
  ...data,
  type: SEND_SET_POSE_COMMAND,
});

export const SEND_TEXT_COMMAND = 'SEND_TEXT_COMMAND' as const;
export const sendTextCommand = (data: { amrId: string; commandId: string; args?: string }) => ({
  ...data,
  type: SEND_TEXT_COMMAND,
});

export const SEND_ROTATE_COMMAND = 'SEND_ROTATE_COMMAND' as const;
export const sendRotateCommand = (data: {
  amrId: string;
  yaw: number;
  tolerance: number;
  inflationRadius: number;
  cmdId: number;
}) => ({
  ...data,
  type: SEND_ROTATE_COMMAND,
});

export const START_CHARGING_POSITIONING = 'START_CHARGING_POSITIONING' as const;
export const startChargingPositioning = (data: { amrId: string }) => ({
  type: START_CHARGING_POSITIONING,
  amrId: data.amrId,
});

export const SEND_CONNECT_TO_CHARGING_STATION_COMMAND = 'SEND_CONNECT_TO_CHARGING_STATION_COMMAND' as const;
export const sendConnectToChargingStationCommand = (data: { amrId: string; locationId: string }) => ({
  type: SEND_CONNECT_TO_CHARGING_STATION_COMMAND,
  amrId: data.amrId,
  locationId: data.locationId,
});

export const SEND_DISCONNECT_TO_CHARGING_STATION_COMMAND =
  'SEND_DISCONNECT_TO_CHARGING_STATION_COMMAND' as const;
export const sendDisconnectToChargingStationCommand = (data: { amrId: string; locationId: string }) => ({
  type: SEND_DISCONNECT_TO_CHARGING_STATION_COMMAND,
  amrId: data.amrId,
  locationId: data.locationId,
});

export const SEND_LOAD_PALLET_COMMAND = 'SEND_LOAD_PALLET_COMMAND' as const;
export const sendLoadPalletCommand = (data: { amrId: string; direction: Direction }) => ({
  type: SEND_LOAD_PALLET_COMMAND,
  amrId: data.amrId,
  direction: data.direction,
});

export const COMPLETE_PALLET_LOADED = 'COMPLETE_PALLET_LOADED' as const;
export const completePalletLoaded = (data: { amrId: string }) => ({
  type: COMPLETE_PALLET_LOADED,
  amrId: data.amrId,
});

export const SEND_OFFLOAD_PALLET_COMMAND = 'SEND_OFFLOAD_PALLET_COMMAND' as const;
export const sendOffloadPalletCommand = (data: { amrId: string; direction: Direction }) => ({
  type: SEND_OFFLOAD_PALLET_COMMAND,
  amrId: data.amrId,
  direction: data.direction,
});

export const START_SPRINKLING = 'START_SPRINKLING' as const;
export const startSprinkling = (data: { amrId: string }) => ({
  type: START_SPRINKLING,
  amrId: data.amrId,
});

export const END_SPRINKLING = 'END_SPRINKLING' as const;
export const endSprinkling = (data: { amrId: string }) => ({
  type: END_SPRINKLING,
  amrId: data.amrId,
});

export const COMPLETE_PALLET_OFFLOADED = 'COMPLETE_PALLET_OFFLOADED' as const;
export const completePalletOffloaded = (data: { amrId: string }) => ({
  type: COMPLETE_PALLET_OFFLOADED,
  amrId: data.amrId,
});

export const VEHICLE_MOVED_TO = 'VEHICLE_MOVED_TO' as const;

export const vehicleMovedTo = (data: { amrId: string; locationId: string }) => ({
  type: VEHICLE_MOVED_TO,
  amrId: data.amrId,
  locationId: data.locationId,
});

export const UPDATE_POSE = 'UPDATE_POSE' as const;
export const updatePose = (data: { amrId: string; x: number; y: number; yaw: number }) => ({
  type: UPDATE_POSE,
  amrId: data.amrId,
  x: data.x,
  y: data.y,
  yaw: data.yaw,
});

export const UPDATE_BATTERY = 'UPDATE_BATTERY' as const;
export const updateBattery = (data: { amrId: string; percentage: number }) => ({
  type: UPDATE_BATTERY,
  amrId: data.amrId,
  percentage: data.percentage,
});

export const UPDATE_ERROR = 'UPDATE_ERROR' as const;
export const updateError = (data: { amrId: string; rosError: string; extraInfo?: string }) => ({
  type: UPDATE_ERROR,
  ...data,
});

export const UPDATE_STATUS = 'UPDATE_STATUS' as const;
export const updateStatus = (data: { amrId: string; rosStatus: string }) => ({
  type: UPDATE_STATUS,
  amrId: data.amrId,
  rosStatus: data.rosStatus,
});

export const UPDATE_MACHINE_STATUS = 'UPDATE_MACHINE_STATUS' as const;
export const updateMachineStatus = (data: { amrId: string; rosStatus: string }) => ({
  type: UPDATE_MACHINE_STATUS,
  ...data,
});

export const UPDATE_IO_STATUS = 'UPDATE_IO_STATUS' as const;
export const updateIOStatus = (data: { amrId: string; ioStatus: IOStatus }) => ({
  type: UPDATE_IO_STATUS,
  ...data,
});

export const UPDATE_CARRIER_ID = `UPDATE_CARRIER_ID` as const;
export const updateCarrierId = (data: { amrId: string; carrierId: string }) => ({
  type: UPDATE_CARRIER_ID,
  ...data,
});

export const REMOVE_CARRIER_ID = 'REMOVE_CARRIER_ID' as const;
export const removeCarrierId = (data: { amrId: string; carrierId?: string }) => ({
  type: REMOVE_CARRIER_ID,
  ...data,
});

export const SPRINKLE_DONE = 'SPRINKLE_DONE' as const;
export const sprinkleDone = (data: { amrId: string; status: Number }) => ({
  type: SPRINKLE_DONE,
  amrId: data.amrId,
  status: data.status,
});

export const REACH_LOCATION = 'REACH_LOCATION' as const;
export const reachLocation = (data: { amrId: string; x: number; y: number; yaw: number }) => ({
  type: REACH_LOCATION,
  ...data,
});

export const REACH_CURVED_GOAL = 'REACH_CURVED_GOAL' as const;
export const reachCurvedGoal = (data: { amrId: string; goalPose: SimplePose; robotPose: SimplePose }) => ({
  type: REACH_CURVED_GOAL,
  ...data,
});

export const UPDATE_FLEET_INFO = 'UPDATE_FLEET_INFO' as const;
export const updateFleetInfo = (data: { amrId: string; fleetInfo: FleetInfo }) => ({
  type: UPDATE_FLEET_INFO,
  amrId: data.amrId,
  fleetInfo: data.fleetInfo,
});

export const AMR_CONNECTED = 'AMR_CONNECTED' as const;
export const amrConnected = (data: { amrId: string; ip: string }) => ({
  type: AMR_CONNECTED,
  amrId: data.amrId,
  ip: data.ip,
});

export const AMR_DISCONNECTED = 'AMR_DISCONNECTED' as const;
export const amrDisconnected = (data: { amrId: string }) => ({
  type: AMR_DISCONNECTED,
  amrId: data.amrId,
});

export const UPDATE_MISSION_EXECUTION = `UPDATE_MISSION_EXECUTION` as const;
export const updateMissionExecution = (command: ExecutionStatus, cancel: boolean) => ({
  type: UPDATE_MISSION_EXECUTION,
  command,
  cancel,
});

export const REBOOK = `REBOOK` as const;
export const rebook = (data: { amrId: string }) => ({
  type: REBOOK,
  amrId: data.amrId,
});

export const AGVC_CONNECTION = `AGVC_CONNECTION` as const;
export const agvcConnection = (data: { isConnected: boolean }) => ({
  type: AGVC_CONNECTION,
  isConnected: data.isConnected,
});

export const ADD_AMR_TO_TRAFFIC_NETWORK = `ADD_AMR_TO_TRAFFIC_NETWORK` as const;
export const addAmrToTrafficNetwork = (data: { amrId: string }) => ({
  type: ADD_AMR_TO_TRAFFIC_NETWORK,
  amrId: data.amrId,
});

export const SHOW_CLAIMED_RESOURCES = `SHOW_CLAIMED_RESOURCES` as const;
export const showClaimedResources = (data: {
  locations: { locationId: string; amrId: string }[];
  roads: { roadId: string; amrId: string }[];
}) => ({
  type: SHOW_CLAIMED_RESOURCES,
  locations: data.locations,
  roads: data.roads,
});

export const SHOW_AUDITING_TICKETS = `SHOW_AUDITING_TICKETS` as const;
export const showAuditingTickets = (data: {
  tickets: { amrId: string; tickets: { resourceIds: string[]; forbiddenReason: string }[] }[];
}) => ({
  type: SHOW_AUDITING_TICKETS,
  tickets: data.tickets,
});
export const RESCHEDULE_PLAN = 'RESCHEDULE_PLAN' as const;
export const reschedulePlan = (data: { amrId: string; text: string }) => ({
  type: RESCHEDULE_PLAN,
  amrId: data.amrId,
  text: data.text,
});

export const UPDATE_MISSION_TASK_STATUS = 'UPDATE_MISSION_TASK_STATUS' as const;
export const updateMissionTaskStatus = (data: { missionId: string; taskIdx: number }) => ({
  type: UPDATE_MISSION_TASK_STATUS,
  missionId: data.missionId,
  taskIdx: data.taskIdx,
});

export const UPDATE_OP_COMMANDS = `UPDATE_OP_COMMANDS` as const;
export const updateOpCommands = (data: { amrId: string; commands: OperatingCommand[] }) => ({
  type: UPDATE_OP_COMMANDS,
  amrId: data.amrId,
  commands: data.commands,
});

export const UPDATE_CARGO_STATUS = 'UPDATE_CARGO_STATUS' as const;
export const updateCargoStatus = (data: { amrId: string; hasCargo: boolean }) => ({
  type: UPDATE_CARGO_STATUS,
  ...data,
});

export type GeneralAction = ReturnType<
  | typeof startTrafficNavigation
  | typeof completeTrafficNavigation
  | typeof sendMoveToPointCommand
  | typeof sendMoveToPointPreciselyCommand
  | typeof sendRotateCommand
  | typeof sendConnectToChargingStationCommand
  | typeof sendDisconnectToChargingStationCommand
  | typeof sendLoadPalletCommand
  | typeof completePalletLoaded
  | typeof sendOffloadPalletCommand
  | typeof sendSetPoseCommand
  | typeof sendTextCommand
  | typeof startChargingPositioning
  | typeof completePalletOffloaded
  | typeof sprinkleDone
  | typeof updatePose
  | typeof vehicleMovedTo
  | typeof updateBattery
  | typeof updateFleetInfo
  | typeof updateMissionExecution
  | typeof updateError
  | typeof updateStatus
  | typeof updateMachineStatus
  | typeof updateIOStatus
  | typeof updateCarrierId
  | typeof removeCarrierId
  | typeof updateOpCommands
  | typeof reachLocation
  | typeof reachCurvedGoal
  | typeof amrConnected
  | typeof amrDisconnected
  | typeof agvcConnection
  | typeof addAmrToTrafficNetwork
  | typeof showClaimedResources
  | typeof showAuditingTickets
  | typeof reschedulePlan
  | typeof updateMissionTaskStatus
  | typeof startSprinkling
  | typeof endSprinkling
  | typeof rebook
  | typeof updateCargoStatus
>;
