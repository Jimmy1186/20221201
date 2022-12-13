import { filter, range } from "rxjs";

export class testClass {
    constructor(value:number){
        range(1,value).pipe(
            filter(x=>x%3===0)
        ).subscribe(v=>{
            console.log(v)
        })
    }
}