const dotenv = require("dotenv");
dotenv.config({ path: "./env" });

const mongoose = require("mongoose");
const { DB_NAME } = require("../constants.js");

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected successfully......!!!!!  at ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("monogDB connection error", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
