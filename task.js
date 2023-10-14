const { dbconnection } = require("./db");

async function main() {
  try {
    const db = await dbconnection();
    const collection = db.collection("Users");

    const findResult = await collection.find().toArray();
    console.log(findResult);
  } catch (error) {
    console.log("Error performing the task", error);
  }
}

main();
