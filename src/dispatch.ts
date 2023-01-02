import { Subject, of } from "rxjs";

export const START_TRAFFIC_NAVIGATION = 'START_TRAFFIC_NAVIGATION' as const;
export const startTrafficNavigation = (data: {
  amrId: string;
  destId: string;
}) => ({
  type: START_TRAFFIC_NAVIGATION,
  ...data,
});


 type GeneralAction = ReturnType<
 | typeof startTrafficNavigation
>;



type AllAction =
| GeneralAction;

export type Action<
T extends AllAction['type'] = AllAction['type'],
A extends AllAction = AllAction,
> = A extends {
type: T;
}
? A
: never;














type DispatchFunction = (a: Action) => void;




export class initial_service {
    
    
    constructor(dispatch:DispatchFunction){
  
        dispatch(
            startTrafficNavigation({amrId:"2",destId:"a"})
            )

    }

    get disv(){
return startTrafficNavigation
    }
}