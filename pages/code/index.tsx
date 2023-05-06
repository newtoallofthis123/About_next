import Layout from '@components/layout';
import React from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { ranHash } from '@utils/utils';

type Props = {};

export default function Code({ }: Props) {
    const [link, setLink] = React.useState(''); 
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
            body: JSON.stringify({
                title: title,
                content: content,
                lang: lang,
                author: author,
                hash: hash,
            }),
        })
            .then(() => {
                toast('Successfully posted Code');
                setLink('/code/' + hash);
            })
            .catch(() => {
                toast('Error posting Code');
            });
    };
    return (
        <Layout>
            <div className="normalize">
                <div
                    style={{
                        backgroundColor: 'var(--violet)',
                    }}
                    className="page-div"
                >
                    <h1>Enter Cool Code Snippets</h1>
                    <h3>Warning: Only Cool ones are allowed.</h3>
                    <p>
                        Yep. Enter the code and boom. It's there. As easy as
                        that
                    </p>
                    <div style={{
                        margin: 'auto',
                    }} className='admin_div'>
                        <h2>Write a new code snippet</h2>
                        <form onSubmit={addCode} method="POST">
                            <p>
                                <b>Title</b>: Enter the title of the code
                                snippet.
                            </p>
                            <input type="text" name="code_title" id="title" />
                            <p>
                                <b>Language</b>: Enter the language of the code
                                snippet.
                            </p>
                            <select name="code_lang" id="code_lang">
                                <option value="javascript">Javascript</option>
                                <option value="python">Python</option>
                                <option value="c">C</option>
                                <option value="c++">C++</option>
                                <option value="java">Java</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="php">PHP</option>
                                <option value="sql">SQL</option>
                                <option value="ruby">Ruby</option>
                                <option value="go">Go</option>
                                <option value="rust">Rust</option>
                                <option value="kotlin">Kotlin</option>
                                <option value="swift">Swift</option>
                                <option value="typescript">Typescript</option>
                                <option value="dart">Dart</option>
                                <option value="scala">Scala</option>
                                <option value="r">R</option>
                                <option value="perl">Perl</option>
                                <option value="lua">Lua</option>
                                <option value="matlab">Matlab</option>
                                <option value="bash">Bash</option>
                                <option value="powershell">Powershell</option>
                                <option value="elixir">Elixir</option>
                                <option value="clojure">Clojure</option>
                                <option value="julia">Julia</option>
                                <option value="lisp">Lisp</option>
                                <option value="xml">XML</option>
                                <option value="yaml">YAML</option>
                                <option value="other">Other</option>
                            </select>
                            <p>
                                <b>Author</b>: Enter your name
                            </p>
                            <input type="text" name="author" id="lang" />
                            <p>
                                <b>Content</b>: Be sure to write the content of
                                the code snippet only.
                            </p>
                            <textarea
                                name="content"
                                id="content"
                                rows={20}
                                cols={30}
                                style={{
                                    fontFamily: 'monospace',
                                    fontSize: '1rem',
                                }}
                            ></textarea>
                            <p></p>
                            <p></p>
                            <button
                                type="submit"
                                className='fancy_btn'
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
                </div>
            </div>
        </Layout>
    );
}
