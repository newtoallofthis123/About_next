import React from 'react'
import Layout from '@/components/layout'
import Link from 'next/link'

export default function ServerError() {
    return (
        <Layout>
            <div style={{ backgroundColor: "var(--red)", }} className="color-div">
                <h1 style={{ color: "var(--black)", }} className="main-title">Server Error</h1>
                <h2>What is the 500 error?</h2>
                <p>
                    I'll put this as simple as possible. The server encountered an error and couldn't complete your request.
                    Most likely, the resource you are looking for is temporarily unavailable.
                    If you think this is a bug, please report it on the <Link href="/go/git">Github repo</Link>.
                </p>
                <h2>
                    I could have included a cute
                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> 500 page</a>
                    , but I didn't.
                </h2>
                <p>
                    So I recommend you to go back to the <Link href="/">homepage</Link>
                    And also, if you don't mind, try after some time.
                    Thank you for your patience and understand, that it is not your fault, but the server's.
                </p>
                <button style={{ backgroundColor: "var(--yellow)", }} className='link-btn'><Link href="/">HomePage Sire!</Link></button>
            </div>
        </Layout>
  )
}
