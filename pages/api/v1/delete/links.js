import { connectToDatabase } from "@/utils/db";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { id } = req.body
        const del_id = new ObjectId(id)
        const data = await db.collection("links").deleteOne({ _id: del_id })
        console.log(data);
        if (data)
            res.json(data);
        else
            res.json({ error: "Error deleting page" })
    }
    res.json({ error: "Invalid request" })
}