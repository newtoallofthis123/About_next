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
        const updates = data
        const update = updates.slice(0).reverse()[0]
        let max = 15
        return (
            <Layout>
                <div className="normalize">
                    <div className="half-two-divs">
                        <div className="content content-half content-div">
                            <h1 className="content-title">
                                Ishan's Updates
                            </h1>
                            <p>
                                This is where I post my updates. I post about my projects, my blog posts,
                                my thoughts, my opinions, my life, basically anything that I feel like sharing.
                                Now I know there are many places where I can post my updates, but I like to keep
                                my own space. So, here I am, posting my updates. Plus not to mention, I am a big fan
                                having your own self hosted services, so I am in full control of my data.
                            </p>
                            <div className="latest__div">
                                <div style={{backgroundColor: "var(--yellow)",}} className='fancy_btn'>
                                    <h2>
                                        <i className="bi bi-circle-fill" style={{ color: "red" }}></i> Latest Update
                                    </h2>
                                    <div className="update" onClick={() => {
                                        window.location.href = `/updates/${update.hash}`
                                    }}>
                                        {
                                            <>
                                                <div className="underline update__title">
                                                    <Link href={`/updates/${update.hash}`}>
                                                        {update.name}
                                                    </Link>
                                                </div>
                                                <div className="update__text">
                                                    {update.content.slice(0, 300) + '...'}
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="content content-rest content-div-pink">
                            <h1 className="content-title">
                                Recent Updates
                            </h1>
                            {
                                updates.slice(0).reverse().map(update => {
                                    max -= 1;
                                    if (max > 0)
                                        return (
                                            <div className='updates_showcase' key={update._id}>
                                                <ul>
                                                    <li>
                                                        <Link href={`/updates/${update.hash}`}>
                                                            {update.name}
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        )
                                })
                            }
                        </div>
                    </div>
                    <div style={{textAlign: "center",}} className="btn__div">
                        <button className="fancy_btn">
                            <Link href="/updates/archive">
                                Archive
                            </Link>
                        </button>
                        <button className="fancy_btn">
                            <Link href="/updates/latest">
                                Latest
                            </Link>
                        </button>
                        <button className="fancy_btn">
                            <Link href="/updates/ran">
                                Random
                            </Link>
                        </button>
                    </div>
                </div>
            </Layout>
        )
    }
}
