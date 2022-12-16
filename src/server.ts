import * as assert from "assert";
import * as express from "express";
import { Request, Response, NextFunction } from "express";
import * as http from "http";
import path from "path";
import { ofA, ofAmr, room, tableC } from "./class";

export default class WebServer {
  private testMap: Map<string, number>;
  private tables = new tableC(12, 23);
  private newRoom = new room(this.tables);
  public readonly server: http.Server | undefined;
  constructor() {
    const app = express();


    app.get("/", (req, res) => {
      res.sendFile(path.join(__dirname, "/index.html"));
    });
    this.server = http.createServer(app).listen(3000);

 



    // this.tables.addItem("expensive", "158");
    // this.tables.addItem("expensive", "968");
    // this.tables.addItem("cheap", "84");

    // this.testMap = new Map()
    // this.testMap.set("fa",20)
    // this.testMap.set("as",56)
    // this.testMap.set("ic",3)
    // this.testMap.set("rs",2)
    // const intr = this.testMap.entries()
    this.server.on("listening", () => {
      this.newRoom.register(100);
    });
  }
}

const server = new WebServer();

server;
