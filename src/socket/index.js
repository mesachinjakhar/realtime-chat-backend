const { Server } = require("socket.io");
const { registerEventHandlers } = require("./registerEventHandlers");

const initializeSocket = (server) => {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
    },
  });

  // Listen for new client connections
  io.on("connection", (socket) => {
    console.log("New client connected:", socket.id);

    // Register event handlers for this socket
    registerEventHandlers(io, socket);

    // When a client disconnects
    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};

module.exports = { initializeSocket };
