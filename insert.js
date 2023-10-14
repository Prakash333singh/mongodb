const { dbconnection } = require("./db");

async function main() {
  try {
    const db = await dbconnection();
    const collection = db.collection("Users");

    const data = [
      { name: "prakash", age: 20 },
      { name: "adhikari", age: 21 },
    ];

    const insertResult = await collection.insertMany(data);
    console.log(insertResult);
  } catch (error) {
    console.log("Error is comming while performing a task", error);
  }
}

main();
