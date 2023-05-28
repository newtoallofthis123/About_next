import { connectToDatabase, Database } from '@utils/db';
import { dateUTC, hypens } from '@utils/utils';

type Update = {
    name: string;
    author: string;
    content: string;
}

export async function POST(request: Request)
 {
    const { db }: { db: Database } = await connectToDatabase();
    const { name, author, content, }: Update = await request.json();
    const update = await db.collection('update').insertOne({
        name: name,
        author: author,
        content: content,
        date: dateUTC(),
        hash: hypens(name),
    });
    return new Response(JSON.stringify(update))
}

export async function GET(request: Request) {
    const { db }: { db: Database } = await connectToDatabase();
    const updates = await db.collection('page').find({}).toArray();
    return new Response(JSON.stringify(updates))
}