import React from 'react'

export default function Share({ title, url }) {
    const twitter = `https://twitter.com/share?url=https://new.noobscience.rocks/blog/posts/${url}&text=${title}`
    const reddit = `https://www.reddit.com/submit?url=https://new.noobscience.rocks/blog/posts/${url}&title=${title}`
    const email = `mailto:?subject=${title}&body=Check this out:https://new.noobscience.rocks/blog/posts/${url}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=https://new.noobscience.rocks/blog/posts/${url}&title=${title}`
    const whatsapp = `https://api.whatsapp.com/send?text=${title}+https://new.noobscience.rocks/blog/posts/${url}`

    return (
        <div style={{
            margin: "1vw 0",
        }} className="options">
            {/* eslint-disable-next-line */}
            <button><a href={twitter}><i role="button"
                className="bi bi-twitter"></i></a></button>
            {/* eslint-disable-next-line */}
            <button><a href={email}><i role="button"
                className="bi bi-envelope"></i></a></button>
            {/* eslint-disable-next-line */}
            <button><a href={reddit}><i role="button"
                className="bi bi-reddit"></i></a></button>
            {/* eslint-disable-next-line */}
            <button><a href={linkedin}><i role="button"
                    className="bi bi-linkedin"></i></a></button>
            {/* eslint-disable-next-line */}
            <button><a href={whatsapp}><i role="button"
                className="bi bi-whatsapp"></i></a></button>
        </div>
  )
}
