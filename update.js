const { dbconnection } = require("./db");

async function main() {
  try {
    const db = await dbconnection();
    const collection = db.collection("Users");

    const updateResult = await collection.updateMany(
      { name: "prakash" },
      { $set: { age: 22 } }
    );
    console.log(updateResult.modifiedCount);
  } catch (error) {
    console.log("error is comming", error);
  }
}
main();
