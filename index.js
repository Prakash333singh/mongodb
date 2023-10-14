const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
const dbName = "MyDatabase";

async function main() {
  await client.connect();
  console.log("connect ho gya");
  //for going to particular database
  const db = client.db(dbName);
  const collection = db.collection("Users");

  const findResult = await collection.find().toArray();
  console.log(findResult);
}
main();
