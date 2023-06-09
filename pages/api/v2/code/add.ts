import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { hypens } from '@utils/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { title, content, hash, lang, author } = req.body;
        const data = await db
            .collection('code')
            .insertOne({
                title: title,
                content: content,
                lang: lang,
                author: author,
                hash: hash
            });
        res.json(data);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection('code').find({}).toArray();
    res.json(data);
}
