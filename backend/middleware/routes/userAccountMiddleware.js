// Dependencies & Packages Import
const express = require("express");
const {
  registerUserController,
  loginUserController,
} = require("../../controller/UserController");

const Router = express.Router();

Router.post("/api/user/create-account", async (req, res, next) => {
  let requestBody = req.body;
  await registerUserController(
    requestBody.firstName,
    requestBody.lastName,
    requestBody.emailAddress,
    requestBody.password,
  );
});

Router.post("/api/user/login-account", async (req, res, next) => {
  let requestBody = req.body;
  console.log(requestBody);
  let data = await loginUserController(
    requestBody.emailAddress,
    requestBody.password,
  );

  res.send(data[0]);
});

module.exports = Router;
