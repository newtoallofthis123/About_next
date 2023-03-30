import React from 'react'
import { useRouter } from 'next/router'
import useSwr from "swr"
import Link from 'next/link'
import { Seo } from '@/components/seo'
import Settings from '@/components/settings'
import { marked } from 'marked'
import LoadingScreen from '@/components/loading'

export default function UpdatesID() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v1/updates`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load</div>
    if (data) {
        const updates= data
        const update = updates.find(update => update.hash === param)
        const param_id = update._id
        const htmlContent = (content) => {
            return { __html: marked.parse(content) }
        }
        if (update) {
            return (
                <div className='updates_div'>
                    <Settings></Settings>
                    <Seo title={update.name} ></Seo>
                    <h1>
                        Ishan's Updates
                    </h1>
                    <p>
                        {update.date}
                    </p>
                    <p>
                        {update.author}
                    </p>
                    <nav>
                        <Link href='/updates'>Back</Link>
                    </nav>
                    <div className="main_update">
                        <h2>{update.name}</h2>
                        <p dangerouslySetInnerHTML={htmlContent(update.content)}></p>
                    </div>
                    <h2>Other Updates</h2>
                    {
                        updates.map(update => {
                            if (update.hash !== param && update._id > param_id) {
                                return (
                                    <div key={update._id}>
                                        <Link href={`/updates/${update.hash}`}>
                                            {update.name}
                                        </Link>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            )
        } else {
            <div>404</div>
        }
    }
}
