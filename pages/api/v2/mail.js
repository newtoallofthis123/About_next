// TODO: Add a captcha to prevent spam
// FIXME: Migrate to typescript
//? This is the API route for sending emails from the contact form on the website.
//? It uses nodemailer to send the email to my personal email address.
//* You can only use this in post requests.
//* The body of the request should be a JSON object with the following structure:
//* {
//*     emailData: {
//*         name: "Your name",
//*         message: "Your message",
//*     }
//* }
//! This is a public API route, so don't put any sensitive information in the request body.
//! This API route is not protected by rate limiting, so don't spam it.

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { emailData } = req.body;
        const message = emailData.message;
        const name = emailData.name;
        const email = emailData.email;
        if (!name || !message) {
            res.status(400).json({ error: "Please fill out all fields." });
        } else {
            ;
            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.MAIL_EMAIL,
                    pass: process.env.MAIL_PASSWORD,
                },
            });
            const mailData = {
                from: process.env.MAIL_EMAIL,
                to: "noobscience123@gmail.com", // This is my public email address
                subject: `Hey Noob! You've got mail from ${name}`,
                html: message,
            };
            transporter.sendMail(mailData, function (err, info) {
                if (err) {
                    res.status(500).json({ error: "Internal server error." });
                } else {
                    res.status(200).json({ message: "Message sent successfully." });
                }
            });
        }
    }
    else {
        //! Only POST requests are allowed.
        res.status(400).json({ error: "Invalid request method." });
    }
}