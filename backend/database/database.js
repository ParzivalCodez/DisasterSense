// Dependencies & Packages Import
const { MongoClient } = require("mongodb");
const connectionString = "mongodb://localhost:27017/DisasterSense";
let database;

const DatabaseConnection = () => {
  MongoClient.connect(connectionString)
    .then((client) => {
      database = client.db();
    })
    .then((res) => {})
    .catch((err) => console.log(err));
};

const getDatabase = () => {
  if (database) {
    return database;
  }
};

class Database {
  constructor(collection, data, updateData) {
    this.collection = collection;
    this.data = data;
    this.updateData = updateData;
  }

  Insert() {
    database
      .collection(this.collection)
      .insertOne(this.data)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

  Update() {
    database
      .collection(this.collection)
      .updateOne(this.data, this.updateData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  async Delete() {
    console.log(database);
  }

  async Find() {
    try {
      const res = await database
        .collection(this.collection)
        .find(this.data)
        .toArray();
      return res;
    } catch (err) {
      console.error(err);
      throw err; // Propagate the error to be handled by the caller
    }
  }
}

async function databaseManager(query, collection, data, updateData) {
  const databaseInstance = new Database(collection, data, updateData);

  switch (query) {
    case "insert":
      databaseInstance.Insert();
      break;
    case "find":
      return databaseInstance.Find();
      break;
    case "update":
      return databaseInstance.Update();
      break;
    case "delete":
      await databaseInstance.Delete();
      break;
  }
}

module.exports = {
  connect: DatabaseConnection,
  manage: databaseManager,
};
