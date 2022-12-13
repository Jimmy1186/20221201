import { ReqAction, ResAction } from './request';
import { GeneralAction } from './general';
import { ReportAction } from './report';
import { StationAction } from './station';
import { MissionAction } from './mission';
import { DebugAction } from './debug';

export * from './request';
export * from './general';
export * from './report';
export * from './station';
export * from './mission';
export * from './debug';

type AllAction =
  | GeneralAction
  | ReportAction
  | StationAction
  | MissionAction
  | DebugAction
  | ReqAction
  | ResAction;

export type Action<
  T extends AllAction['type'] = AllAction['type'],
  A extends AllAction = AllAction,
> = A extends {
  type: T;
}
  ? A
  : never;
