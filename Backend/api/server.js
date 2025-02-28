const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL  || process.env.BACKEND_URL ||  '*', 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL, 
        pass: process.env.PASS,   
    },
});

app.post('/send-email', async (req, res) => {
    try {
        const { name, email, company, phone, country, message, requestType } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO, 
            subject: `New Bracknell service application from ${name}`,
            html: `
                <h3>New Contact Request</h3>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Company:</strong> ${company || 'N/A'}</li>
                    <li><strong>Phone:</strong> ${phone || 'N/A'}</li>
                    <li><strong>Country:</strong> ${country || 'N/A'}</li>
                    <li><strong>Selected service:</strong> ${requestType}</li>
                </ul>
                <h4>Message:</h4>
                <p>${message}</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

module.exports = app;
