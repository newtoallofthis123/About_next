import React from 'react'
import { Seo } from '@/components/seo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ranHash } from '@/utils/utils';
import Link from 'next/link';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function Add() {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [link, setLink] = React.useState('')
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === NS_PWD) {
            setAuth(true)
            toast("Welcome back Admin. We missed you 😎")
        }
        else {
            toast("Wrong Password! Are you a Hacker? 🧑‍💻")
        }
    }

    const addLink = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        const link = e.target.link.value
        fetch('/api/v1/links', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content, link })
        }).then(() => { toast("Successfully posted Link") }).catch(() => { toast("Error posting Link") })
    }

    const addGo = (e) => {
        e.preventDefault()
        const url = e.target.url.value
        let slug = e.target.slug.value
        if (slug === "") {
            toast("generating slug...")
            slug = ranHash()
            setLink("/go/" + slug)
        }
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
        <div>
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
            {
                (auth) ? (
                    <div className='admin_div'>
                        <Seo title="Admin Page"></Seo>
                        <h1>Admin</h1>
                        <p>
                            Other Pages
                        </p>
                        <nav>
                            <Link href='admin/updates'>Updates</Link> <Link href='/admin/journal'>Journal</Link> <Link href='/admin/view'>View</Link>
                        </nav>
                        <div>
                            <h2>Add a Link</h2>
                            <p>
                                Add a link to the links page. This will be shown on the links page.
                            </p>
                            <form onSubmit={addLink} method="POST">
                                <p>Name</p>
                                <input type="text" name="name" id="name" />
                                <p>Content</p>
                                <textarea name="content" id="content" cols="30"></textarea>
                                <p></p>
                                <p>Link</p>
                                <input type="text" name="link" id="link" /><p></p>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                        <div>
                            <h2>Add a go link</h2>
                            <p>
                                Add a redirection link. This is sort of like a custom url shortener.
                            </p>
                            <form onSubmit={addGo} method="POST">
                                <p>Url</p>
                                <input type="text" name="url" id="url" />
                                <p>Slug</p>
                                <input type="text" name="slug" id="slug" />
                                <p></p>
                                <button type="submit">Submit</button>
                            </form>
                            <Link href={link}>{ link}</Link>
                        </div>
                    </div>
                ) : (
                    <div className='password_div'>
                        <Seo title="Login to view admin page"></Seo>
                        <h1>Admin Page!</h1>
                        <form onSubmit={handleSubmit}>
                            <p>Enter Your Password</p>
                            <input type="password" name="password" id="password" onChange={handlePassword} />
                            <p></p>
                            <button type="submit">Submit</button>
                        </form>
                            <p>
                                Hey! First off, Hi! Thanks for your interest in the site.
                                I use this page for the admin stuff. If you are a hacker, you can try to hack me.
                                If you are a friend, you can try to get the password from me.
                            </p>
                            <p>
                                With that said, If you are indeed able to hack into the site, please don't do anything bad.
                                I am not a big company, I am just a student trying to learn new things.
                                So, just report it to me and I will fix it.
                                I have a lot to learn, so please don't be mean.
                            </p>
                    </div>
                )
            }
        </div>
    )
}