import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

export default function Notes() {
    const time = 5
    setTimeout(() => {
        Router.push(`/blog`)
    }, time * 1000)
    return (
        <Layout>
            <h1>Work in Progress</h1>
            <p>
                I am trying to write notes for my classes.
                I will be adding them here soon!
            </p>
            <p>
                Meanwhile you can check out my <Link href="/blog">Blog</Link>
            </p>
            <h2>
                Redirecting to the Blog in 5 seconds...
            </h2>
      </Layout>
  )
}
