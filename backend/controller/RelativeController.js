const RelativeModel = require("../model/RelativeModel.js");
const database = require("../database/database");

async function createRelativeController(relativeGroupName) {
  console.log(relativeGroupName);
  const RelativeGroup = new RelativeModel();
  await RelativeGroup.create(relativeGroupName);
}

async function joinRelativeController(relativeGroupCode, userId) {
  const RelativeGroup = new RelativeModel();
  return await RelativeGroup.join(relativeGroupCode, userId);
}

async function relativesLocationController(requestBody) {
  class relativeGroup {
    constructor() {
      this.members = [];
    }

    setInformation(relativeGroupName, relativeGroupDescription) {
      this.relativeGroupName = relativeGroupName;
      this.relativeGroupDescription = relativeGroupDescription;
    }

    setMembers(member) {
      this.members.push(member);
    }
  }

  const relativeInstance = new relativeGroup();

  //   Find the requested user
  let userResponse = await database.manage("find", "users", {
    "accountIdentity.uuid": requestBody.userId,
  });

  // Find the relative group the user is with
  let userAssociatedRelatives = await database.manage("find", "relatives", {
    "relativeGroupIdentity.relativeGroupCode": userResponse[0].relativeGroup[0],
  });

  relativeInstance.setInformation(
    userAssociatedRelatives[0].relativeGroupName,
    userAssociatedRelatives[0].relativeGroupDescription,
  );

  for (let memberId of userAssociatedRelatives[0].relativeGroupMembers) {
    let userAssociatedRelativesMembers = await database.manage(
      "find",
      "users",
      {
        "accountIdentity.uuid": memberId,
      },
    );

    userAssociatedRelativesMembers.forEach((user) => {
      let memberObject = {
        firstName: user.firstName,
        lastName: user.lastName,
        latitude: user.location.latitude,
        longitude: user.location.longitude,
      };
      relativeInstance.setMembers(memberObject);
    });
  }

  return relativeInstance;
}

module.exports = {
  createRelativeController,
  joinRelativeController,
  relativesLocationController,
};
