import React from 'react'
import BlogLayout from '@/components/blog_layout'
import { Seo } from '@/components/seo'
import Link from 'next/link'
import Router from 'next/router'

export default function Author() {
  const [time, setTime] = React.useState(10)
  setInterval(() => {
    setTime(time - 1)
    if (time === 0) {
      Router.push("/")
    }
  }, 1000)
  return (
    <BlogLayout>
      <Seo title="About the Author"></Seo>
      <h1>
        Hi! I am Ishan
      </h1>
      <p>
        and I am the author of this blog.
        I hope you enjoy my opinions and thoughts.
        For a more complete introduction, check out my <Link href="/about">About</Link> page.
      </p>
      <p>
        This page will auto redirect to the <Link href="/">About</Link> Page in {time} seconds.
      </p>
    </BlogLayout>
  )
}
