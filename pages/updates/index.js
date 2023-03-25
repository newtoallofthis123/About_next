import Layout from '@/components/layout'
import React from 'react'
import Link from 'next/link'
import useSwr from "swr"

export default function Notes() {
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`https://raw.githubusercontent.com/newtoallofthis123/Assets/main/data.json`, fetcher)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load updates</div>
    if (data) {
        const { updates } = data
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
                        So, I have coded this such that a json file on my GitHub repo is used to store the updates.
                    </p>
                    <p>
                        Each is stored as an object in an array.
                        So, when you click on an update, <br /> it will fetch the data from the json file and then find the update with the same id as the one you clicked on.
                    </p>
                    <p>
                        So, free hosting and free updates. What more could you ask for?
                    </p>
                    <h2>
                        Updates
                    </h2>
                    {
                        updates.slice(0).reverse().map(update => {
                            max -= 1;
                            if (max > 0)
                                return (
                                    <div key={update.id}>
                                        <Link href={`/updates/${update.id}`}>
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
