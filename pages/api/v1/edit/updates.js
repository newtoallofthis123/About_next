import { connectToDatabase } from "@/utils/db";
import { hypens, dateTime } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { name, content, hash } = req.body;
        await db.collection("page").deleteOne({ hash: hypens(name) })
        const data = await db.collection("page").insertOne({name, content, hash, date: dateTime()})
        res.json(data);
    }
    res.json({ error: "Invalid request" })
}