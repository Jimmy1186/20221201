export default undefined;
export enum MissionStatus {
  PENDING,
  ASSIGNED,
  EXECUTING,
  COMPLETED,
  ABORTING,
  // ABORTED,
  CANCELED,
}
export enum ExecutionStatus {
  PAUSE,
  AUTO,
  CLEARANCE,
}

export type MissionHistory = {
  eventName: string;
  timestamp: Date;
  data: unknown;
};
