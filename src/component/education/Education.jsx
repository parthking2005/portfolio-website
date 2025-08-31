import React from 'react'
import { motion } from 'framer-motion'
import './Education.css'

const Education = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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

  const educationData = [
    {
      year: "2021",
      degree: "SSC",
      institution: "Nalanda vidhyalay - 2, punagam, Surat",
      percentage: "76.6%"
    },
    {
      year: "2023",
      degree: "HSC",
      institution: "Nalanda vidhyalay - 2, punagam, Surat.",
      percentage: "83.14%"
    },
    {
      year: "2023 - Present",
      degree: "BCA",
      institution: "VNSGU, Surat",
      percentage: "6.5 CGPA (Till Sem 5)"
    }
  ]

  return (
    <div className="education-container">
      <motion.div 
        className="education-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="education-header" variants={itemVariants}>
          <h1 className="education-title">Here's My Education</h1>
          <p className="education-subtitle">Here's the information about my educational background...</p>
        </motion.div>

        {/* Timeline */}
        <motion.div className="timeline-container" variants={itemVariants}>
          {/* Timeline Line */}
          <div className="timeline-line">
            {educationData.map((_, index) => (
              <div key={index} className="timeline-marker"></div>
            ))}
          </div>

          {/* Timeline Content */}
          <div className="timeline-content">
            {educationData.map((education, index) => (
              <motion.div 
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="education-card">
                  <div className="education-year">Year {education.year}</div>
                  <div className="education-degree">{education.degree}</div>
                  <div className="education-institution">{education.institution}</div>
                  <div className="education-percentage">Percentage: {education.percentage}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Education
