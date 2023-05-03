import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { hypens } from '@utils/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { title, content, category } = req.body;
        const data = await db
            .collection('notes')
            .insertOne({
                title: title,
                content: content,
                slug: hypens(title),
                category: category,
            });
        res.json(data);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection('notes').find({}).toArray();
    res.json(data);
}
