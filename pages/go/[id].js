import React from "react"
import { useRouter } from 'next/router'
import Router from "next/router"
import useSWR from "swr"
import Link from "next/link"
import LoadingScreen from "@/components/loading"

export default function GoPage() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const [time, setTime] = React.useState(5)
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error } = useSWR('/api/v1/go', fetcher)
    if (error) return <div>failed to load</div>
    if (!data) return <div><LoadingScreen></LoadingScreen></div>
    if (data) {
        const link = data.find(go => go.slug === param)
        if (link) {
            setTimeout(() => {
                Router.push(link.url)
            }, 5000)
            setInterval(() => {
                setTime(time - 1)
            }, 1000)
        }
        return (
            <div className="updates_div">
                <h1>Redirecting to</h1>
                <a href={link}>
                    {link ? link.url : 'Not Found'}
                </a>
                <p>
                    in {time} seconds
                </p>
                <Link href="/">Go Back</Link>
            </div>
        )
    }
}