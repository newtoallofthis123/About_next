import { connectToDatabase } from "@/utils/db";
import { hypens } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const name = req.body.id;
        const data = await db.collection("page").find({ hash: name }).toArray();
        res.json(data[0]);
    }
    res.json({ error: "Invalid request" })
}