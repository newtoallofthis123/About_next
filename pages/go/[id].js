import React from "react"
import { useRouter } from 'next/router'
import Router from "next/router"
import useSWR from "swr"
import Link from "next/link"

export default function GoPage() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error } = useSWR('https://raw.githubusercontent.com/newtoallofthis123/Assets/main/data.json', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div>Loading</div>
    if (data) {
        const link = data.go.find(go => go.slug === param)
        if (link) {
            setTimeout(() => {
                Router.push(link.url)
            }, 5000)
        }
        return (
            <div className="updates_div">
                <h1>Redirecting to</h1>
                <p>
                    {link ? link.url : 'Not Found'}
                </p>
                <Link href="/">Go Back</Link>
            </div>
        )
    }
}