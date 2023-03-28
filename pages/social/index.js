import React from "react"
import Layout from "@/components/layout"
import Link from "next/link"

const Socials = () => {
    return (
    <Layout>
        <div className="social main-card">
            <h1 className="main-title">Ishan's Links</h1>
            <div>
                <button className="social-btn"><Link href="/social/github" className="btn-link"><i className="bi bi-github"></i> GitHub</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/twitter" className="btn-link"><i className="bi bi-twitter"></i> Twitter</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/yt" className="btn-link"><i className="bi bi-youtube"></i> YouTube</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/web" className="btn-link"><i className="bi bi-globe"></i> Website</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/blog" className="btn-link"><svg role="img" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><title>Hashnode</title><path d="M22.351 8.019l-6.37-6.37a5.63 5.63 0 0 0-7.962 0l-6.37 6.37a5.63 5.63 0 0 0 0 7.962l6.37 6.37a5.63 5.63 0 0 0 7.962 0l6.37-6.37a5.63 5.63 0 0 0 0-7.962zM12 15.953a3.953 3.953 0 1 1 0-7.906 3.953 3.953 0 0 1 0 7.906z" fill="#000"></path></svg> My Blog</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/ig" className="btn-link"><i className="bi bi-instagram"></i> Instagram</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/mail" className="btn-link"><i className="bi bi-envelope"></i> Public Mail</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/proton" className="btn-link"><svg role="img" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><title>ProtonMail</title><path d="M12 20.351s-1.096-.108-1.955-.705c-.86-.596-6.58-4.688-6.58-4.688v8.098S3.513 24 4.55 24h14.9c1.036 0 1.085-.942 1.085-.942v-8.1s-5.723 4.092-6.58 4.69c-.86.595-1.955.704-1.955.704zm0-20.35S4.925-.23 3.465 7.623v5.35s.06.572 1.67 1.735c1.607 1.162 5.773 4.436 6.867 4.436 1.088 0 5.254-3.273 6.865-4.437 1.607-1.164 1.668-1.737 1.668-1.737V7.62C19.075-.229 12 .003 12 .003zm4.846 10.536h-9.69V7.623C8.14 3.723 12 3.67 12 3.67s3.863.054 4.846 3.954z" fill="#000"></path></svg> Proton Mail</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/discord" className="btn-link"><i className="bi bi-discord"></i> Discord Server</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/twitch" className="btn-link"><i className="bi bi-twitch"></i> Twitch Streams</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/spotify" className="btn-link"><svg role="img" viewBox="0 0 24 24" width="24px" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" fill="#000"></path></svg> Spotify List</Link></button>
            </div>
            <div>
                <button className="social-btn"><Link href="/social/stack" className="btn-link">
                    <svg role="img" className="svg" viewBox="0 0 24 24" width="24px"
                        xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title>
                        <path
                            d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"
                            fill="#000"></path>
                    </svg> StackOverFlow</Link></button>
            </div>
        </div>
            <h2 style={{
            textAlign: "center",
        }}>
            The above page is a fork of <a href="https://links.noobscience.rocks" target="_blank" rel="noreferrer">Links</a>
        </h2>
    </Layout>
    );
}

export default Socials;