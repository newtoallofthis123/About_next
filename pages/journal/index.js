import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import useSwr from "swr"
import LoadingScreen from '@/components/loading'

export default function Notes() {
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v1/journal`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load updates</div>
    if (data) {
        const updates = data
        let max = 8
        return (
            <Layout>
                <div className="updates_div">
                    <h1>
                        Ishan's Journal
                    </h1>
                    <p>
                        I started a journal to keep track of my thoughts and ideas.
                        I don't know why, mostly for experimenting more with MongoDB and Next.js.
                    </p>
                    <p>
                        I just have so many thoughts everyday, that I want to write a new blog post everyday.
                        And since I don't have the time to write a blog post everyday, I decided to write a journal entry.
                        So, these are just my thoughts, no research, no facts, just my thoughts.
                    </p>
                    <p>
                        One more thing, you won't find any real names or the exact places in my journal.
                        This is to protect my privacy and the privacy other involved.
                        Thanks for your interest in my journal.
                        Hope you enjoy my journal.
                    </p>
                    <h2>
                        My Journals
                    </h2>
                    {
                        updates.slice(0).reverse().map(update => {
                            max -= 1;
                            if (max > 0)
                                return (
                                    <div key={update._id}>
                                        <Link href={`/updates/${update.hash}`}>{update.name}</Link> on {update.date}
                                    </div>
                                )
                        })
                    }
                </div>
            </Layout>
        )
    }
}
