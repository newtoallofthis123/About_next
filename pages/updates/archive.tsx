import Layout from '@components/layout';
import React from 'react';
import Link from 'next/link';
import useSwr from 'swr';
import LoadingScreen from '@components/loading';

type Update = {
    _id: string;
    name: string;
    content: string;
    hash: string;
    date: string;
};

export default function UpdateArchive() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSwr(`/api/v1/updates`, fetcher);
    if (isLoading)
        return (
            <div>
                <LoadingScreen></LoadingScreen>
            </div>
        );
    if (error) return <div>Failed to load updates</div>;
    if (data) {
        const updates = data;
        return (
            <Layout>
                <div className="page-div updates_div">
                    <h1>Updates Archive</h1>
                    <p>
                        Archive of all of my updates. The dates are in GMT. So,
                        if you are in a different timezone, you might have to
                        adjust the dates. And I write in IST (GMT+5:30).
                    </p>
                    {updates
                        .slice(0)
                        .reverse()
                        .map((update: Update) => {
                            return (
                                <div key={update._id}>
                                    <Link href={`/updates/${update.hash}`}>
                                        {update.name}
                                    </Link>
                                    - {update.date}
                                </div>
                            );
                        })}
                </div>
            </Layout>
        );
    }
}
