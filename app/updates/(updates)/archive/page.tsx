import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { Document } from 'mongodb';
import Link from 'next/link';

type Props = {};

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
    return (
        <div>
            <h1>Archive of All of My Updates</h1>
            <h3>
                <Link href="/updates">Back</Link>
            </h3>
            {updates.map((update: Update) => (
                <div key={update._id}>
                    <Link href={`/updates/${update.hash}`}>
                        {' '}
                        {update.name}{' '}
                    </Link>
                </div>
            ))}
        </div>
    );
}

export const metadata = {
    title: 'Updates Archive | NoobScience',
}