import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const {db} = await connectToDatabase();
        const { url, slug } = req.body;
        const data = await db.collection("go").insertOne({ url, slug });
        res.json(data);
    }
    const { db } = await connectToDatabase();
    const data = await db.collection("go").find({}).toArray();
    res.json(data);
}