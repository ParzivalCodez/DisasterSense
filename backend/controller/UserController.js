const UserModel = require("../model/UserModel");

async function registerUserController(
  firstName,
  lastName,
  emailAddress,
  password,
) {
  const userModel = new UserModel();
  console.log(firstName);
  await userModel.register(firstName, lastName, emailAddress, password);
}

async function loginUserController(emailAddress, password) {
  const userModel = new UserModel();
  return await userModel.login(emailAddress, password);
}

module.exports = { registerUserController, loginUserController };
