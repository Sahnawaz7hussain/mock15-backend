const mongoose = require("mongoose");

const pSchema = new mongoose.Schema({
  name: String,
  correctAnswers: Number,
  incorrectAnswer: Number,
  totalScore: Number,
  percentage: Number,
});

const PModel = mongoose.model("player", pSchema);

module.exports = { PModel };
