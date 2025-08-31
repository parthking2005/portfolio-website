# Quick Gmail Setup for Contact Form

## 🚀 Step-by-Step Setup

### 1. Enable 2-Step Verification
- Go to [Google Account Security](https://myaccount.google.com/security)
- Click on "2-Step Verification"
- Follow the setup process if not already enabled

### 2. Generate App Password
- Go to [Google Account Security](https://myaccount.google.com/security)
- Click on "App passwords" (under 2-Step Verification)
- Select "Mail" and "Other (Custom name)"
- Name it: "Portfolio Contact Form"
- Click "Generate"
- **Copy the 16-character password** (e.g., `abcd efgh ijkl mnop`)

### 3. Update Configuration
Edit `config.js`:
```javascript
export default {
  email: {
    user: 'your-email@gmail.com',        // Your Gmail address
    pass: 'abcdefghijklmnop'            // The 16-char app password (no spaces)
  },
  port: 5000
};
```

### 4. Test the Setup
```bash
# Start the server
npm run dev:server

# In another terminal, test the API
node test-contact.js
```

## ⚠️ Important Notes

- **Never use your regular Gmail password**
- **App passwords are 16 characters (remove spaces)**
- **Keep your app password secure**
- **Don't commit real passwords to git**

## 🔧 Troubleshooting

### "Invalid login" error?
- Double-check the app password (16 characters, no spaces)
- Ensure 2FA is enabled
- Verify your Gmail address

### "Less secure app" error?
- Use app passwords instead of regular passwords
- App passwords work with 2FA enabled

## 📧 What Happens Next?

1. **User fills contact form** → Frontend sends data to backend
2. **Backend sends email to you** → Notification of new contact
3. **Backend sends email to user** → Confirmation message
4. **You get notified** → Check your email for contact details

---

**Need help?** Check the main `BACKEND_SETUP.md` for detailed instructions.
