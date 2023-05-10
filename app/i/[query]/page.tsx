import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { redirect } from 'next/navigation';
import ReactMarkdown from 'react-markdown/';
import rehypeRaw from 'rehype-raw';
import Theme from '@components/theme';

type Props = {
    params: {
        query: string;
    };
};

async function getData(slug: string) {
    const { db }: { db: Database } = await connectToDatabase();
    const data = await db
        .collection('links')
        .find({
            slug: slug,
        })
        .toArray();
    if (data.length === 0) return redirect('/404');
    data[0].count = data[0].count + 1;
    await db.collection('links').updateOne(
        {
            slug: slug,
        },
        {
            $set: {
                count: data[0].count,
            },
        }
    );
    if (data[0].redirect === 'true') return redirect(data[0].redirect_url);
    return data[0];
}

export default async function I_Page({ params: { query } }: Props) {
    const data = await getData(decodeURIComponent(query));
    return (
        <>
            <Theme />
            <div className={`${data.theme}`}>
                <p className="content__category">{String(data.category)}</p>
                <h1 className="content__title">{data.title}</h1>
            </div>
            <div className={`i-div`}>
                <div className="content__body">
                    <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                        {data.content}
                    </ReactMarkdown>
                </div>
            </div>
            <div className="content__meta">
                <p>
                    Written by <span style={{}}>{data.author}</span>
                </p>
                <p>
                    Published on <span style={{}}>{data.time}</span>
                </p>
                <p>
                    Opened <span style={{}}>{data.count}</span> times
                </p>
            </div>
        </>
    );
}
