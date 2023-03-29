import React from 'react'
import styles from "@/styles/quick.module.scss"
import Link from 'next/link'

export default function NewsLayout({ children}) {
    return (
        <>
            <nav className={styles.nav}>
                <h1>
                    Noobites
                </h1>
                <h2>
                    News, Right from the source
                </h2>
                <div className={styles.intro_subtitle}>
                    <Link href="/news/today">Today</Link>
                    <Link href="/archive">Archive</Link>
                </div>
            </nav>
            {children}
        </>
  )
}
