import { connectToDatabase, Database } from "utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void>
{
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const slug = req.body.slug;
        const data = await db.collection("notes").find({ category: slug }).toArray();
        res.json(data[0]);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const {slug} = req.query;
    const data = await db.collection("notes").find({ category: slug }).toArray();
    res.json(data);
}