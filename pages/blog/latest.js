import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import BlogLayout from '@/components/blog_layout'
import useSwr from 'swr'
import { Seo } from '@/components/seo'
import LoadingScreen from '@/components/loading'

export default function BlogLatest() {
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const { data, error, isLoading } = useSwr('/api/all', fetcher)

    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div><LoadingScreen></LoadingScreen></div>
    if (!data) return null
    const post = data.blogs[0]
    const time = 5
    setTimeout(() => {
        Router.push(`/blog/posts/${post.slug}`)
    }, time * 1000)
    return (
        <BlogLayout>
            <Seo title="Latest | Ishan Writes"></Seo>
            <main>
                <h1>Blog Latest</h1>
                <p>
                    This is the latest blog post.
                    Hope you have fun reading it!
                </p>
                <h2>
                    Redirecting to the latest blog post in {time} seconds...
                </h2>
                {
                    <div key={post.id} class="recommendations">
                        <div class="recommend">
                            <div className="img">
                                <img src={`/assets/blog/images/${post.img}`} alt="Blog Post Image" />
                            </div>
                            <div class="content">
                                <h3><Link href={`posts/${post.slug}`}>{post.title}</Link></h3>
                                <p>
                                    {post.description}
                                </p>
                                <button><Link href={`blog/posts/${post.slug}`} >Read the Article!</Link></button>
                                <button><Link href={`blog/pdfs/${post.slug}`}>Download The PDF</Link></button>
                            </div>
                        </div>
                    </div>
                }
            </main>
        </BlogLayout>
  )
}
