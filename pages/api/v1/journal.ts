import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { name, content, hash, time, date } = req.body;
        const data = await db
            .collection('journal')
            .insertOne({
                name: name,
                content: content,
                hash: hash,
                time: time,
                date: date,
            });
        res.json(data);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection('journal').find({}).toArray();
    res.json(data);
}
