const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/realtime-chat");
    console.log("Connected to database");
  } catch (error) {
    console.log("DB CONNECTION ERROR:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
