export type TargetYawList = Readonly<'unchanged' | 'free' | number[]>;

export type TargetMovement =
  | {
      movementType: 'parkAtDestination';
      locationId: string;
      targetYawList: TargetYawList;
    }
  | {
      movementType: 'moveOntoLocation';
      locationId: string;
      targetYawList: TargetYawList;
    }
  | {
      movementType: 'moveToWaitingLine';
      roadId: string;
      reverse: boolean;
    };

type TargetMovementType = TargetMovement['movementType'];

export function isTargetMovementType<
  A extends TargetMovementType,
  B extends TargetMovement,
>(
  movementType: A,
  targetMovement: B,
): targetMovement is B extends { movementType: A } ? B : never;
export function isTargetMovementType<A extends TargetMovementType>(
  movementType: A,
): <B extends TargetMovement>(
  targetMovement: B,
) => targetMovement is B extends { movementType: A } ? B : never;

export function isTargetMovementType<
  A extends TargetMovementType,
  B extends TargetMovement,
>(movementType: A, targetMovement?: B) {
  if (arguments.length === 1) {
    return (t: B) => isTargetMovementType(movementType, t);
  }
  return targetMovement.movementType === movementType;
}

export type Resource =
  | { resourceType: 'road'; roadId: string }
  | { resourceType: 'location'; locationId: string };

export function isLocationResource<T extends Resource>(
  resource: T,
): resource is T extends { resourceType: 'location' } ? T : never {
  return resource.resourceType === 'location';
}

export function isRoadResource<T extends Resource>(
  resource: T,
): resource is T extends { resourceType: 'road' } ? T : never {
  return resource.resourceType === 'road';
}

export function isSameResource(rsc1: Resource, rsc2: Resource) {
  if (isLocationResource(rsc1) && isLocationResource(rsc2)) {
    return rsc1.locationId === rsc2.locationId;
  }
  if (isRoadResource(rsc1) && isRoadResource(rsc2)) {
    return rsc1.roadId === rsc2.roadId;
  }
  return false;
}
