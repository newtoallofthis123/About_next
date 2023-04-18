import '@/styles/globals.scss'
import '@/styles/home.scss'
import '@/styles/pages.scss'
import '@/styles/specials.scss'
import '@/styles/admin.scss'
import '@/styles/social.scss'

// Third Party CSS I borrowed from the internet
import '@/styles/third_party.scss'

// Modules
import 'animate.css';

import '@/styles/highlight.js/monokai-sublime.css'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
