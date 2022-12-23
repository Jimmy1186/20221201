import { Observable, filter, map, range } from "rxjs";

export class testClass {
    constructor(action$:Observable<string>){
        
        action$.pipe(
            filter(j=>j.includes("UPDATE"))
        ).subscribe(v=>{
            console.log("1:action")
        })

        action$.pipe(
            filter(v=>v.includes("MISSION"))
        ).subscribe(v=>{
            console.log("2:action")
        })
    }
}