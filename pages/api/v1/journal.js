import { connectToDatabase } from "@/utils/db";
import { dateHash, getTime } from "@/utils/utils";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { db } = await connectToDatabase();
    const { name, content, hash, time, date } = req.body;
    if (!name || !content) {
      res.status(400).json({ message: "Missing name or content" });
      return;
    }
    const data = await db.collection("journal").insertOne({ name: name, content: content, hash: hash, time: time, date: date });
    res.json(data);
  }
  const { db } = await connectToDatabase();
  const data = await db.collection("journal").find({}).toArray();
  res.json(data);
}