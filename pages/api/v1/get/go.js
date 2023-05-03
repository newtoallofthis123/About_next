import { connectToDatabase } from "@/utils/db";
import { hypens } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const slug = req.body.id;
        const data = await db.collection("go").find({ slug: slug }).toArray();
        res.json(data[0]);
    }
    res.json({ error: "Invalid request" })
}