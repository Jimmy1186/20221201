import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as http from "http";
import * as chalk from "chalk";
import path from "path";
import { interpret } from "xstate";

import { defer, filter, interval, map, never, Observable, of, OperatorFunction, Subject } from "rxjs";
import { action } from "typesafe-actions";
import { testClass } from "./test";
import { amrMachine, executor, senserMachine } from "./machines";
import { Action, START_TRAFFIC_NAVIGATION, initial_service } from "./dispatch";

const service = interpret(senserMachine)
      

const main$ = new Subject<Action>();


function getDispatcher(types: Action['type'][] | '*'): dispatchFunction {
  return (action) => {
    setImmediate(() => main$.next(action));
  };
}









const ini = new initial_service(
  getDispatcher([START_TRAFFIC_NAVIGATION])
)


// function resumeUtile<T1,T2>(source2$:Observable<boolean>){
//   return (source1$:Observable<T1>)=>{
//     defer(
//   }
// }

type dispatchFunction = (a:any)=>void
const rendomNum =defer(()=>of(Math.random())) 


export default class WebServer {
  private graph:{
    [vertex:string]:{
      [vertex:string]:number
    }
  }
  private dispatch: dispatchFunction

  public testnull: Map<string,{mission:string}>

  public readonly server: http.Server | undefined;
  constructor(send: any) {
    const app = express();
    this.testnull = null
    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/index.html"));
      
    });

const idTypeOfObj=(obj:string)=>(req: Request, res: Response, next: NextFunction)=>{
  if(obj==="dt"){
    console.log("dt here")
    next()
    return
  }
  console.log("not dt")
  next()
  
}

    app.get('/test',idTypeOfObj("dt"),(req,res)=>{
      console.log("final")
    })
    this.server = http.createServer(app).listen(7000);
    this.server.on("listening", () => {

      
    
  
      console.log(
        chalk.blue(
          JSON.stringify(
             ini.disv({amrId:"s",destId:"s"})
          )
        )
      )

   
    })

    
  }

  oneGraph(){
    this.graph = {"sd":{"aj":2}}
  }



}

const server = new WebServer("sda");

server;
