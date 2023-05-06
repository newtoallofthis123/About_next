"use client";
import React from 'react';
import { dateUTC, ranHash } from '@utils/utils';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

async function addSup(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = e.currentTarget.sup_title.value;
    const author = e.currentTarget.author.value;
    const theme = e.currentTarget.theme.value;
    const content = e.currentTarget.content.value;
    const date = dateUTC();
    const hash = ranHash();
    const res = await fetch('/sup/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title,
            author,
            theme,
            content,
            date,
            hash,
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.acknowledged) {
                toast.success('Sup Added');
                setTimeout(() => {
                    if(typeof window !== 'undefined')
                        window.location.replace(`/sup/${hash}`
                    );
                }, 1000);
            } else {
                toast.error('Sup Failed');
            }
        });
}

export default async function SupAdmin() {
    return (
        <>
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
            <div className="normalize page-div admin_div">
                <h1>Add a Sup Bruh</h1>
                <form onSubmit={addSup}>
                    <p>Enter The Title</p>
                    <input type="text" name="sup_title" />
                    <p>Your Name (or leave blank)</p>
                    <input type="text" name="author" />
                    <p>Sup Theme</p>
                    <select name="theme" id="theme">
                        <option value="default">Default</option>
                        <option value="dark">Dark</option>
                        <option value="light">Light</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="pink">Pink</option>
                        <option value="yellow">Yellow</option>
                        <option value="purple">Purple</option>
                    </select>
                    <p>The content in safe markdown</p>
                    <textarea rows={10} cols={10} name="content" />
                    <p></p>
                    <button className="fancy_btn" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}
