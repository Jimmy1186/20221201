import { string } from 'yup';
import {
  OperatingCommand,
  OpMoveCommand,
  OpParkCommand,
  OpRotateCommand,
  OpStayCommand,
} from '~/types/operatingCommand';
import { PlanningOptions } from '~/types/plan';

const PREFIX = 'OP_OUT';

export const LEFT_LOCATION = `${PREFIX}/LEFT_LOCATION` as const;
export const leftLocation = (locationId: string) => ({
  type: LEFT_LOCATION,
  locationId,
});

export const REACH_CLAIM_LINE = `${PREFIX}/REACH_CLAIM_LINE` as const;
export const reachClaimLine = (locationId: string) => ({
  type: REACH_CLAIM_LINE,
  locationId,
});

export const MOVE_TO_POINT_COMMAND = `${PREFIX}/MOVE_TO_POINT_COMMAND` as const;
export const moveToPointCommand = (cmd: OpMoveCommand | OpStayCommand) => ({
  ...cmd,
  type: MOVE_TO_POINT_COMMAND,
});

export const MOVE_TO_POINT_PRECISELY_COMMAND = `${PREFIX}/MOVE_TO_POINT_PRECISELY_COMMAND` as const;
export const moveToPointPreciselyCommand = (cmd: OpParkCommand) => ({
  ...cmd,
  type: MOVE_TO_POINT_PRECISELY_COMMAND,
});

export const ROTATE_COMMAND = `${PREFIX}/ROTATE_COMMAND` as const;
export const rotateCommand = (cmd: OpRotateCommand) => ({
  ...cmd,
  type: ROTATE_COMMAND,
});

export const REACH_THE_LOCATION = `${PREFIX}/REACH_THE_LOCATION` as const;
export const reachTheLocation = (locationId: string) => ({
  type: REACH_THE_LOCATION,
  locationId,
});

export const RESEND_COMMAND = `${PREFIX}/RESEND_COMMAND` as const;
export const resendCommand = () => ({
  type: RESEND_COMMAND,
});

export const REQUEST_REROUTE = `${PREFIX}/REQUEST_REROUTE` as const;
export const requestReroute = (options: PlanningOptions) => ({
  type: REQUEST_REROUTE,
  options,
});

export const LOOK_AHEAD = `${PREFIX}/LOOK_AHEAD` as const;
export const lookAhead = (data: { amrId: string; commands: OperatingCommand[] }) => ({
  type: LOOK_AHEAD,
  amrId: data.amrId,
  commands: data.commands,
});

type AllCreator =
  | typeof leftLocation
  | typeof reachClaimLine
  | typeof moveToPointCommand
  | typeof moveToPointPreciselyCommand
  | typeof rotateCommand
  | typeof reachTheLocation
  | typeof requestReroute
  | typeof resendCommand
  | typeof lookAhead;

type AllOutput = ReturnType<AllCreator>;

export type Output<
  T extends AllOutput['type'] | AllCreator = AllOutput['type'],
  A extends AllOutput = AllOutput,
> = A extends { type: T }
  ? A
  : A extends { type: ReturnType<T extends AllCreator ? T : never>['type'] }
  ? A
  : never;
