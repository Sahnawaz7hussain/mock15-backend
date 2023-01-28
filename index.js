const express = require("express");
const { connection } = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const questionRoute = require("./routes/questionRoute");
const { playerRoute } = require("./routes/playerRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("welcome to homepage");
});
app.use("/question", questionRoute);
app.use("/player", playerRoute);

app.listen(PORT, async () => {
  try {
    console.log("conneting...");
    await connection;
    console.log("conneted");
  } catch (err) {
    console.log({ err: err.message });
  }
  console.log(`listening on port ${PORT}`);
});
