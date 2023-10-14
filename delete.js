const { dbconnection } = require("./db");

async function main() {
  try {
    const db = await dbconnection();
    const collection = db.collection("Users");
    const filter = { name: "prakash" };
    const deletedResulted = await collection.deleteMany(filter);
    console.log(deletedResulted.deletedCount);
  } catch (error) {
    console.log("Error performing the task", error);
  }
}

main();
