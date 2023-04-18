import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout>
      <Seo title="404 Error" />
      <div style={{ backgroundColor: "var(--bg)", color: "var(--color)", }} className='normalize color-div'>
        <h1>
          You ran into a <></>
          <span style={{
            color: 'red',
            fontWeight: 'bold',
            fontSize: '3rem'
          }}>
            <abbr title="404 Error">
              0000000110010100
            </abbr>
          </span> Error
        </h1>
        <div>
          <p>
            I'm sorry, but the page you were looking for doesn't exist.
            And I'm not sure what to do about it.
            So, here's a link to the <Link href="/">home page</Link>.
          </p>
          <div>
            <button className="link-btn">
              <Link href="/">
                Back to Home
              </Link>
            </button>
          </div>
          <p>
            I know you are now thinking, "What the heck is a 0000000110010100 error?"
            Well, I'm glad you asked.
            It's a 404 error, but in binary.
            I thought it was cool :)
          </p>
          <p>
            If you want to know more about 404 errors, you can read about them <a href="https://en.wikipedia.org/wiki/HTTP_404">here</a>.
            A 404 error is an HTTP status code that means the page you are looking for doesn't exist.
            It's my way of saying, "Sorry, I don't have that page."
            So, equip yourself with a 404 error code and go forth and conquer the internet!
          </p>
          <p>
            Now I know you were expecting a pretty illustration of a 404 error, but I'm not that good at drawing.
            So, instead, I decided to educate you on 404 errors.
            BTW if you already knew what a 404 error was, then 1 you are a nerd and 2 you are probably a developer.
            If you are a developer, then you should check out my <Link href="/projects">projects</Link> page.
            I have a lot of cool projects on there.
          </p>
          <p>
            If you are a beginner, then you should check out my <Link href="/notes">notes</Link> page.
            I have notes about C, Algorithms, and more.
          </p>
          <p>
            BTW
          </p>
          <code
            style={{
              maxWidth: '100%',
            }}
          >
            01101000011011110111000001100101001000000111
            1001011011110111010100100000011010000110000101110
            1100110010100100000011000010010000001100111011100100
            1100101011000010111010000100000011001000110000101111001
          </code>
        </div>
      </div>
    </Layout>
  )
}