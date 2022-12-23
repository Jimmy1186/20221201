import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as http from "http";
import * as chalk from "chalk";
import path from "path";
import { interpret } from "xstate";

import { defer, filter, interval, map, never, Observable, of, OperatorFunction } from "rxjs";
import { action } from "typesafe-actions";
import { testClass } from "./test";
import { amrMachine, executor, senserMachine } from "./machines";

const service = interpret(senserMachine)
      


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
    this.server = http.createServer(app).listen(7000);
    this.server.on("listening", () => {

    
     service.start()

     service.send("isFound")
      console.log(chalk.blue(service))
    console.log(chalk.red("server running at port 4600"))
    })

    
  }

  oneGraph(){
    this.graph = {"sd":{"aj":2}}
  }



}

const server = new WebServer("sda");

server;
