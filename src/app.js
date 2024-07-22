const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// middleware to pass json body
app.use(express.json({ limit: "20kb" }));

// middleware to pass url body
app.use(express.urlencoded({ extended, limit: "20kb" }));

// middleware to store pdfs and files in static public folder
app.use(express.static("public"));

// middleware to access and use cookie from user server
app.use(cookieParser);

module.exports = { app };
