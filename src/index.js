const dotenv = require("dotenv");
dotenv.config({ path: ".env" });
const { app } = require("./app.js");

const { connectDB } = require("./db/index.js");

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server starts on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongoDb failed to connect !!!", err);
  });
