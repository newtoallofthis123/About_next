import React from 'react'
import { Seo } from '@/components/seo'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { dateHash} from '@/utils/utils';
import Link from 'next/link';
import { marked } from 'marked';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD

export default function NewsAdd() {
    const [auth, setAuth] = React.useState(false)
    const [password, setPassword] = React.useState('')
    const [link, setLink] = React.useState('')
    const [content, setContent] = React.useState('')
    const [time, setTime] = React.useState(new Date().toLocaleString())
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

    const handleContent = (e) => {
        setContent(e.target.value)
    }

    const handleTime = () => {
        setTime(new Date().toLocaleString())
    }

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleTime()
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const addLink = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const content = e.target.content.value
        const link = e.target.link.value
        fetch('/api/v1/news', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content, link })
        }).then(() => {
            toast("Successfully posted Link")
            setLink(dateHash())
        }).catch(() => { toast("Error posting Link") })
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
                        <Seo title="Add Today's News"></Seo>
                        <h1>Hey Noobie!</h1>
                        <div>
                            <h2>Write Today's News</h2>
                            <p>
                                The date and time presently is {time}
                            </p>
                            <p>
                                The link to the news will be <b>news/{dateHash()}</b>
                            </p>
                            <form onSubmit={addLink} method="POST">
                                <p>Name</p>
                                <input style={{ width: "100%", }} type="text" name="name" id="name" />
                                <p>Content</p>
                                <textarea style={{ width: "100%", }} onChange={handleContent} value={content} name="content" id="content" rows="20" cols="30"></textarea>
                                <p></p>
                                <p>Link</p>
                                <input style={{ width: "100%",}} type="text" name="link" id="link" /><p></p>
                                <div>
                                    <h2>Preview of Today's News</h2>
                                    <p>
                                        The date and time presently is {time} and this is the preview of the news.
                                        Be sure to audit the news before posting it.
                                        Also, the link to the news will be <b>news/{dateHash()}</b>
                                    </p>
                                    <p>
                                        By submitting, you agree to the terms and conditions of the site.
                                        And if you are not the owner, you agree the owner is not responsible for any damages.
                                    </p>
                                    <div className="md_div" dangerouslySetInnerHTML={{ __html: marked.parse(content) }}></div>
                                </div>
                                <p></p>
                                <button style={{
                                    width: "100%",
                                }} type="submit">Submit</button>
                            </form>
                            {
                                (link) ? (
                                    <div>
                                        <Link href={"/news/"+link}>
                                            {link}
                                        </Link>
                                    </div>
                                ) : (
                                    <></>
                                )
                            }
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