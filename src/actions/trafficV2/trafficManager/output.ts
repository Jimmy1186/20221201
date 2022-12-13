import { TargetMovement } from '~/types/traffic';

const PREFIX = `TM_OUT`;

export const COMPLETE_TRAFFIC_PLAN = `${PREFIX}/COMPLETE_TRAFFIC_PLAN` as const;
export const completeTrafficPlan = (amrId: string, locationId: string) => ({
  type: COMPLETE_TRAFFIC_PLAN,
  amrId,
  locationId,
});

export const GIVE_TARGET_MOVEMENT = `${PREFIX}/GIVE_TARGET_MOVEMENT` as const;
export const giveTargetMovement = (amrId: string, targetMovement: TargetMovement) => ({
  type: GIVE_TARGET_MOVEMENT,
  amrId,
  targetMovement,
});

export const SHOW_CLAIMED_RESOURCES = `${PREFIX}/SHOW_CLAIMED_RESOURCES` as const;
export const showClaimedResources = (
  locations: { locationId: string; amrId: string }[],
  roads: { roadId: string; amrId: string }[],
) => ({
  type: SHOW_CLAIMED_RESOURCES,
  locations,
  roads,
});

export const SHOW_AUDITING_TICKETS = `${PREFIX}/SHOW_AUDITING_TICKETS` as const;
export const showAuditingTickets = (
  tickets: {
    amrId: string;
    tickets: { resourceIds: string[]; forbiddenReason: string }[];
  }[],
) => ({
  type: SHOW_AUDITING_TICKETS,
  tickets,
});

type AllOutput = ReturnType<
  | typeof completeTrafficPlan
  | typeof giveTargetMovement
  | typeof showClaimedResources
  | typeof showAuditingTickets
>;

export type Output<
  T extends AllOutput['type'] = AllOutput['type'],
  A extends AllOutput = AllOutput,
> = A extends { type: T } ? A : never;
