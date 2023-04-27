//? Global CSS
//! All CSS files are imported here
//* No other component uses CSS files
import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/pages.scss'
import '@/styles/specials.scss'
import '@/styles/admin.scss'
import '@/styles/social.scss'

//? Third Party CSS I borrowed from the internet
import '@/styles/third_party.scss'

//? Modules
//? Animates.css
import 'animate.css';
//? Highlight.js
import '@/styles/highlight.js/monokai-sublime.css'

//? Vercel Analytics
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
