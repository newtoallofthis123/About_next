import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';
import { Document } from 'mongodb';
import Markdown from '@components/md';
import Link from 'next/link';

type Props = {
    params: {
        hash: string;
    };
};

type Update = {
    _id: number;
    name: string;
    author: string;
    content: string;
    date: string;
    hash: string;
};

async function getUpdate(hash: string): Promise<Document> {
    const { db }: { db: Database } = await connectToDatabase();
    const updates = await db
        .collection('page')
        .find({
        })
        .toArray();

    const update = updates.filter((update) => update.hash === hash);
    if (!update[0]) return redirect('/404');
    return updates;
}


export default async function UpdatesHash({ params: { hash } }: Props) {
    const updates = await getUpdate(hash);
    const update = updates.filter((update: Update) => update.hash === hash)[0];
    const recommends = updates.filter(
        (recommend: Update) =>
            recommend.hash !== hash && recommend._id > update._id
    );
    return (
        <div>
            <h1>{update.name}</h1>
            <p>{update.date}</p>
            <p>{update.author}</p>
            <Link href="/updates">Back</Link>
            <Markdown content={update.content} />
            {recommends.length > 0 && <h2>Previous Updates</h2>}
            {
                recommends.map((recommend: Update) => (
                    <div key={recommend._id}>
                        <Link href={`/updates/${recommend.hash}`}> {recommend.name} </Link>
                    </div>
                ))
            }
        </div>
    );
}
