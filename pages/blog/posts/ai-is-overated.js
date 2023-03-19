import React from 'react'
import { Seo } from '@/components/seo'
import BlogLayout from '@/components/blog_layout'
import Share from '@/components/share'

export default function AIoverated() {
    return (
        <BlogLayout>
            <Seo title="AI is Overrated | Ishan Writes"></Seo>
            <main>
                <div className="title">
                    <h1 className="title">
                        AI is Overrated
                    </h1>
                    <p><a href="https://noobscience.rocks">Ishan</a> at 2023-03-19 4:43 AM UST</p>
                </div>
                <div className='center'>
                    <Share title="AI is Overrated" url="ai-is-overated"></Share>
                </div>
                <div className="bod">
                    <p>
                        I love AI
                    </p>
                </div>
            </main>

      </BlogLayout>
  )
}
