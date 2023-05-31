import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import fetchFileContents from '../../getJournals'

type Props = {
    params: {
        hash: string;
    };
}

export default async function JournalHash({ params: { hash } }: Props) {
    const data = await fetchFileContents('journals/' + hash + '.md')
    return (
        <>
            <ReactMarkdown>
                {data}
            </ReactMarkdown>
        </>
  )
}