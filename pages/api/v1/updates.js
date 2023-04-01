import { connectToDatabase } from "@/utils/db";
import { hypens, dateUTC } from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { name, content, author = "Ishan", date = dateUTC() } = req.body;
        console.log(name, content, author, date);
        const data = await db.collection("page").insertOne({ name: name, content: content, author: author, hash: hypens(name), date: date });
        res.json(data);
    }
    const { db } = await connectToDatabase();
    const data = await db.collection("page").find({}).toArray();
    res.json(data);
}