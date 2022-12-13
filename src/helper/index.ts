import { filter, OperatorFunction } from "rxjs";
import { isOfType } from "typesafe-actions";

export function ofType<T extends string, A extends { type: string }>(
    t: T | T[]
  ): OperatorFunction<A, A extends { type: T } ? A : never> {
    return (source$) => source$.pipe(filter(isOfType(t)));
  }