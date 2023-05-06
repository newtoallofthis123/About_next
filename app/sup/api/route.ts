import { connectToDatabase, Database } from '@utils/db';
import { dateUTC, ranHash } from '@utils/utils';

type Sup = {
    title: string;
    author: string;
    content: string;
    date: string;
    hash: string;
    theme: string;
}

export async function POST(request: Request)
 {
    const { db }: { db: Database } = await connectToDatabase();
    const { title, author, content, date, hash, theme }: Sup = await request.json();
    const sup = await db.collection('sup').insertOne({
        title: title,
        author: author,
        content: content,
        date: date,
        hash: hash,
        theme: theme
    });
    return new Response(JSON.stringify(sup))
}

export async function GET(request: Request) {
    const { db }: { db: Database } = await connectToDatabase();
    const sup = await db.collection('sup').find({}).toArray();
    return new Response(JSON.stringify(sup))
}