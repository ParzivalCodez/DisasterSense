const database = require("../database/database.js");
const randomstring = require("randomstring");

class RelativeModel {
  async create(relativeGroupName) {
    let object = {
      relativeGroupName: relativeGroupName,
      relativeGroupDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      relativeGroupMembers: [],
      relativeGroupIdentity: {
        relativeGroupCode: randomstring.generate(5),
      },
    };

    try {
      await database.manage("insert", "relatives", object);
      console.log("Successfully Created Relative Group!");
    } catch (err) {
      console.log(err);
    }
  }

  async join(relativeGroupCode, userId) {
    try {
      // Update users active members
      await database.manage(
        "update",
        "users",
        { "accountIdentity.uuid": userId }, // Correct position for the filter
        {
          $push: {
            relativeGroup: { $each: [relativeGroupCode] },
          },
        },
      );

      // Update Relative Members Array
      await database.manage(
        "update",
        "relatives",
        { "relativeGroupIdentity.relativeGroupCode": relativeGroupCode }, // Correct position for the filter
        {
          $push: {
            relativeGroupMembers: { $each: [userId] },
          },
        },
      );
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = RelativeModel;
