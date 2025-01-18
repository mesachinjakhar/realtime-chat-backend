function loginController(req, res) {
  res.send({ status: "true", message: "User logged in successfully" });
}

module.exports = loginController;
