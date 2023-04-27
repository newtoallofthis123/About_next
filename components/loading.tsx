import Head from 'next/head'

export default function LoadingScreen() {
    return (
        <div className="loader">
            <Head>
                <title>Loading...</title>
            </Head>
            <div className="loader-text">
                Can You Please Wait?
                <p>
                    NextJS is getting items from a remote MongoDB database.
                </p>
            </div>
            <div className="loader-bar"></div>
        </div>
  )
}
