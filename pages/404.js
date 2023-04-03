import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <Seo title="404 Error" />
      <div style={{ backgroundColor: "var(--red)", }} className="color-div">
        <h1 style={{ color: "var(--black)", }} className="main-title">Not Found! Bruh</h1>
        <h2>
          I could have included a cute
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> 404 page</a>
          , but I didn't.
        </h2>
        <p>
          You just hit a route that doesn't exist... the sadness.
          Anyways, you can go back to the <Link href="/">home</Link> page.
          So, what are you waiting for? Go back to the home page!
          BTW! You can also check out my <Link href="/blog">blog</Link> page.
          And if you want to see my <Link href="/projects">projects</Link> page.
        </p>
        <p>
          I try to make my pages as accessible as possible, so if you have any
          suggestions, please let me know!
          You can also contribute to this site on <Link href="/social/git">GitHub</Link>.
        </p>
        <p>
          If you want to see my <Link href="/social">social</Link> page.
        </p>
        <p>
          Now that I'm done with all the ads, you can go back to the home page.
        </p>
        <button style={{backgroundColor: "var(--yellow)",}} className='link-btn'><Link href="/">HomePage Sire!</Link></button>
      </div>
    </Layout>
  )
}