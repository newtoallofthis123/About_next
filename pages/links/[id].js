import React from 'react'
import useSWR from "swr"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function GoLinks() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(`https://raw.githubusercontent.com/newtoallofthis123/Assets/main/data.json`, fetcher)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
    if (data) {
        const { links } = data
        const link = links.find(link => link.id === param)
        if (link) {
            return (
                <div className='updates_div'>
                    <h1>
                        Ishan's Links
                    </h1>
                    <p>
                        {link.date}
                    </p>
                    <nav>
                        <Link href='/links'>Back</Link>
                    </nav>
                    <div className="main_update">
                        <h2>{link.name}</h2>
                        <p>{link.content}</p>
                        <Link href={link.url}>{link.url}</Link>
                    </div>
                </div>
            )
        }
        else {
            <div>404</div>
        }
    }
}
