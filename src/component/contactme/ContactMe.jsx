import React, { useState } from 'react'
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
      value: "parthkathrotiya6@gmail.com",
      link: "mailto:parthkathrotiya6@gmail.com"
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
    
    if (!formData?.name?.trim() || !formData?.email?.trim() || !formData?.message?.trim()) {
      setSubmitStatus('Please fill in all required fields')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Send email through backend API
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus(result.message);
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
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