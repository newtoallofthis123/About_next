import React from 'react'
import fetchFileContents from './getJournals'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import Link from 'next/link'

type Props = {}

export default async function Journals({}: Props) {
    const latest = await fetchFileContents('latest.txt');
    return (
        <>
            <h3>
                Read The Latest Entry at:{' '}
                <Link href={'journals/journal/' + latest}>{
                    latest.substring(0, 4) + '-' + latest.substring(4, 6) + '-' + latest.substring(6, 8)
                }</Link>
            </h3>
            <ReactMarkdown>
                {await fetchFileContents('README.md')}
            </ReactMarkdown>
        </>
    );
}