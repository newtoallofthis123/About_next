import { connectToDatabase, Database } from "utils/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void>
{
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection("code").find({}).toArray();
    res.json(data);
}