import React from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import { fetchNormalFile } from 'app/journals/getJournals'

type Props = {
    params: {
        special: string;
    };
}

export default async function JournalHash({ params: { special } }: Props) {
    const data = await fetchNormalFile(special + '.md')
    return (
        <>
            <ReactMarkdown>
                {data}
            </ReactMarkdown>
        </>
  )
}