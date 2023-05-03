import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { dateUTC } from '@utils/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method == 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { title, content, author } = req.body;
        const result = await db.collection('discuss').insertOne({
            title: title,
            content: content,
            author: author,
            date: dateUTC(),
        });
        res.json(result);
    } else {
        res.status(403).json({ message: 'Invalid Request Method' });
    }
}
