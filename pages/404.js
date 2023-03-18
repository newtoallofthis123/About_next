import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <div style={{ backgroundColor: "var(--red)", }} className="color-div">
        <h1 style={{ color: "var(--black)", }} className="main-title">Not Found! Bruh</h1>
        <h2>What is the 404 error?</h2>
        <code>
          The 404 (Not Found) status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists. A 404 status code does not indicate whether this lack of representation is temporary or permanent; the 410 (Gone) status code is preferred over 404 if the origin server knows, presumably through some configurable means, that the condition is likely to be permanent.

          A 404 response is heuristically cacheable; i.e., unless otherwise indicated by the method definition or explicit cache controls (see Section 4.2.2 of [CACHING]).
        </code>
        <h2>
          I could have included a cute
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> 404 page</a>
          , but I didn't.
        </h2>
        <p style={{textAlign: "center",}}>
          So I recommend you to go back to the <Link href="/">homepage</Link> and now that I sound weird and not myself, 
          I am going to stop writing this. If you think this is a bug, please report it on the <a href="/go/git">Github repo</a>.
        </p>
        <button style={{backgroundColor: "var(--yellow)",}} className='link-btn'><Link href="/">HomePage Sire!</Link></button>
      </div>
    </Layout>
  )
}

export const Head = () => {
  <Seo title="404 | NoobScience" description="404 Error"></Seo>
}