import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function Notes() {
  return (
    <Layout>
      <h1>Notes</h1>
      <p>
        Notes for all of my college courses. I'll be adding more as I go along.
      </p>
      <h2>
        <Link href="/notes/c">C Notes</Link>
      </h2>
    </Layout>
  )
}
