import { Socket } from "socket.io";

const { Server } = require("socket.io");
const io = new Server(Server);
/* eslint-disable import/first */
import * as dotenv from 'dotenv';

dotenv.config({ override: true }); // get process.env first. See https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import { cleanEnv, str } from 'envalid';

cleanEnv(process.env, {
  NODE_CONFIG_ENV: str({
    choices: ['px_ruifang'],
    desc: 'used by node-config to select different configuration files. See https://github.com/node-config/node-config/wiki/Configuration-Files',
  }),
  API_KEY: str({
    desc: 'the API key from Google Cloud. See https://console.cloud.google.com/apis/credentials?pli=1&authuser=1&project=xnex-338917&supportedpurview=project',
  }),
});



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
