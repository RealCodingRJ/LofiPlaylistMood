import { MongoClient } from "mongodb";

const client = new MongoClient("mongodb://localhost:27017");

function getNamedDB(name: string) {
  return name.toUpperCase();
}

export async function GetDB(data: string, name: string) {
  const db = client.db(getNamedDB(name));
  const coll = db.collection(getNamedDB(name));
  await coll.insertOne({ data });

  client.close();
}
