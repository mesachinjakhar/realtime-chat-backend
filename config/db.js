const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Connected to database");
  } catch (error) {
    console.log("DB CONNECTION ERROR:", error);
    process.exit(1);
  }
};

module.exports = connectDb;
