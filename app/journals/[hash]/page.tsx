import React from 'react'
import {fetchFileContents} from '../getJournals'
import Markdown from '@components/md'

type Props = {
    params: {
        hash: string;
    };
}

export default async function JournalHash({ params: { hash } }: Props) {
    const data = await fetchFileContents(hash)
    return (
        <>
            <Markdown content={data} />
        </>
  )
}