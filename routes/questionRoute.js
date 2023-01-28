const express = require("express");
const { QModel } = require("../model/QuestionModel");

const questionRoute = express.Router();

questionRoute.post("/", async (req, res) => {
  let q = req.body;
  console.log("request", req.query);
  let Limit = q.limit || 10;
  let difficulty = q.difficulty || "hard";
  let category = q.category || "";
  let filter = {};
  difficulty && (filter.difficulty = difficulty);
  category && (filter.category = category);
  let data = await QModel.find(filter).limit(Limit);
  console.log(q, "queris");
  res.send({ data: data, player: q });
});

module.exports = questionRoute;
