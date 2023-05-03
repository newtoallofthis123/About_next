import { connectToDatabase, Database } from 'utils/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { hypens, dateTime } from '@utils/utils';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
): Promise<void> {
    if (req.method === 'POST') {
        const { db }: { db: Database } = await connectToDatabase();
        const { name, content, link } = req.body;
        console.log(name, content, link);
        const data = await db
            .collection('links')
            .insertOne({
                name: name,
                content: content,
                url: link,
                hash: hypens(name),
                date: dateTime(),
            });
        res.json(data);
    }
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db.collection('links').find({}).toArray();
    res.json(data);
}
