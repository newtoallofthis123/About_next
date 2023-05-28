import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';
import { Document } from 'mongodb';
import Markdown from '@components/md';
import Link from 'next/link';

type Props = {
};

type Update = {
    _id: number;
    name: string;
    author: string;
    content: string;
    date: string;
    hash: string;
};

async function getUpdate(): Promise<Document> {
    const { db }: { db: Database } = await connectToDatabase();
    const updates = await db.collection('page').find({}).toArray();
    return updates;
}

export default async function LatestHash({}: Props) {
    const updates = await getUpdate();
    const update = updates[updates.length - 1];
    return (
        <div>
            <h1>{update.name}</h1>
            <p>{update.date}</p>
            <p>{update.author}</p>
            <Link href="/updates">Back</Link>
            <Markdown content={update.content} />
        </div>
    );
}
