import React from "react"

export const Seo = ({ title, description }) => {
  const defaultTitle = `NoobScience | Open Source Enthusiast and Student`
  const defaultDescription = `NoobScience's Page`

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
    </>
  )
}