import nodemailer from 'nodemailer';
import { marked } from 'marked';
import { dateTime } from '@/utils/utils';

export default async function handler(req, res) {
    if(req.method === "POST") {
        const { emailData } = req.body;
        const message = emailData.message;
        const name = emailData.name;
        if(!name || !message) {
            res.status(400).json({ error: "Please fill out all fields." });
        } else {;
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
                to: "noobscience123@gmail.com",
                subject: `Hey Noob! You've got mail from ${name}`,
                html: message,
            };
            transporter.sendMail(mailData, function (err, info) {
                if(err) {
                    res.status(500).json({ error: "Internal server error." });
                } else {
                    res.status(200).json({ message: "Message sent successfully." });
                }
            });
        }
    }
    else {
        res.status(400).json({ error: "Invalid request method." });
    }
}