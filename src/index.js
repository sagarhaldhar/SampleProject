const dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const { connectDB } = require("./db/index.js");

connectDB();
