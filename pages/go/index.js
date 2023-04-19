import React from 'react'
import { Seo } from '@/components/seo'
import Link from 'next/link'
import Layout from '@/components/layout'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ranHash } from '@/utils/utils'

export default function NoGo() {
    const [link, setLink] = React.useState("")
    const addGo = (e) => {
        e.preventDefault()
        const url = e.target.url.value
        const slug = ranHash()
        setLink("/go/" + slug)
        fetch('/api/v1/go', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, slug })
        }).then(() => { toast("Successfully posted GO") }).catch(() => { toast("Error posting GO") })
    }
    return (
        <Layout>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <div className="normalize">
                <div className="page-div">
                    <div style={{
                        border: 0,
                    }} className="admin_div">
                        <div>
                            <form onSubmit={addGo} method="POST">
                                <h1>URL Shortener</h1>
                                <p>
                                    Powered By NoobScience
                                </p>
                                <input type="text" name="url" id="url" />
                                <button type="submit">Submit</button>
                            </form>
                            {link && <div>
                                <button className="fancy_btn">
                                    Link is: <Link href={link}>{link}</Link>
                                </button>
                            </div>}
                        </div>
                        <p>
                            This is a simple URL Shortener that uses Next.js and MongoDB.
                            Hosted under my site, it is mostly for personal use.
                            But, you are welcome to use it.
                            Just no custom URLs.
                            Mostly since they are used for malicious purposes.
                            I am not responsible for any links.
                            I also cannot guarantee that the links will work.
                            I might delete them if I feel like it.
                            So, don't use this for anything important.
                            With that said, enjoy!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
  )
}
