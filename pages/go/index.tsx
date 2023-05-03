import React from 'react';
import Link from 'next/link';
import Layout from '@components/layout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function NoGo() {
    // FIXME: Unable to import this function from utils
    //! This is a temporary fix
    //* This function generates a random hash that is used for the short url
    const ranHash = (): string => {
        let hash = '';
        const characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (let i = 0; i < 6; i++) {
            hash += characters.charAt(
                Math.floor(Math.random() * charactersLength)
            );
        }

        return hash;
    };

    const copy = () => {
        navigator.clipboard.writeText('https://noobscience.rocks/' + link);
        toast('Copied to clipboard');
    };

    const [link, setLink] = React.useState<string>('');
    const addGo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = e.currentTarget.url.value;
        const slug = ranHash();
        setLink('/go/' + slug);
        copy();
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
                pauseOnHover
            />
            <div className="normalize">
                <div className="page-div">
                    <div
                        style={{
                            border: 0,
                        }}
                        className="admin_div"
                    >
                        <div>
                            <form onSubmit={addGo} method="POST">
                                <h1>URL Shortener</h1>
                                <p>Powered By NoobScience</p>
                                <input type="text" name="url" id="url" />
                                <button type="submit">Submit</button>
                            </form>
                            {link && (
                                <div>
                                    <button className="fancy_btn">
                                        Link is: <Link href={link}>{link}</Link>
                                    </button>
                                </div>
                            )}
                        </div>
                        <p>
                            This is a simple URL Shortener that uses Next.js and
                            MongoDB. Hosted under my site, it is mostly for
                            personal use. But, you are welcome to use it. Just
                            no custom URLs. Mostly since they are used for
                            malicious purposes. I am not responsible for any
                            links. I also cannot guarantee that the links will
                            work. I might delete them if I feel like it. So,
                            don't use this for anything important. With that
                            said, enjoy!
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
