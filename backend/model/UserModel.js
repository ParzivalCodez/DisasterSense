const database = require("../database/database.js");
const randomstring = require("randomstring");
var uuid = require("uuid-random");

class UserModel {
  async register(
    firstName,
    lastName,
    emailAddress,
    password,
    latitude,
    longitude,
  ) {
    let object = {
      firstName: firstName,
      lastName: lastName,
      emailAddress: emailAddress,
      password: password,
      location: {
        latitude: latitude,
        longitude: longitude,
      },
      accountIdentity: {
        uuid: uuid().toUpperCase(),
        linkCode: randomstring.generate(5),
      },
      relativeGroup: [],
      healthInformation: {
        HEART_RATE: 175,
      },
    };

    try {
      await database.manage("insert", "users", object);
      console.log("Successfully Added User!");
    } catch (err) {
      console.log(err);
    }
  }

  async login(emailAddress, password) {
    let object = {
      emailAddress: emailAddress,
      password: password,
    };
    return await database.manage("find", "users", object);
  }
}

module.exports = UserModel;
