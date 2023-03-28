import React from 'react'
import { Seo } from '@/components/seo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function Add() {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [edit, setEdit] = React.useState(false)
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password === NS_PWD) {
            setAuth(true)
            toast("Welcome Back Admin! We missed you :)")
        }
    }

    const updatePost = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        fetch('/api/v1/updates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content })
        }).then(() => { toast("Successfully posted Update") }).catch(() => { toast("Error posting Update") })
        return true
    }

    const getPost = (e) => {
        e.preventDefault()
        const name = e.target.edit_name.value
        fetch('/api/v1/get/updates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        }).then((res) => {
            console.log(res.data[0])
            if (res.status === 200) {
                setEdit(true)
                toast("Successfully got Update")
            } else {
                toast("Error getting Update")
            }
        }).catch(() => { toast("Error getting Update") })
        return true
    }

    return (
        (auth) ? (
            <div className='admin_div'>
                <Seo title="Admin Page"></Seo>
                <h1 style={{ textAlign: "center", padding: "12px", }}>Admin</h1>
                <ToastContainer />
                <h1>
                    DO NOT USE! WIP
                </h1>
                <div className='container'>
                    <div>
                        <h2>Add an Update</h2>
                        <div>
                                {
                                    (edit) ? (
                                        <div>
                                            <p>Name</p>
                                            <input type="text" name="name" id="name" />
                                            <p>Content</p>
                                            <textarea name="content" id="content" cols="30"></textarea>
                                            <p></p>
                                        </div>
                                    ) : (
                                            <div>
                                                <p>Name of Update</p>
                                                <form method='POST' onSubmit={getPost}>
                                                    <input type="text" name="edit_name" id="name" />
                                                    <button type="submit">Submit</button>
                                                </form>
                                            </div>
                                    )
                                }
                        </div>
                    </div>
                    <div>
                        <h2>Add an Update</h2>
                        <div>
                            <form onSubmit={updatePost} method="POST">
                                <p>Name</p>
                                <input type="text" name="name" id="name" />
                                <p>Content</p>
                                <textarea name="content" id="content" cols="30"></textarea>
                                <p></p>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div>
                        <h2>Delete an Update</h2>
                        <div>
                            <form onSubmit={updatePost} method="POST">
                                <p>Name</p>
                                <input type="text" name="name" id="name" />
                                <p></p>
                                <button type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
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