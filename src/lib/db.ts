import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) throw new Error("MONGODDB_URI can not be empty!");

let cache = global.mongoose;
if (!cache) {
  cache = global.mongoose = { conn: null };
}

const connectDb = async () => {
  if (cache.conn) {
    console.log("DATABASE CONNECTED FROM CACHE!");
    return cache.conn;
  }
  try {
    cache.conn = await mongoose.connect(MONGODB_URI);
    console.log("DATBASE CONNECTED!");
    return cache.conn;
  } catch (error) {
    console.log("Error", error);
  }
};

export { connectDb };
