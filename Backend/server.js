const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const dotenv = require('dotenv')

const app = express();
const PORT = process.env.PORT || 4000 ;

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

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

        // Configure email content
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

        // Send email
        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});