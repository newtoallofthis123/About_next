import React from 'react';
import { connectToDatabase, Database } from '@utils/db';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { redirect } from 'next/navigation';
import { Document } from 'mongodb';
import { WithId } from 'mongodb';

type Props = {
    params: {
        hash: string;
    };
};

async function getSup(hash: string): Promise<WithId<Document>> {
    const { db }: { db: Database } = await connectToDatabase();
    const sup = await db
        .collection('sup')
        .find({
            hash: hash,
        })
        .toArray();

    if (!sup[0]) return redirect('/404');
    return sup[0];
}

export default async function SupPage({ params: { hash } }: Props) {
    const sup = await getSup(hash);
    return (
        <>
            <div
                style={{
                    textAlign: 'center',
                }}
            >
                <h1
                    style={{
                        textDecoration: '12px solid underline',
                    }}
                >
                    Sup Bruh
                </h1>
                <p>
                    {
                        (String(sup.content).length < 1000) ? (
                            <>
                                This Bruh Couldn't Even Write 1000 Characters
                            </>
                        ): (
                                <>
                                Bruh wrote more than 1000 characters. You're supposed to write a sup, not a book.
                                </>
                        )
                    }
                </p>
            </div>
            <div className={`page-div ${sup.theme}`}>
                <h1>{sup.title}</h1>
                <h3>By {sup.author}</h3>
                <ReactMarkdown>{sup.content}</ReactMarkdown>
                <small>
                    <em>{sup.date}</em>
                </small>
            </div>
        </>
    );
}
