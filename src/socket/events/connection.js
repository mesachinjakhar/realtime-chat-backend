module.exports.registerEventHandlers = (io, socket) => {
  console.log("Handling connection for:", socket.id);

  // Handle 'set-user' event
  socket.on("set-user", (username) => {
    console.log(`User set: ${username}`);
    socket.emit("user-set-success", { username });
  });

  // Handle 'message' event
  socket.on("message", (msg) => {
    console.log(`Message received: ${msg}`);
    io.emit("new-message", msg); // Broadcast to all clients
  });
};
