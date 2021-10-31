const http = require("http");
const express = require("express");

const socketio = require("socket.io");
const { isObject } = require("util");

app = express();
const server = http.createServer(app);

app.use(express.static("public"));
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Someone connected!");
  socket.on("onMsgFromClient", (msg) => io.emit("onMsgFromServer", msg));
});

server.listen(3000, () => console.log("server started"));
