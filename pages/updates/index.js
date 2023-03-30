import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import useSwr from "swr"
import LoadingScreen from '@/components/loading'

export default function Notes() {
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v1/updates`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load updates</div>
    if (data) {
        const updates= data
        let max = 8
        return (
            <Layout>
                <div className="updates_div">
                    <h1>
                        NoobScience's Update Page
                    </h1>
                    <p>
                        Okay, I have just been experimenting with Next.js and I have to say, it is pretty cool.
                    </p>
                    <p>
                        I have been able to integrate MongoDB with Next.js and I have also been able to make a simple API.
                        So, from now, all my updates will be made directly made to the database and will be fetched from the API.
                    </p>
                    <p>
                        Although, I will be writing by blog in good old JSX and HTML.
                        So, this is just to make it easier for me to update my links and stuff.
                    </p>
                    <p>
                        Also, don't pay much heed to the recommendation system. It is just a simple algorithm that I made.
                        It is not very accurate.
                        Have a better idea? Let me know!
                        Have a great day!
                    </p>
                    <h2>
                        Updates
                    </h2>
                    {
                        updates.slice(0).reverse().map(update => {
                            max -= 1;
                            if (max > 0)
                                return (
                                    <div key={update._id}>
                                        <Link href={`/updates/${update.hash}`}>
                                            {update.name}
                                        </Link>
                                    </div>
                                )
                        })
                    }
                </div>
            </Layout>
        )
    }
}
