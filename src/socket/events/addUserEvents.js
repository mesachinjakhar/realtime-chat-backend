const users = require("../../users");

module.exports = (io, socket) => {
  socket.on("add-user", (newUser) => {
    users = users.push(newUser);
    io.emit("active-users", users);
  });
};
