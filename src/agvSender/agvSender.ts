import {
  filter,
  map,
  Observable,
  of,
  OperatorFunction,
  range,
  Subject,
} from "rxjs";
import { isOfType } from "typesafe-actions";
import { ofType } from "../helper";
import { Action, END_MISSION, START_MISSION } from "~/actions"

type Queue = Observable<Action>;

export function createArray<A extends number, T extends { re: string }>(
  length: A,
  value: T | T[]
): Array<T | T[]> {
  let result = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}



export class AgvSender {
  constructor(action$: Queue) {
    action$.pipe(ofType(START_MISSION)).subscribe((V) => {
      console.log(V.type);
    });

    action$.pipe(ofType(END_MISSION)).subscribe((V) => {
      console.log(V);
    });
  }
}
