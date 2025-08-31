# Backend Setup Guide for Portfolio Contact Form

This guide explains how to set up the backend server with nodemailer to handle contact form submissions.

## 🚀 Prerequisites

1. **Gmail Account**: You need a Gmail account to send emails
2. **App Password**: Generate an app password for your Gmail account (don't use your regular password)
3. **Node.js**: Version 18 or higher (project uses ES modules)

## 📧 Gmail App Password Setup

1. Go to your Google Account settings: https://myaccount.google.com/
2. Navigate to **Security** → **2-Step Verification** (enable if not already enabled)
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter a name like "Portfolio Contact Form"
6. Click **Generate**
7. Copy the generated 16-character password

## ⚙️ Configuration

1. **Update `config.js`**:
   ```javascript
   export default {
     email: {
       user: 'your-email@gmail.com',        // Replace with your Gmail
       pass: 'your-16-char-app-password'   // Replace with your app password
     },
     port: 5000
   };
   ```

2. **Important**: Never commit your actual email password to version control!

## 🖥️ Running the Server

### Development Mode (with auto-restart)
```bash
npm run dev:server
```

### Production Mode
```bash
npm run server
```

### Frontend Development
```bash
npm run dev
```

## 📋 API Endpoints

### POST `/api/contact`
Handles contact form submissions and sends emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully! I'll get back to you soon."
}
```

### GET `/api/health`
Health check endpoint to verify server status.

## 🔐 Security Notes

1. **CORS**: The server allows requests from any origin (configured for development)
2. **Input Validation**: Basic validation is implemented
3. **Rate Limiting**: Consider adding rate limiting for production
4. **Environment Variables**: Use proper environment variables in production

## 🚀 Production Deployment

### Vercel/Netlify (Frontend)
- Deploy your React app normally
- Update the API endpoint in `ContactMe.jsx` to your production server URL

### Backend Deployment Options

#### Option 1: Heroku
```bash
# Add to package.json
"engines": {
  "node": "18.x"
}

# Deploy
git push heroku main
```

#### Option 2: Railway
- Connect your GitHub repository
- Set environment variables
- Deploy automatically

#### Option 3: DigitalOcean/Railway
- Set up a VPS
- Install Node.js
- Run with PM2: `pm2 start server.js`

## 📧 Email Templates

The server sends two emails:

1. **To You**: Notification of new contact form submission
2. **To User**: Confirmation that their message was received

### Customizing Email Templates

Edit the HTML templates in `server.js`:
- `mailToYou`: Email sent to you
- `mailToUser`: Confirmation email sent to the user

## 🐛 Troubleshooting

### Common Issues

1. **"Invalid login" error**
   - Check your Gmail app password
   - Ensure 2FA is enabled
   - Verify email address is correct

2. **"Connection timeout" error**
   - Check if server is running
   - Verify port 5000 is available
   - Check firewall settings

3. **CORS errors**
   - Ensure backend server is running
   - Check CORS configuration in server.js

4. **ES Module errors**
   - Ensure Node.js version 18+ is installed
   - Check that package.json has `"type": "module"`
   - Verify import statements use `.js` extension

### Debug Mode

Add logging to see what's happening:
```javascript
console.log('Form data received:', req.body);
console.log('Attempting to send email...');
```

## 📱 Testing

1. **Start the backend server**: `npm run dev:server`
2. **Start the frontend**: `npm run dev`
3. **Test the API**: Use the provided `test-contact.js` script
4. **Fill out the contact form** on the website
5. **Check your email** for the notification
6. **Check the user's email** for the confirmation

### Quick API Test
```bash
# Test health endpoint
curl http://localhost:5000/api/health

# Test contact form (replace with your actual data)
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

## 🔄 Updates and Maintenance

- **Regular Updates**: Keep dependencies updated
- **Security**: Monitor for security vulnerabilities
- **Logs**: Check server logs for any issues
- **Backup**: Keep your configuration secure

## 📁 Project Structure

```
client/
├── server.js          # Backend server (ES modules)
├── config.js          # Email configuration
├── test-contact.js    # API testing script
├── package.json       # Dependencies and scripts
└── src/
    └── component/
        └── contactme/
            └── ContactMe.jsx  # Frontend contact form
```

---

**Need Help?** Contact Parth Kathrotiya at parthkathrotiya6@gmail.com
