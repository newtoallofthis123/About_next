import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'
import Head from 'next/head'

export default function NotFound() {
  return (
    <Layout>
      <Head>
        <title>
          404 - Page Not Found | NoobScience
        </title>
      </Head>
      <div className="normalize">
        <div className="not-found-div">
          <div className="content-main">
            <h1>OOPS</h1>
            <h2>
              Page Not Found
            </h2>
            <p>
              This is a 404 Error.
              If you are wondering how you ended up here, don't worry, it's not your fault.
              It's probably mine.
              So, let me know.
            </p>
            <div>
              <button className="fancy_btn">
                <Link href="/">
                  Go back
                </Link>
              </button>
            </div>
          </div>
          <div className="content">
            <div className="center-img">
              <img src="/assets/404.svg"></img>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}