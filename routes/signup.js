const express = require("express");
const signupController = require("../controllers/signupController");

const signupRouter = express.Router();

signupRouter.post("/", signupController);

module.exports = signupRouter;
