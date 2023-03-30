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
        fetch('/api/v1/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, content })
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
                        <Seo title="Add a New Journal Entry | Ishan's Journal"></Seo>
                        <h1>Hey Noobie!</h1>
                        <div>
                            <h2>Write a new update</h2>
                            <p>
                                The date and time presently is {time}
                            </p>
                            <form onSubmit={addLink} method="POST">
                                <p>
                                    <b>Name</b>:
                                    Enter the name of the update. This will be the title of the update.
                                </p>
                                <input style={{ width: "100%", }} type="text" name="name" id="name" />
                                <p>
                                    <b>Content</b>:
                                    Be sure to write the content of the update in Markdown. You can use the preview to see how it will look.
                                </p>
                                <textarea style={{ width: "100%", }} onChange={handleContent} value={content} name="content" id="content" rows="20" cols="30"></textarea>
                                <p></p>
                                <div>
                                    <h2>Preview of your Journal</h2>
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
                                        <Link href={"/journal/" + link}>
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