import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

export async function GetDB(data: string) {
  const db = client.db("data");
  const coll = db.collection("db");
  coll.insertOne({ data });

  client.close();
}
