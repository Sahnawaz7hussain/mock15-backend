const mongoose = require("mongoose");
require("dotenv").config();

const url = process.env.MONGO_URL;
console.log(url, "MONGO");
mongoose.set("strictQuery", true);
const connection = mongoose.connect(url);

module.exports = { connection };
