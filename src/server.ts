import express from "express";
import { Request, Response, NextFunction } from "express";
import * as http from "http";
import * as chalk from "chalk";
import path from "path";
import { AgvSender } from "./agvSender/agvSender";
import { START_MISSION } from "./action/main";
import { createQueue } from "./queue";





const {getAction}= createQueue()



export default class WebServer {
  public readonly server: http.Server | undefined;
  constructor(send: any) {
    const app = express();

    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/index.html"));
    });
    this.server = http.createServer(app).listen(3000);
    this.server.on("listening", () => {
      void new AgvSender(
        getAction([START_MISSION])
      )
      // void new testClass(15);
    });
  }
}

const server = new WebServer("sda");

server;
