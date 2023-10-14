const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "MyDatabase";

const dbconnection = async () => {
  try {
    await client.connect();
    console.log("connected");
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.log("failed to connect to the database", error);
    throw error;
  }
};
module.exports = { dbconnection };
