import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';

type Props = {
    params: {
        hash: string;
    };
};

async function getData(slug: string) {
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db
        .collection('go')
        .find({
            slug: slug,
        })
        .toArray();
    if (data.length === 0) return redirect('/404');
    return redirect(data[0].url);
}

export default async function I_Page({ params: { hash } }: Props) {
    const data = await getData(decodeURIComponent(hash));
    return (
        <>
            <h1>
                Redirecting...
            </h1>
        </>
    );
}
