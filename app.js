const express = require("express");

const PORT = 3000;

const app = express();

// middlewares
app.use(express.json());

const startServer = async () => {
  app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
  });
};

startServer();
