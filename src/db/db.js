const mongoose = require("mongoose");
require("dotenv").config();

const DB_NAME = process.env.DB_NAME;

async function dbConnect() {
  mongoose.connection.on("connected", () =>
    console.log("Connected: ", DB_NAME)
  );
  await mongoose.connect(`mongodb://localhost:27020/${DB_NAME}`);
}
module.exports = dbConnect;
