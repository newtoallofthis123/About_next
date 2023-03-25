import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import useSWR from "swr"

export default function LinkIndex() {
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(`https://raw.githubusercontent.com/newtoallofthis123/Assets/main/data.json`, fetcher)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
    let count = 0
    if (data) {
        return (
            <Layout>
                <div className='updates_div'>
                    <h1>
                        Hey My guy!
                    </h1>
                    <p>
                        Look, I use this route to share some cool articles and other links
                        that I find on the internet.
                    </p>
                    <p>
                        So, as you probably know, I am lazy to do something cool with this page.
                    </p>
                    <p>
                        How about you help me out? I would love to see what you can do with this page.
                    </p>
                    <p>
                        If you want to help me out, you can send me a pull request on the <Link href="/go/github">GitHub</Link> repo.
                    </p>
                    <div
                        style={{
                            margin: '2rem auto',
                        }}
                    >
                        <h2>
                            Some Links
                        </h2>
                        {
                            data.links.slice(0).reverse().map(link => {
                                count += 1
                                if (count < 5) {
                                    return (
                                        <div key={link.id}>
                                            <Link href={`/links/${link.id}`}>
                                                {link.name}
                                            </Link>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </Layout>
        )
    }
}
