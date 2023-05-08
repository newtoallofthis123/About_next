import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';

type Props = {
    params: {
        query: string;
    };
};

async function getData(hash: string) {
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db
        .collection('links')
        .find({
            hash: hash,
        })
        .toArray();
    if (data.length == 0) return redirect('/404');
    return data[0];
}

export default async function I_Page({ params: { query } }: Props) {
    const data = await getData(decodeURIComponent(query));
    return (
        <>
            <div className="collection_div">
                <div className="collection_content">
                    <h1>
                        HEAVY WIP
                    </h1>
                    <h1>{data.title}</h1>
                    <p>{data.desc}</p>
                    <h3>
              Link: <a href={data.url}>{data.url}</a>
                    </h3>
                    <small>Referred by {data.ref}</small>
                </div>
            </div>
        </>
    );
}
