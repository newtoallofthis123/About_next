import BlogLayout from '@/components/blog_layout'
import React from 'react'
import { Seo } from '@/components/seo'
import Link from 'next/link'
import Share from '@/components/share'

export default function AgeOfAISubscriptions() {
    return (
        <BlogLayout>
            <Seo title="The Age of AI Subscriptions | Ishan Writes"></Seo>
            <main>
                <div className="title">
                    <h1>The Age of AI Subscriptions</h1>
                    <p><Link href="/">Ishan</Link> on 2023-03-24</p>
                </div>
                <div className="center">
                    <Share title="The Age of AI Subscriptions | Ishan Writes" url="the-age-of-ai-subscriptions"></Share>
                </div>
                <div className="img">
                    <img src="/assets/blog/images/age_of_ai_subscriptions.webp" alt="AI Subscriptions"></img>
                </div>
                <div className="bod">
                    
                </div>
                <div className="disclaimer">
                    <p>
                        Parts of this article are AI generated, including, but not limited to the TLDR and Introduction.
                    </p>
                </div>
            </main>
      </BlogLayout>
  )
}
