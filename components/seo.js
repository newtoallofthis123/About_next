import React from "react"

export const Seo = ({ title, description }) => {
  const defaultTitle = `NoobScience | Open Source Enthusiast and Student`
  const defaultDescription = `NoobScience's Page`
  const siteUrl = `https://noobscience.rocks`
  const twitterUsername = `@NoobScience1`
  const image = "banner.png"
  const pathname = typeof window !== "undefined" ? window.location.pathname : null

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}/${image}`,
    url: `${siteUrl}/${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
    </>
  )
}