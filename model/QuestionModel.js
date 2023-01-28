const mongoose = require("mongoose");

const QSchema = new mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
});

const QModel = mongoose.model("question", QSchema);

module.exports = { QModel };
