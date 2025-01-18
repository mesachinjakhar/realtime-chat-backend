const express = require("express");
require("dotenv").config();
const connectDb = require("./config/db");
const loginRouter = require("./routes/login");
const signupRouter = require("./routes/signup");

const app = express();

// middlewares
app.use(express.json());

app.use("/login", loginRouter);
app.use("/signup", signupRouter);

const startServer = async () => {
  await connectDb();
  app.listen(process.env.PORT, () => {
    console.log("Server is running on port:", process.env.PORT);
  });
};

startServer();
