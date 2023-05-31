import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import fetchFileContents from '../../getJournals'

type Props = {
    params: {
        special: string;
    };
}

export default async function JournalHash({ params: { special } }: Props) {
    const data = await fetchFileContents(special + '.md')
    return (
        <>
            <ReactMarkdown>
                {data}
            </ReactMarkdown>
        </>
  )
}