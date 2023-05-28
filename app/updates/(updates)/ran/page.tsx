import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';
import { Document } from 'mongodb';
import Markdown from '@components/md';
import Link from 'next/link';

type Props = {};

async function getUpdate(): Promise<Document> {
    const { db }: { db: Database } = await connectToDatabase();
    const updates = await db.collection('page').find({}).toArray();
    return updates;
}

export default async function RandomHash({}: Props) {
    const updates = await getUpdate();
    const random_index = Math.floor(Math.random() * updates.length);
    const update = updates[random_index];
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
