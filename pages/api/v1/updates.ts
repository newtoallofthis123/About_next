import { connectToDatabase, Database } from "utils/db";
import { NextApiRequest, NextApiResponse } from "next";
import { hypens, dateUTC } from "@utils/utils";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void>
{
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { name, content, author = "Ishan", date = dateUTC() } = req.body;
        console.log(name, content, author, date);
        const data = await db.collection("page").insertOne({ name: name, content: content, author: author, hash: hypens(name), date: date });
        res.json(data);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection("page").find({}).toArray();
    res.json(data);
}