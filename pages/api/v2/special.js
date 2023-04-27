import { connectToDatabase } from "@/utils/db";

export default async function handler(req, res) {
    const { db } = await connectToDatabase();
    const data = await db.collection("specials").find({}).toArray();
    res.status(200).json(data);
}