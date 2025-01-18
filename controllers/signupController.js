const User = require("../models/user");

async function signupController(req, res) {
  // extract values
  const { name, email, password } = req.body;

  // insert to db
  try {
    const newUser = await User.create({
      name: name,
      email: email,
      password: password,
    });
    console.log("User created successfully");
    res
      .status(201)
      .json({ status: "true", mesaage: "User created successfully" });
  } catch (error) {
    console.log("ERROR CREATING USER");

    // duplicate email
    if (error.code === 11000) {
      console.log("Duplicate Email");
      return res
        .status(400)
        .json({ status: "false", message: "Email id already exist" });
    }

    // Password Validation failed
    if ((error.name = "ValidationError")) {
      return res.status(400).json({
        status: "false",
        message: error.message,
      });
    }
  }
}

module.exports = signupController;
