import { MongoClient } from 'mongodb';

export const connectDB = async () => {
  const conectionString = `mongodb+srv://azdinebouali2002:${process.env.MONGO_PASSWORD}@quick.fcuzmq8.mongodb.net/`;
  const client = await MongoClient.connect(conectionString);
  const db = client.db();
  return db;
};
