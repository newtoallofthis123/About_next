import React from 'react'
import Layout from '@/components/layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'

export default function Services() {
    return (
        <Layout>
            <div style={{ backgroundColor: "var(--yellow)" }} className="color-div">
                <Seo title="Services I offer"></Seo>
                <h1>
                    Services I offer
                </h1>
                <p>
                    Okay, so I am not a professional developer, but I can help you with some stuff. I can help you with:
                </p>
                <ul>
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>Web Hosting</li>
                    <li>
                        SEO (Search Engine Optimization)
                    </li>
                    <li>
                        Custom CLI tools
                    </li>
                    <li>
                        Own your own domain
                    </li>
                </ul>
                <p>
                    I can also help you with some other stuff. If you want to know more, you can contact me.
                </p>
                <p>
                    One more thing, I can also help you with your blog. I can help you with:
                </p>
                <ul>
                    <li>
                        Blog Design
                    </li>
                    <li>
                        Blog Hosting
                    </li>
                    <li>
                        Copy Writing
                    </li>
                </ul>
                <p>
                    And if you are into web development, reach out to me so that I can 
                    give you a sub domain on my main domain <a href="https://noobscience.rocks">noobscience.rocks</a>
                    If you are interested in that, please <Link href="/social">contact</Link> me.
                </p>
            </div>
      </Layout>
  )
}
