import React from 'react'
import useSWR from "swr"
import Link from 'next/link'
import { Seo } from '@/components/seo'
import { useRouter } from 'next/router'
import { marked } from 'marked'

export default function GoLinks() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSWR(`/api/v1/links`, fetcher)
    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Failed to load</div>
    if (data) {
        const links = data
        const link = links.find(link => link.hash === param)
        const htmlContent = (content) => {
            return { __html: marked.parse(content) }
        }
        if (link) {
            return (
                <div className='updates_div'>
                    <Seo title={link.name}></Seo>
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
                        <p dangerouslySetInnerHTML={htmlContent(link.content)}></p>
                        <Link href={link.url}>{link.url}</Link>
                    </div>
                </div>
            )
        }
        else{
            <div>404</div>
        }
    }
}
