import '@/styles/globals.scss'
import '@/styles/pages.scss'
import '@/styles/social.scss'
import '@/styles/blog.scss'
import "@/styles/prism/prism.css"
import "@/styles/home.scss"
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
