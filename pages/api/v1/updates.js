import { connectToDatabase } from "@/utils/db";
import { hypens, dateTime } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { name, content, author } = req.body;
        const data = await db.collection("page").insertOne({ name: name, content: content, author: author, hash: hypens(name), date: dateTime() });
        res.json(data);
    }
    const { db } = await connectToDatabase();
    const data = await db.collection("page").find({}).toArray();
    res.json(data);
}