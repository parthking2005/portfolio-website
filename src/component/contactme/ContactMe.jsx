import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import './ContactMe.css'

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const contactInfo = [
    {
      id: 1,
      icon: "📧",
      title: "Email",
      value: "parth.kathrotiya.dev@gmail.com",
      link: "mailto:parth.kathrotiya.dev@gmail.com"
    },
    {
      id: 2,
      icon: "📱",
      title: "Phone",
      value: "+91 9925413869",
      link: "tel:+919925413869"
    },
    {
      id: 3,
      icon: "📍",
      title: "Location",
      value: "Surat, Gujarat, India",
      link: null
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e?.target || {}
    if (name) {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e) => {
    e?.preventDefault?.()

		// Basic required field validation
		if (!formData?.name?.trim() || !formData?.email?.trim() || !formData?.message?.trim()) {
			setSubmitStatus('Please fill in all required fields')
			return
		}

		setIsSubmitting(true)
		setSubmitStatus(null)

		try {
			// CLIENT-ONLY EMAIL SENDING using EmailJS Browser SDK (no backend needed)
			// Setup steps (do these once in EmailJS dashboard):
			// 1) Create an EmailJS account: https://www.emailjs.com/
			// 2) Add an Email Service (Gmail/Outlook/SMTP) → get SERVICE ID
			// 3) Create TWO templates and note their TEMPLATE IDs:
			//    - TEMPLATE_TO_OWNER: sent to you (the site owner)
			//    - TEMPLATE_CONFIRM: sent to the sender as confirmation
			//    Recommended template variables for both templates:
			//    {from_name}, {from_email}, {subject}, {message}, {to_name}, {to_email}
			// 4) Account → API Keys → Create a Public Key → note PUBLIC KEY
			// 5) Fill the constants below with your values

			const EMAILJS_SERVICE_ID = 'REPLACE_WITH_YOUR_SERVICE_ID' // e.g. 'service_abc123'
			const TEMPLATE_TO_OWNER_ID = 'REPLACE_WITH_TEMPLATE_TO_OWNER' // e.g. 'template_notify_you'
			const TEMPLATE_CONFIRM_ID = 'REPLACE_WITH_TEMPLATE_CONFIRM' // e.g. 'template_auto_reply'
			const EMAILJS_PUBLIC_KEY = 'REPLACE_WITH_YOUR_PUBLIC_KEY' // e.g. 'a1b2c3PUBLICKEY'
			const TO_NAME = 'Parth Kathrotiya'
			const TO_EMAIL = 'parth.kathrotiya.dev@gmail.com' // Your inbox for receiving messages

			// Safety check to prevent sending without configuration
			if (
				EMAILJS_SERVICE_ID.startsWith('REPLACE_') ||
				TEMPLATE_TO_OWNER_ID.startsWith('REPLACE_') ||
				TEMPLATE_CONFIRM_ID.startsWith('REPLACE_') ||
				EMAILJS_PUBLIC_KEY.startsWith('REPLACE_')
			) {
				setSubmitStatus('Email is not configured. Please update EmailJS IDs and Public Key in code.')
				return
			}

			// Params used by both templates
			const baseParams = {
				from_name: formData?.name,
				from_email: formData?.email,
				subject: formData?.subject || 'No subject',
				message: formData?.message
			}

			// 1) Send to you (owner notification)
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				TEMPLATE_TO_OWNER_ID,
				{ ...baseParams, to_name: TO_NAME, to_email: TO_EMAIL },
				{ publicKey: EMAILJS_PUBLIC_KEY }
			)

			// 2) Send confirmation to the sender (optional: keep or remove as needed)
			await emailjs.send(
				EMAILJS_SERVICE_ID,
				TEMPLATE_CONFIRM_ID,
				{ ...baseParams, to_name: formData?.name, to_email: formData?.email },
				{ publicKey: EMAILJS_PUBLIC_KEY }
			)

			setSubmitStatus("Message sent successfully! I'll get back to you soon.")
			// Reset form after successful submission
			setFormData({ name: '', email: '', subject: '', message: '' })
		} catch (error) {
			console.error('Form submission error:', error)
			setSubmitStatus('Failed to send message. Please check your connection and try again.')
		} finally {
			setIsSubmitting(false)
		}
	}

  const handleContactClick = (contact) => {
    if (contact?.link) {
      window.open(contact.link, '_blank')
    }
  }

  return (
    <div className="contact-container">
      <motion.div 
        className="contact-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="contact-header" variants={itemVariants}>
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">Let's discuss your next project or just say hello!</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form className="contact-form" variants={itemVariants} onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-input"
                value={formData?.name || ''}
                onChange={handleInputChange}
                placeholder="Your full name"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-input"
                value={formData?.email || ''}
                onChange={handleInputChange}
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="form-input"
              value={formData?.subject || ''}
              onChange={handleInputChange}
              placeholder="What's this about?"
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              value={formData?.message || ''}
              onChange={handleInputChange}
              placeholder="Tell me about your project or inquiry..."
              required
            />
          </div>
          
          {submitStatus && (
            <div className={`submit-status ${submitStatus?.includes('successfully') ? 'success' : 'error'}`}>
              {submitStatus}
            </div>
          )}
          
          <motion.button
            type="submit"
            className="submit-btn"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </motion.button>
        </motion.form>

        {/* Contact Information */}
        <motion.div className="contact-info" variants={itemVariants}>
          <h2 className="info-title">Contact Information</h2>
          <div className="info-grid">
            {contactInfo?.map((contact, index) => (
              <motion.div 
                key={contact?.id || index}
                className="info-item"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                onClick={() => handleContactClick(contact)}
                style={{ cursor: contact?.link ? 'pointer' : 'default' }}
              >
                <span className="info-icon">{contact?.icon || '📋'}</span>
                <div className="info-content">
                  <h3>{contact?.title || 'Contact'}</h3>
                  <p>{contact?.value || 'Not available'}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default ContactMe