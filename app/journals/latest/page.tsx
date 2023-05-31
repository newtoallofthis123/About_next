import React from 'react';
import fetchFileContents from '../getJournals';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';


type Props = {};

export default async function Journals({}: Props) {
    const latest = await fetchFileContents('latest.txt');
    return (
        <>
            <ReactMarkdown>
                {await fetchFileContents('journals/' + latest + '.md')}
            </ReactMarkdown>
        </>
    );
}
