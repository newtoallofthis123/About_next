import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { marked } from 'marked';
import { ranHash, dateHash, hypens } from '@utils/utils';

const NS_PWD = process.env.NEXT_PUBLIC_NS_PWD;

export default function NewsAdd() {
    const [mode, setMode] = React.useState('go');
    const [auth, setAuth] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [link, setLink] = React.useState('');
    const [content, setContent] = React.useState('');
    const [time, setTime] = React.useState(new Date().toLocaleString());
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === NS_PWD) {
            setAuth(true);
            toast('Welcome back Admin. We missed you 😎');
        } else {
            toast('Wrong Password! Are you a Hacker? 🧑‍💻');
        }
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const handleTime = () => {
        setTime(new Date().toLocaleString());
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            handleTime();
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const addLink = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const content = e.target.content.value;
        const author = e.target.author.value;
        const date = new Date().toUTCString();
        fetch('/api/v1/updates', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, content, author, date }),
        })
            .then(() => {
                toast('Successfully posted Link');
                setLink(hypens(name));
            })
            .catch(() => {
                toast('Error posting Link');
            });
    };

    const addJournal = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const content = e.target.content.value;
        const hash = dateHash();
        const time = new Date().toLocaleString();
        const date = new Date().toUTCString();
        fetch('/api/v1/journal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, content, hash, time, date }),
        })
            .then(() => {
                toast('Successfully posted Journal');
                setLink('/journal/' + hash);
            })
            .catch(() => {
                toast('Error posting Journal');
            });
    };

    const addCode = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const title = e.currentTarget.code_title.value;
        const content = e.currentTarget.content.value;
        const lang = e.currentTarget.code_lang.value;
        const author = e.currentTarget.author.value;
        const hash = ranHash();
        fetch('/api/v2/code/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title: title, content: content, lang: lang, hash: hash, author: author }),
        })
            .then(() => {
                toast('Successfully posted Code');
                setLink('/code/' + hash);
            })
            .catch(() => {
                toast('Error posting Code');
            });
    };

    const addGo = (e) => {
        e.preventDefault();
        const url = e.target.url.value;
        let slug = e.target.slug.value;
        if (slug === '') {
            toast('generating slug...');
            slug = ranHash();
            setLink('/go/' + slug);
        }
        setLink('/go/' + slug);
        fetch('/api/v1/go', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ url, slug }),
        })
            .then(() => {
                toast('Successfully posted GO');
            })
            .catch(() => {
                toast('Error posting GO');
            });
    };

    const addNote = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const content = e.target.content.value;
        const category = e.target.category.value;
        fetch('/api/v2/notes/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, content, category }),
        })
            .then(() => {
                toast('Successfully posted Note');
                setLink('/notes/' + hypens(title));
            })
            .catch(() => {
                toast('Error posting Note');
            });
    };

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
            {auth ? (
                <div className="admin_div">
                    <h1>Hey Noobie!</h1>
                    <form>
                        <select
                            onChange={(e) => {
                                setMode(e.target.value);
                            }}
                        >
                            <option value="go">Add a New Link</option>
                            <option value="updates">Add a new update</option>
                            <option value="notes">Add a new note</option>
                            <option value="journal">Add a new journal</option>
                            <option value="code">Add a new code snippet</option>
                        </select>
                    </form>
                    {mode === 'go' && (
                        <div>
                            <form onSubmit={addGo} method="POST">
                                <p>Url</p>
                                <input type="text" name="url" id="url" />
                                <p>Slug</p>
                                <input type="text" name="slug" id="slug" />
                                <p></p>
                                <button type="submit">Submit</button>
                            </form>
                            <Link href={link}>{link}</Link>
                        </div>
                    )}
                    {mode === 'updates' && (
                        <div>
                            <h2>Write a new update</h2>
                            <p>The date and time presently is {time}</p>
                            <form onSubmit={addLink} method="POST">
                                <p>
                                    <b>Name</b>: Enter the name of the update.
                                    This will be the title of the update.
                                </p>
                                <input type="text" name="name" id="name" />
                                <p>
                                    <b>Author</b>: Enter your name or nickname.
                                    This will be displayed as the author of the
                                    update.
                                </p>
                                <input type="text" name="author" id="author" />
                                <p>
                                    <b>Content</b>: Be sure to write the content
                                    of the update in Markdown. You can use the
                                    preview to see how it will look.
                                </p>
                                <textarea
                                    onChange={handleContent}
                                    value={content}
                                    name="content"
                                    id="content"
                                    rows={20}
                                    cols={30}
                                ></textarea>
                                <p></p>
                                <div>
                                    <h2>Preview of your update</h2>
                                    <p>
                                        By submitting, you agree to the terms
                                        and conditions of the site. And if you
                                        are not the owner, you agree the owner
                                        is not responsible for any damages.
                                    </p>
                                    <div
                                        className="md_div"
                                        dangerouslySetInnerHTML={{
                                            __html: marked.parse(content),
                                        }}
                                    ></div>
                                </div>
                                <p></p>
                                <button style={{}} type="submit">
                                    Submit
                                </button>
                            </form>
                            {link ? (
                                <div>
                                    <Link href={'/updates/' + link}>
                                        {link}
                                    </Link>
                                </div>
                            ) : (
                                <></>
                            )}
                        </div>
                    )}
                    {mode === 'notes' && (
                        <div>
                            <h2>Write a new note</h2>
                            <form onSubmit={addNote} method="POST">
                                <p>
                                    <b>Title</b>: Enter the title of the note.
                                </p>
                                <input type="text" name="title" id="title" />
                                <p>
                                    <b>Category</b>: Enter the category of the
                                    note.
                                </p>
                                <input
                                    type="text"
                                    name="category"
                                    id="category"
                                />
                                <p>
                                    <b>Content</b>: Be sure to write the content
                                    of the note in Markdown. You can use the
                                    preview to see how it will look.
                                </p>
                                <textarea
                                    onChange={handleContent}
                                    value={content}
                                    name="content"
                                    id="content"
                                    rows={20}
                                    cols={30}
                                ></textarea>
                                <p></p>
                                <div>
                                    <h2>Preview of your note</h2>
                                    <p>
                                        By submitting, you agree to the terms
                                        and conditions of the site. And if you
                                        are not the owner, you agree the owner
                                        is not responsible for any damages.
                                    </p>
                                    <div
                                        className="md_div"
                                        dangerouslySetInnerHTML={{
                                            __html: marked.parse(content),
                                        }}
                                    ></div>
                                </div>
                                <p></p>
                                <button
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <p></p>
                                <Link href={link}>{link}</Link>
                            </form>
                        </div>
                    )}
                    {mode === 'journal' && (
                        <div>
                            <h2>Write a new journal entry</h2>
                            <form onSubmit={addJournal} method="POST">
                                <p>
                                    <b>Title</b>: Enter the title of the journal
                                    entry.
                                </p>
                                <input type="text" name="name" id="name" />
                                <p>
                                    <b>Content</b>: Be sure to write the content
                                    of the journal entry in Markdown. You can
                                    use the preview to see how it will look.
                                </p>
                                <textarea
                                    onChange={handleContent}
                                    value={content}
                                    name="content"
                                    id="content"
                                    rows={20}
                                    cols={30}
                                ></textarea>
                                <p></p>
                                <div>
                                    <h2>Preview of your journal entry</h2>
                                    <p>
                                        By submitting, you agree to the terms
                                        and conditions of the site. And if you
                                        are not the owner, you agree the owner
                                        is not responsible for any damages.
                                    </p>
                                    <div
                                        className="md_div"
                                        dangerouslySetInnerHTML={{
                                            __html: marked.parse(content),
                                        }}
                                    ></div>
                                </div>
                                <p></p>
                                <button
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <p></p>
                                {link ? (
                                    <div>
                                        <Link href={link}>{link}</Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </form>
                        </div>
                    )}
                    {mode === 'code' && (
                        <div>
                            <h2>Write a new code snippet</h2>
                            <form onSubmit={addCode} method="POST">
                                <p>
                                    <b>Title</b>: Enter the title of the code
                                    snippet.
                                </p>
                                <input
                                    type="text"
                                    name="code_title"
                                    id="title"
                                />
                                <p>
                                    <b>Language</b>: Enter the language of the
                                    code snippet.
                                </p>
                                <input type="text" name="code_lang" id="lang" />
                                <p>
                                    <b>Author:</b>: Enter your name
                                </p>
                                <input type="text" name="author" id="lang" />
                                <p>
                                    <b>Content</b>: Be sure to write the content
                                    of the code snippet only.
                                </p>
                                <textarea
                                    onChange={handleContent}
                                    value={content}
                                    name="content"
                                    id="content"
                                    rows={20}
                                    cols={30}
                                ></textarea>
                                <p></p>
                                <p></p>
                                <button
                                    style={{
                                        backgroundColor: 'red',
                                        color: 'white',
                                        border: 'none',
                                        padding: '10px',
                                        borderRadius: '5px',
                                    }}
                                    type="submit"
                                >
                                    Submit
                                </button>
                                <p></p>
                                {link ? (
                                    <div>
                                        <Link href={link}>{link}</Link>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </form>
                        </div>
                    )}
                </div>
            ) : (
                <div className="page-div admin_div">
                    <h1>Admin Page!</h1>
                    <form onSubmit={handleSubmit}>
                        <p>Enter Your Password</p>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={handlePassword}
                        />
                        <p></p>
                        <button className="fancy_btn" type="submit">
                            Submit
                        </button>
                    </form>
                    <p>
                        Welcome to where the magic happens. This is the admin
                        page. If you want to add a new update, you need to enter
                        the password. If you don't know the password, you can
                        ask the owner. Hence this is sort of a protected page.
                    </p>
                    <p>
                        Sorry for the inconvenience. And to all my hacker
                        friends <b>TRY HACK ME</b>
                    </p>
                    <p>
                        No seriously, try hack me. I am still a noobie and I
                        need to learn more. So, if you do hack me, please don't
                        do anything bad and just tell me how you did it. You can
                        find my <Link href="/social">links</Link> here.
                    </p>
                    <p>
                        That being said, if you are a friend I gave the password
                        to, you can enter it here. But, be sure to not share it
                        with anyone else and audit the update before posting it.
                    </p>
                    <p>Have a nice day!</p>
                </div>
            )}
        </div>
    );
}
