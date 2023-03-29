import React from 'react'
import { Seo } from '@/components/seo'
import Link from 'next/link'

export default function BlogIndex() {
    return (
        <>
            <Seo title="Ishan Writes Redirecting"></Seo>
            <h1>
                WIP! GO HERE <Link href="/blog/archive">/blog/posts</Link>
            </h1>
        </>
  )
}
