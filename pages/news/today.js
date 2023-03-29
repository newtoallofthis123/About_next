import React from 'react'
import useSwr from 'swr'
import { Seo } from '@/components/seo'
import { dateTime, dateHash } from '@/utils/utils'
import NewsLayout from '@/components/news_layout'
import styles from '@/styles/quick.module.scss'

export default function Today() {
    const fetcher = (url) => fetch(url).then((res) => res.json())
    const URL = '/api/v1/news/' + dateHash()
    const { data, error, isLoading } = useSwr(URL, fetcher)
    console.log(data)
    if (error) return <div>Failed to load users</div>
    if (isLoading) return <div>Loading...</div>
    if (!data) return <div>Not found</div>
    const post = data[0]
    const title = 'Today in News | ' + post.name
    return (
        <NewsLayout>
            <Seo title={title} ></Seo>
            <main className={styles.news_div}>
                <h1>{ post.name }</h1>
                <h3>
                    News At {dateTime()}
                </h3>
                <div className={styles.news_content}>
                    {
                        post.content
                    }
                </div>
            </main>
      </NewsLayout>
  )
}