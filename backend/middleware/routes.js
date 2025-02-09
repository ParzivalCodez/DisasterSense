// Dependencies & Packages Import
const express = require("express");
const Router = express.Router();
const userAccountMiddleware = require("./routes/userAccountMiddleware.js");
const relativeMiddleware = require("./routes/relativesMiddleware");
let database = require("../database/database.js");

Router.post("/create", (req, res, next) => {
  console.log(req.body);
  res.send("Welcome to Pulse Guard!");
});

Router.post("/api/user/health/update-heart", (req, res, next) => {
  console.log(req.body);
  res.send("Welcome to Pulse Guard!");
});

Router.post("/api/health/update-heartbeat", async (req, res, next) => {
  let requestBody = req.body;
  let requestedUser = await database.manage(
    "update",
    "users",
    { "accountIdentity.linkCode": requestBody.linkCode },
    {
      $set: {
        "healthInformation.HEART_RATE": requestBody.heart_rate,
      },
    },
  );
  console.log(requestBody);
});

Router.use(userAccountMiddleware);
Router.use(relativeMiddleware);

module.exports = Router;
