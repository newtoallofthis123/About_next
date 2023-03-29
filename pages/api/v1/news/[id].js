import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
    const { id } = req.query
    const { db } = await connectToDatabase();
    const data = await db.collection("news").find({hash: id}).toArray();
    res.json(data);
}
