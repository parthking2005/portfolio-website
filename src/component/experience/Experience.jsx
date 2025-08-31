import React from 'react'
import { motion } from 'framer-motion'
import './Experience.css'

const Experience = () => {
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

  const experienceData = [
    {
      company: "Prestious It Solutions",
      role: "MERN Stack Developer Intern",
      timeline: "Feb 2025 - May 2025",
      location: "Surat"
    },
    {
      company: "Prestious It Solutions",
      role: "MERN Stack Developer",
      timeline: "Jun 2025 - Present",
      location: "Surat"
    },
    // {
    //   company: "Yami IT Solutions PVT. LTD.",
    //   role: "Front-end Developer Intern",
    //   timeline: "Jun 2024 - Jul 2024",
    //   location: "Surat"
    // }
  ]

  return (
    <div className="experience-container">
      <motion.div 
        className="experience-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="experience-header" variants={itemVariants}>
          <h1 className="experience-title">Here's My Experience</h1>
          <p className="experience-subtitle">Here's the experience of my web development journey.</p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div className="experience-grid" variants={itemVariants}>
          {experienceData.map((exp, index) => (
            <motion.div 
              key={index}
              className="experience-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="company-name">{exp.company}</div>
              <div className="experience-detail">
                <span className="detail-label">Role:</span>
                <span className="detail-value">{exp.role}</span>
              </div>
              <div className="experience-detail">
                <span className="detail-label">TimeLine:</span>
                <span className="detail-value">{exp.timeline}</span>
              </div>
              <div className="experience-detail">
                <span className="detail-label">Location:</span>
                <span className="detail-value">{exp.location}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Experience
