import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#f1fa00" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="title" content="NoobScience"/>
        <meta name="description" content="Hi! I am Ishan. I am a Student and Open Source Enthusiast. This is my personal portfolio website. I Like to Code Stuff. Check out my work!"/>
        <meta name="title" content="NoobScience"/>
        <meta name="keywords" content="noobscience, NoobScience, newtoallofthis123, technology, website"/>
        <meta name="robots" content="index, follow, archive"/>
        <meta name="language" content="English"/>
        <meta name="author" content="NoobScience"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://new.noobscience.rocks/" />
        <meta property="og:title" content="NoobScience"/>
        <meta property="og:description" content="Student and Open Source Enthusiast. I Like to Code Stuff. Check out my work!"/>
        <meta property="og:image" content="/assets/banner.png"/>
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="canonical" href="https://new.noobscience.rocks" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/favicon.ico" color="#f1fa00" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Montserrat:wght@100;400&family=Raleway&family=Poppins&family=Roboto+Condensed:wght@700&display=swap"
          rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
