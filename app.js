const express = require("express");
const { Server } = require("socket.io");

const app = express();

// middlewares
app.use(express.json());

const PORT = 3001;
let client = null;

// Start http server
const server = app.listen(PORT, () => {
  console.log("Server is running on port: ", PORT);
});

// Pass http server to socket.io
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("new connection");
  client = socket;
});

module.exports = client;
