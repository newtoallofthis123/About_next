import React from 'react'
import Link from 'next/link'

export default function Disclaimer() {
    return (
        <div className="disclaimer">
            <h2>Disclaimer</h2>
            <p>
                Parts of this article are AI generated, including, but not limited to the TLDR and Introduction.
            </p>
            <p>
                This article is not sponsored by any company. All the opinions expressed in this article are my own.
            </p>
            <p>
                I am not an expert in AI. So, if you find any errors in this article, please let me know on <Link href="/social/twitter">twitter</Link>.
            </p>
            <p>
                Atmost care is taken to make sure that the information in this article is correct. But, I am not responsible for any errors in this article.
            </p>
        </div>
  )
}
