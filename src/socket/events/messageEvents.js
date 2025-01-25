module.exports = (io, socket) => {
  // Handle 'message' event
  socket.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit("new-message", msg); // Broadcast to all clients
  });
};
