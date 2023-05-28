export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <title>NoobScience | Student and Open Source Enthusiast</title> 
            <head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="theme-color" content="#ffd845" />
                <meta name="title" content="NoobScience" />
                <meta
                    name="description"
                    content="Hi! I am Ishan. I am a Student and Open Source Enthusiast. This is my personal portfolio website. I Like to Code Stuff. Check out my work!"
                />
                <meta name="title" content="NoobScience" />
                <meta
                    name="keywords"
                    content="noobscience, noob science, NoobScience, newtoallofthis123, technology, website"
                />
                <meta name="robots" content="index, follow, archive" />
                <meta name="language" content="English" />
                <meta name="author" content="NoobScience" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta
                    property="twitter:url"
                    content="https://noobscience.rocks"
                />
                <meta property="twitter:title" content="NoobScience" />
                <meta
                    property="twitter:description"
                    content="Student and Open Source Enthusiast. I Like to Code Stuff. Check out my work!"
                />
                <meta
                    property="twitter:image"
                    content="https://noobscience.rocks/assets/banner.png"
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://noobscience.rocks/" />
                <meta property="og:title" content="NoobScience" />
                <meta
                    property="og:description"
                    content="Student and Open Source Enthusiast. I Like to Code Stuff. Check out my work!"
                />
                <meta
                    property="og:image"
                    content="https://noobscience.rocks/assets/banner.png"
                />
                <link rel="apple-touch-icon" href="/logo192.png" />
                <link rel="canonical" href="https://noobscience.rocks" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="mask-icon" href="/favicon.ico" color="#0f0f28" />
                <link
                    href="https://unpkg.com/aos@2.3.1/dist/aos.css"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Montserrat:wght@400;700&family=Scheherazade+New:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"
                ></link>
            </head>
            {children}
        </html>
    );
}
