import React from 'react';
import { fetchFileContents, fetchFileJSON } from '../getJournals';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Link from 'next/link';

type Props = {};

export default async function Journals({}: Props) {
    const data = await fetchFileJSON();
    const journals = data['journals'];
    const latest_journal = Object.keys(journals)[0];
    const journal = await fetchFileContents(journals[latest_journal]['path']);
    return (
        <>
            <ReactMarkdown>{journal}</ReactMarkdown>
        </>
    );
}
