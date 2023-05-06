import React from 'react'
import { Seo } from '@/components/seo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { marked } from 'marked';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function EditAdmin() {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [edit, setEdit] = React.useState(false)
    const [data, setData] = React.useState({})
    const [type, setType] = React.useState('')
    const [id, setId] = React.useState('')
    const [name, setName] = React.useState('')
    const [content, setContent] = React.useState('')
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handlePwdSubmit = (e) => {
        e.preventDefault()
        if (password === NS_PWD) {
            setAuth(true)
            toast("Welcome back Admin. We missed you 😎")
        }
        else {
            toast("Wrong Password! Are you a Hacker? 🧑‍💻")
        }
    }

    const handleHashSubmit = (e) => {
        e.preventDefault()
        const type = e.target.type.value
        setType(type)
        const edit_hash = e.target.hash.value
        fetch(`/api/v1/${type}`)
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error("Error fetching data")
                } else {
                    const item = data.find(item => item.hash === edit_hash)
                    if (item) {
                        setEdit(true)
                        setData(item)
                        setId(item._id)
                        setName(item.name)
                        setContent(item.content)
                    } else {
                        setEdit(false)
                        setName('')
                        setData({})
                        setId('')
                        setContent('')
                        toast.error("No item found")
                    }
                }
            })
            .catch(err => {
                toast("Error fetching data")
            })
    }
    const handleEditSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        let link = ''
        if (type === 'links')
            link = e.target.link.value
        else
            link = ''
        fetch(`/api/v1/delete/${type}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    toast.error("Error deleting data")
                } else {
                    toast.info("Data deleted")
                    fetch(`/api/v1/${type}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: name,
                            content: content,
                            link: link
                        })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.error) {
                                toast.error("Error adding data")
                            } else {
                                toast.success("Data Updated")
                            }
                        })
                        .catch(err => {
                            toast.error("Error adding data")
                        })
                }
            })
            .catch(err => {
                toast.error("Error deleting data")
            })
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
                        <Seo title="Admin Page"></Seo>
                        <h1>Edit the Contents</h1>
                        <p>Here you can edit the contents of the site.</p>
                        <form onSubmit={handleHashSubmit}>
                            <p>Enter the hash of the item you want to edit</p>
                            <select name="type" id="type">
                                <option value="updates">Page</option>
                                <option value="links">Links</option>
                                <option value="journal">Journal</option>
                            </select>
                            <input type="text" name="hash" id="hash" />
                            <button type="submit">Submit</button>
                        </form>
                        {
                            (edit) ? (
                                <div>
                                    <h2>Edit the {type}</h2>
                                    <form onSubmit={handleEditSubmit}>
                                        <p>Enter the title</p>
                                        <input type="text" name="name" onChange={(e) => {setName(e.target.value)}} id="name" value={name} />
                                        <p>Enter the content</p>
                                        <textarea name="content" id="content" cols="30" rows="10" onChange={(e) => {setContent(e.target.value)}} value={content}></textarea>
                                        {
                                            (type === 'links') ? (
                                                <div>
                                                    <p>Enter the link</p>
                                                    <input type="text" name="link" id="link" defaultValue={data.url} />
                                                </div>
                                            ) : (
                                                <div></div>
                                            )
                                        }
                                        <button type="submit">Submit</button>
                                    </form>
                                    <h2>Preview</h2>
                                    <div className='md_div' dangerouslySetInnerHTML={{__html: marked.parse(content)}}>

                                    </div>
                                </div>
                            ): (
                                <div></div>
                            )
                        }
                    </div>
                ) : (
                    <div className='password_div'>
                        <Seo title="Login to view admin page"></Seo>
                        <h1>Admin Page!</h1>
                        <form onSubmit={handlePwdSubmit}>
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