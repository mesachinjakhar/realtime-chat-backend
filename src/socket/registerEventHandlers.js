const messageEvents = require("./events/messageEvents");

module.exports.registerEventHandlers = (io, socket) => {
  console.log("Handling connection for:", socket.id);

  // Handle message event
  messageEvents(io, socket);
};
