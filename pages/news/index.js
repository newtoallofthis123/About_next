import React from 'react'
import styles from "@/styles/quick.module.scss"
import Link from 'next/link'
import NewsLayout from '@/components/news_layout'
import { Seo } from '@/components/seo'

export default function Quicky() {
    return (
        <NewsLayout>
            <div className={styles.quick_div}>
                <Seo title="Noobites | Handwritten Bite Size News"></Seo>
                <div className={styles.main}>
                    <p>
                        Well, news ain't always the prettiest.
                        And news aggregators are not always the most reliable.
                        We are here to change that.
                    </p>
                    <p>
                        Welcome to <em>Noob Bites</em>, hand written news that you can trust.
                        in this age of AI, news aggregators and bots, we are here to bring you the real deal.
                        This being said, we don't write the news, we just write about it.
                    </p>
                    <p>
                        So, what are you waiting for? <Link href="/news/latest">Get started</Link>! or stick around to learn more.
                    </p>
                    <p>
                        I hate doom scrolling, and I'm sure you do too.
                        It is a waste of time, and it is not good for your mental health.
                        So, we are here to help you get the news you need, and nothing more.
                        First up, I love reading the news in the morning, and I'm sure you do too.
                        So, this is something fun for me and you.
                    </p>
                    <p>
                        BTW, we are not native English speakers, so if you find any mistakes, please let us know.
                        Anyways, with that being out, let's talk :)
                    </p>
                    <div className={styles.header}>
                        <div className={styles.div1}>
                            <img src="/assets/news/head.png" alt="" />
                        </div>
                        <div className={styles.div2}>
                            <h2>
                                So sire, what's difference?
                            </h2>
                            <p>
                                Well, we are not a news aggregator. We are not a news site.
                                We are a news blog. We read the news, and write about it.
                                So, we basically sum up the whole thing so the first thing you do in the morning is not doom scrolling.
                            </p>
                            <p>
                                Now, the question is, why should you trust us?
                                Well, we are not a news aggregator, so we don't have any bias.
                                We are not a news site, so we don't have any agenda.
                                We are just a news blog, and we are here to help you get the news you need, and nothing more.
                                We even list all the sources we use, so you can go and read the news yourself.
                            </p>
                        </div>
                    </div>
                    <div className={styles.quick_div}>
                        <h2>
                            So, what's the plan?
                        </h2>
                        <p>
                            So, well, we are planning of starting a newsletter.
                            But for now, we are just writing about the news on this site.
                            We are also planning of adding a few more features, like a search bar, and a few more.      
                        </p>
                    </div>
                </div>
            </div>
        </NewsLayout>
  )
}
