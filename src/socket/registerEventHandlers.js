const messageEvents = require("./events/messageEvents");
const addUserEvents = require("./events/addUserEvents");

module.exports.registerEventHandlers = (io, socket) => {
  console.log("Handling connection for:", socket.id);

  // Handle message event
  messageEvents(io, socket);

  // Handle adding new user
  addUserEvents(io, socket);
};
