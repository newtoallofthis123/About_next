import React from 'react'
import { Seo } from '@components/seo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function DeleteAdmin() {
    const [mode, setMode] = React.useState('go')
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [link, setLink] = React.useState('')
    const [hash, setHash] = React.useState('')
    const [id, setId] = React.useState('')
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
    const handleDelete = (topic) => (e) => {
        // const choice = window.confirm("Are you sure you want to delete this item?")
        // if (!choice)
        // return
        e.preventDefault();
        fetch(`/api/v1/get/${topic}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: hash }),
        }).then(
            (res) => res.json()
        ).then(
            (data) => {
                if (data.error) {
                    toast.error("Something went wrong")
                } else {
                    setId(data._id)
                }
            }
        ).catch(
            (err) => {
                console.log(err)
                toast.error("Error posting Link")
            }
        )
        if (!id) {
            toast.error("Something went wrong")
            return
        }
        fetch(`/api/v1/delete/${topic}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.error) {
                    toast.error("Something went wrong")
                } else {
                    toast.success("Successfully Deleted")
                }
            })
            .catch((err) => {
                toast.error("Error posting Link")
            }
            )
    }

    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            {
                (auth) ? (
                    <div className='page-div admin_div'>
                        <h1>Hey Noobie!</h1>
                        <form method="post">
                            <select onChange={(e) => {
                                setMode(e.target.value)
                            }} onSubmit={() => { handleDelete(mode) }}>
                                <option value="go">Delete a Link</option>
                                <option value="updates">Delete an update</option>
                                <option value="notes">Delete a note</option>
                            </select>
                            <p>
                                Hash/Slug: <b>{link}</b>
                            </p>
                            <input type="text" name="hash" onChange={(e) => { setHash(e.target.value) }} id="hash" />
                            <p></p>
                            <button type="submit" onClick={handleDelete(mode)}>Delete</button>
                        </form>
                    </div>
                ) : (
                    <div className='page-div admin_div'>
                        <Seo title="Login to view admin page"></Seo>
                        <h1>Admin Page!</h1>
                        <form onSubmit={handleSubmit}>
                            <p>Enter Your Password</p>
                            <input type="password" name="password" id="password" onChange={handlePassword} />
                            <p></p>
                            <button type="submit">Submit</button>
                        </form>
                        <p>
                            Welcome to where the magic happens. This is the admin page.
                            If you want to add a new update, you need to enter the password.
                            If you don't know the password, you can ask the owner.
                            Hence this is sort of a protected page.
                        </p>
                        <p>
                            Sorry for the inconvenience.
                            And to all my hacker friends <b>TRY HACK ME</b>
                        </p>
                        <p>
                            No seriously, try hack me. I am still a noobie and I need to learn more.
                            So, if you do hack me, please don't do anything bad and just tell me how you did it.
                            You can find my <Link href="/social">links</Link> here.
                        </p>
                        <p>
                            That being said, if you are a friend I gave the password to, you can enter it here.
                            But, be sure to not share it with anyone else and audit the update before posting it.
                        </p>
                        <p>
                            Have a nice day!
                        </p>
                    </div>
                )
            }
        </div>
    )
}