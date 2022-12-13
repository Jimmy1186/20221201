import assert from "assert";
import { filter, firstValueFrom, map, Subject, take } from "rxjs";
import { Action, ofRes, ReqAction, ResAction } from "../action/main";
import { ofType } from "../helper";


export type DispatchFunction = (a: Action) => void;
export type SendFunction = <TReq extends ReqAction, TRes extends ResAction>(
    reqAction: TReq,
  ) => Promise<
    TRes extends {
      type: TReq['type'];
    }
      ? TRes
      : never
  >;

  export function createQueue() {
    const main$ = new Subject<Action>();
  
    function getAction(types: Action['type'][]) {
      return main$.pipe(ofType(types));
    }
  

  
    function getDispatcher(types: Action['type'][] | '*'): DispatchFunction {
      return (action) => {
        assert(
          types === '*' || types.includes(action.type),
          `Should add action type arguments in main.ts > getDispatcher() ${JSON.stringify(
            action,
          )}`,
        );
        setImmediate(() => main$.next(action));
      };
    }
  
    function getSender(types: ReqAction['type'][]): SendFunction {
      function send<TReq extends ReqAction, TRes extends ResAction>(
        reqAction: TReq,
      ) {
        const p = firstValueFrom(
          main$.pipe(
            ofRes(reqAction.type),
            filter((a) => 'reqId' in a && a.reqId === reqAction.reqId),
            map(
              (a) =>
                a as unknown as TRes extends { type: TReq['type'] }
                  ? TRes
                  : never, // TODO: remove type casting
            ),
            take(1),
          ),
        );
        setImmediate(() => main$.next(reqAction));
        return p;
      }
      return (reqAction) => {
        assert(
          types.includes(reqAction.type),
          `${reqAction.type} is not in the sender list`,
        );
        return send(reqAction);
      };
    }
  
    return {
      getAction,
      getDispatcher,
      getSender,
    };
  }