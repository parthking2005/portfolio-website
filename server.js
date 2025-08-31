import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import config from './config.js';

const app = express();
const PORT = config.port;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.email.user,
    pass: config.email.pass
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Name, email, and message are required' 
      });
    }

    // Email to you (portfolio owner)
    const mailToYou = {
      from: config.email.user,
      to: config.email.user, // Your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><em>This message was sent from your portfolio website contact form.</em></p>
      `
    };

    // Email to the user (confirmation)
    const mailToUser = {
      from: config.email.user,
      to: email,
      subject: 'Thank you for contacting Parth Kathrotiya',
      html: `
        <h2>Thank you for reaching out!</h2>
        <p>Dear ${name},</p>
        <p>Thank you for contacting me through your portfolio website. I have received your message and will get back to you as soon as possible.</p>
        <p><strong>Your message details:</strong></p>
        <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        <p><strong>Message:</strong> ${message}</p>
        <hr>
        <p>Best regards,<br>Parth Kathrotiya<br>Web Developer</p>
        <p><em>This is an automated confirmation email. Please do not reply to this email.</em></p>
      `
    };

    // Send both emails
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToUser);

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully! I\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send message. Please try again.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
