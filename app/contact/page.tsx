'use client';
import React from 'react';
import { marked } from 'marked';
import { dateTime, emailValidate } from 'utils/utils';
import { toast } from 'react-toastify';

interface EmailData {
    name: string;
    email: string;
    message: string;
}

export default function Credits() {
    const [mail, setMail] = React.useState(false);
    const sendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const emailData: EmailData = {
            name: e.currentTarget.author.value,
            email: e.currentTarget.email.value,
            message: `
    <style>
      body{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        border: 3px solid #000;
        font-size: 1.5rem;
        padding: 1rem;
        margin: 1rem;
      }
    </style>
    <h1>${e.currentTarget.author.value} sent you a mail!</h1>
    <p>
      This Mail was given to Noob Mailer at ${dateTime()}.
    </p>
    <p>You can contact ${e.currentTarget.author.value} at ${
                e.currentTarget.email.value
            }</p>
    <p>
      This is the message:
    </p>
    ${marked.parse(e.currentTarget.message.value)}
    <p>
      Always checking for new mails,
      <br />
      Noob Mailer
    </p>
  `,
        };
        if (!emailValidate(emailData.email)) {
            toast.error('Invalid Email');
            return;
        } else {
            toast.info('Sending Email');
        }
        fetch('/api/v2/mail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                emailData,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setMail(true);
                toast.success('Email Sent');
            })
            .catch((err) => {
                console.log(err);
                typeof window !== 'undefined' &&
                    alert('An error occurred. Please try again later.');
            });
    };
    const ranColor = () => {
        const colors = ['green', 'yellow', 'pink'];
        return colors[Math.floor(Math.random() * colors.length)];
    };
    return (
        <>
            <div className="normalize">
                <div
                    style={{
                        marginTop: '8vw',
                    }}
                    className={`page-div content-div-${ranColor()}`}
                >
                    <h1 className="jello">Contact The Noob</h1>
                    <form
                        className="contact-div"
                        onSubmit={sendMail}
                        method="POST"
                    >
                        <p>
                            Enter Your Name: Just use anonymous if you don't
                            want to reveal your name.
                        </p>
                        <input
                            placeholder="Enter Your Name"
                            required
                            type="text"
                            name="author"
                            id="author"
                        />
                        <p>Enter a valid Email: I'll be sending you a mail</p>
                        <input
                            placeholder="Enter A valid Email"
                            required
                            type="text"
                            name="email"
                            id="email"
                        />
                        <p>
                            Enter The Content of the message: Markdown is
                            supported.
                        </p>
                        <textarea
                            placeholder="Leave a message for me"
                            required
                            name="message"
                            id="message"
                            cols={30}
                            rows={5}
                        ></textarea>
                        <p></p>
                        <input type="submit" value="Send Message" />
                    </form>
                    {mail && (
                        <>
                            <h2>Thanks For Contacting Me!</h2>
                            <p>
                                I will get back to you as soon as possible.
                                Please be patient and don't spam me. You'll be
                                receiving a mail from me soon at the email you
                                provided. So as to not spam you, I will only
                                send you one mail. It's be from{' '}
                                <em>noobscience@duck.com</em>. So, be on the
                                lookout for it.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
