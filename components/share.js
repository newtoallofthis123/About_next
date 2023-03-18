import React from 'react'

export default function Share({ title, url }) {
    const twitter = `https://twitter.com/share?url=https://noobscience.rocks/blog/articles/${url}&text=${title}`
    const reddit = `https://www.reddit.com/submit?url=https://noobscience.rocks/blog/articles/${url}&title=${title}`
    const email = `mailto:?subject=${title}&body=Check this out:https://noobscience.rocks/blog/articles/${url}`
    const linkedin = `https://www.linkedin.com/shareArticle?mini=true&url=https://noobscience.rocks/blog/articles/${url}&title=${title}`
    const whatsapp = `https://api.whatsapp.com/send?text=${title}+https://noobscience.rocks/blog/articles/${url}`

    return (
        <div className="options">
            {/* eslint-disable-next-line */}
            <button id="play"><i role="button" className="bi bi-play"></i></button>
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
