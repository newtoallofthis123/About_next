import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const { name, content, hash, time, date } = req.body;
    const data = await db.collection("journal").insertOne({ name: name, content: content, hash: hash, time: time, date: date });
    res.json(data);
  }
  const { db } = await connectToDatabase();
  const data = await db.collection("journal").find({}).toArray();
  res.json(data);
}