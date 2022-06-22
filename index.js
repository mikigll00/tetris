const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
var valore;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/tetris", (req, res) => {
  res.sendFile(__dirname + "/tetrishtml.html");
});

io.on("connection", (socket) => {
  socket.on("valore asx", (a) => {
    io.emit("connected", a);
  });
});
io.on("connection", (socket) => {
  socket.on("valore adx", (b) => {
    io.emit("connected", b);
  });
});
io.on("connection", (socket) => {
  socket.on("valore b", (c) => {
    io.emit("connected", c);
  });
});
io.on("connection", (socket) => {
  socket.on("valore c", (d) => {
    valore = d;
    console.log(valore);
    io.emit("connected", d);
  });
});
io.on("connection", (socket) => {
  socket.on("valore dsx", (e) => {
    io.emit("connected", e);
  });
});
io.on("connection", (socket) => {
  socket.on("valore ddx", (f) => {
    io.emit("connected", f);
  });
});
io.on("connection", (socket) => {
  socket.on("punteggio", (g) => {
    io.emit("score", g);
  });
});


server.listen(3000, () => {
  console.log("listening on *:3000");
});
