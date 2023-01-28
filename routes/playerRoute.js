const express = require("express");
const { PModel } = require("../model/PlayerModel");

const playerRoute = express.Router();

playerRoute.post("/", async (req, res) => {
  try {
    let newPlayer = new PModel(req.body);
    await newPlayer.save();
    res.status(201).json(newPlayer);
  } catch (err) {
    res.send({ err: err.message, message: "server error" });
  }
});

playerRoute.get("/", async (req, res) => {
  try {
    let players = await PModel.find();
    res.status(200).json(players);
  } catch (err) {
    res.send({ err: err.message, message: "server error" });
  }
});

module.exports = { playerRoute };
