import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import useSwr from "swr"
import LoadingScreen from '@/components/loading'

export default function UpdateArchive() {
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v1/updates`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load updates</div>
    if (data) {
        const updates = data
        return (
            <Layout>
                <div className="updates_div">
                    <h1>
                        Updates Archive
                    </h1>
                    <p>
                        Archive of all of my updates.
                        The dates are in GMT. So, if you are in a different timezone, you might have to adjust the dates.
                        And I write in IST (GMT+5:30).
                    </p>
                    {
                        updates.slice(0).reverse().map(update => {
                            return (
                                <div key={update._id}>
                                    <Link href={`/updates/${update.hash}`}>
                                        {update.name}
                                    </Link>
                                    - {update.date}
                                </div>
                            )
                        })
                    }
                </div>
            </Layout>
        )
    }
}
