import React from 'react'
import { Seo } from '@/components/seo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function Add() {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [done, setDone] = React.useState(false)
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === NS_PWD) {
            setAuth(true)
        }
    }

    const updatePost = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        setDone(true)
        fetch('/api/v1/updates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content })
        }).then(() => { toast("Successfully posted Update") }).catch(() => { toast("Error posting Update") })
        return true
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
        const slug = e.target.slug.value
        fetch('/api/v1/go', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url, slug })
        }).then(() => { toast("Successfully posted GO") }).catch(() => { toast("Error posting GO") })
    }

    return (
        (auth) ? (
            <div className='admin_div'>
                <Seo title="Admin Page"></Seo>
                <h1>Admin</h1>
                <ToastContainer />
                <div>
                    <h2>Add an Update</h2>
                    <form onSubmit={updatePost} method="POST">
                        <p>Name</p>
                        <input type="text" name="name" id="name" />
                        <p>Content</p>
                        <textarea name="content" id="content" cols="30"></textarea>
                        <p></p>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div>
                    <h2>Add a Link</h2>
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
                    <form onSubmit={addGo} method="POST">
                        <p>Url</p>
                        <input type="text" name="url" id="url" />
                        <p>Slug</p>
                        <input type="text" name="slug" id="slug" />
                        <p></p>
                        <button type="submit">Submit</button>
                    </form>
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
            </div>
        )
    )
}