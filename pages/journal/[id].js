import React from 'react'
import { useRouter } from 'next/router'
import useSwr from "swr"
import Link from 'next/link'
import { Seo } from '@/components/seo'
import Settings from '@/components/settings'
import { marked } from 'marked'
import LoadingScreen from '@/components/loading'
import Router from 'next/router'
import { dateHash } from '@/utils/utils'

export default function JournalID() {
    const router = useRouter()
    const { id } = router.query
    const param = id
    const fetcher = (url) => fetch(url).then(res => res.json())
    const { data, error, isLoading } = useSwr(`/api/v1/journal`, fetcher)
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (error) return <div>Failed to load</div>
    if (data) {
        const journal = data
        const update = journal.find(update => update.hash === param)
        if (!update) {
            setTimeout(() => {
                Router.push('/journal')
            }, 2000)
            return <div>Journal Not Found. Redirecting to all my journals</div>
        }
        console.log(update)
        const param_id = "1234"
        const htmlContent = (content) => {
            return { __html: marked.parse(content) }
        }
        if (update) {
            return (
                <div className='journal_div'>
                    <Settings></Settings>
                    <Seo title={`Journal for ${update.date}`} ></Seo>
                    <h1>
                        Ishan's Journal
                    </h1>
                    <p>
                        for {update.date} at {update.time}
                    </p>
                    <div style={{
                        padding: '1rem 0',
                    }} className="main_journal">
                        <h2>{update.name}</h2>
                        <p dangerouslySetInnerHTML={htmlContent(update.content)}></p>
                    </div>
                    <h2>Previous journals</h2>
                    {
                        journal.map(update => {
                            if (update.hash !== param && update._id > param_id) {
                                return (
                                    <div key={update._id}>
                                        <Link href={`/journal/${update.hash}`}>
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
