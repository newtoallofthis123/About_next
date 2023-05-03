import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { url, slug } = req.body;
        const data = await db.collection('go').insertOne({ url, slug });
        res.json(data);
    } else {
        const { db }: { db: Database } = await connectToDatabase();
        const data = await db.collection('go').find({}).toArray();
        res.json(data);
    }
}
