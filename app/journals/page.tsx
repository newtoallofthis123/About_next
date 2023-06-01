import React from 'react'
import { fetchNormalFile, fetchFileJSON } from './getJournals';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Link from 'next/link';

type Props = {}

export default async function Journals({}: Props) {
    const data = await fetchFileJSON();
    const journals = data["journals"];
    const latest_journal = Object.keys(journals)[0]
    return (
        <>
            <h3>
                Read the latest journal: <Link href={"/journals/" + latest_journal}>{journals[latest_journal]["name"]}</Link>
            </h3>
            <ReactMarkdown>
                {await fetchNormalFile('README.md')}
            </ReactMarkdown>
        </>
    );
}