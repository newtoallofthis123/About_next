import Layout from "@/components/layout";
import React from "react";
import {marked} from "marked";
import {dateTime} from "@/utils/utils";

export default function Credits() {
    const [mail, setMail] = React.useState(false);
    const sendMail = async (e) => {
        e.preventDefault();
        const emailData = {
            name: e.target.name.value,
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
    <h1>${e.target.name.value} sent you a mail!</h1>
    <p>
      This Mail was given to Noob Mailer at ${dateTime()}.
    </p>
    <p>
      This is the message:
    </p>
    ${marked.parse(e.target.message.value)}
    <p>
      Always checking for new mails,
      <br />
      Noob Mailer
    </p>
  `,
        };
        fetch("/api/v2/mail", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                emailData,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                setMail(true)
            })
            .catch((err) => {
                console.log(err);
                (typeof window !== "undefined") && alert("An error occurred. Please try again later.");
            });
    };
    const ranColor = () => {
        const colors = [
            "green",
            "yellow",
            "pink"
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }
    return (
        <Layout>
            <div className="normalize">
                <div style={{
                    marginTop: "8vw",
                }} className={`page-div content-div-${ranColor()}`}>

                    <h1 className="jello" hello>
                        Contact The Noob
                    </h1>
                    <form className="contact-div" onSubmit={sendMail} method="POST">
                        <p>
                            Enter Your Name:
                            Just use anonymous if you don't want to reveal your name.
                        </p>
                        <input placeholder="Enter Your Name" required type="text" name="name" id="name" />
                        <p>
                            Enter The Content of the message: Markdown is supported.
                        </p>
                        <textarea placeholder="Leave a message for me" required name="message" id="message" cols="30"></textarea>
                        <p></p>
                        <input type="submit" value="Send Message" />
                    </form>
                    {
                        mail && (
                            <>
                            <h2>
                                Thanks For Contacting Me!
                            </h2>
                                <p>
                                    I will get back to you as soon as possible.
                                    Please be patient and don't spam me.
                                    You'll be receiving a mail from me soon at the email you provided.
                                    So as to not spam you, I will only send you one mail.
                                    It's be from <em>noobscience@duck.com</em>.
                                    So, be on the lookout for it.
                                </p>
                            </>
                        )
                    }
                </div>
            </div>
        </Layout>
    )
}
