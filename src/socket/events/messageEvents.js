module.exports = (io, socket) => {
  // Handle 'message' event
  socket.on("new-message", (msg) => {
    console.log(`Message received: ${msg.to} ${msg.message}`);
    socket.to(msg.to).emit("message", {
      type: "server",
      to: msg.to,
      from: socket.id,
      message: msg.message,
    });
  });
};
