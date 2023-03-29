import { connectToDatabase } from "@/utils/db";
import { dateTime, dateHash } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { name, content, link } = req.body;
        const data = await db.collection("news").insertOne({ name: name, content: content, url: link, hash: dateHash(), date: dateTime() });
        res.json(data);
    }
    const { db } = await connectToDatabase();
    const data = await db.collection("news").find({}).toArray();
    res.json(data);
}