// Dependencies & Packages Import
const express = require("express");
const {
  createRelativeController,
  joinRelativeController,
  relativesLocationController,
} = require("../../controller/RelativeController");
const database = require("../../database/database.js");

const Router = express.Router();

Router.post("/api/relatives/create-group", async (req, res, next) => {
  let requestBody = req.body;
  await createRelativeController(requestBody.relativeGroupName);
});

Router.post("/api/relatives/join-group", async (req, res, next) => {
  let requestBody = req.body;
  await joinRelativeController(
    requestBody.relativeGroupCode,
    requestBody.userId,
  );
});

Router.post("/api/relatives/location/get-all", async (req, res, next) => {
  let requestBody = req.body;
  let response = await relativesLocationController(requestBody);
  res.send(response);
});

module.exports = Router;
