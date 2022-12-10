import { Socket } from "socket.io";

const { Server } = require("socket.io");
const io = new Server(Server);

export default class WsServer {
  constructor() {
    io.on("connection", (socket:Socket) => {
      console.log("a user connected");
    });
  }
}

io.on("connection", (socket:Socket) => {
  console.log("a user connected");
});
