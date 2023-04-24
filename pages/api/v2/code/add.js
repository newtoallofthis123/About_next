import { connectToDatabase } from "@/utils/db";
import {hypens, ranHash} from "@/utils/utils";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { db } = await connectToDatabase();
        const { title, content, lang, hash } = req.body;
        const data = await db.collection("code").insertOne({ title: title, content: content, lang: lang, hash: hash });
        res.json(data);
    }
    const { db } = await connectToDatabase();
    const data = await db.collection("code").find({}).toArray();
    res.json(data);
}