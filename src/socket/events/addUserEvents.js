users = require("../../users");

module.exports = (io, socket) => {
  socket.on("add-user", (username) => {
    console.log("users array before adding: ", users);
    users.push({ id: socket.id, username: username });
    io.emit("active-users", users);
  });
};
