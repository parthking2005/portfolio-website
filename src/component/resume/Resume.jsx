import React from 'react'
import { motion } from 'framer-motion'
import './Resume.css'

const Resume = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const timelineData = [
    {
      id: 1,
      dateRange: "2023 - Present",
      title: "Web Developer",
      company: "Divinetouch Solutions",
      description: "• PHP Web Developer, Core PHP, AJAX, HTML, CSS",
      type: "experience"
    },
    {
      id: 2,
      dateRange: "2019-2023",
      title: "E-Commerce Business",
      company: "",
      description: "• Empowering Businesses To Thrive Online With Seamless ECommerce Solutions That Drive Growth And Enhance Customer Experience.",
      type: "experience"
    },
    {
      id: 3,
      dateRange: "2016-2019",
      title: "B.C.A (Bachelor Of Computer Application)",
      company: "Prabhu BCA College",
      description: "• Graduated With A BCA, Achieving A 6.43% CGPA, And Looking Forward To Leveraging My Skills For Future Growth In The Tech Industry.",
      type: "education"
    },
    {
      id: 4,
      dateRange: "2015-2016",
      title: "H.S.C (Higher Secondary Certificate)",
      company: "Shree Swaminarayan Gurukul Vidhyalaya",
      description: "",
      type: "education"
    },
    {
      id: 5,
      dateRange: "2013-2014",
      title: "S.S.C (Secondary School Certificate)",
      company: "Shree Swaminarayan Gurukul Vidhyalaya",
      description: "",
      type: "education"
    }
  ]

  const handleTimelineHover = (item) => {
    if (item?.title) {
      console.log(`Hovering over: ${item.title}`)
    }
  }

  return (
    <div className="resume-container">
      <motion.div 
        className="resume-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="resume-header" variants={itemVariants}>
          <span className="resume-label">Education & Experience</span>
          <div className="resume-title-container">
            <span className="resume-icon">📖</span>
            <h1 className="resume-title">Education & Experience</h1>
          </div>
          <div className="resume-underline"></div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line">
            {timelineData?.map((item, index) => (
              <div key={item?.id || index} className="timeline-marker" />
            ))}
          </div>
          
          <div className="timeline-content">
            {timelineData?.map((item, index) => (
              <motion.div 
                key={item?.id || index}
                className={`timeline-item ${item?.type || 'default'}`}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  x: 10,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => handleTimelineHover(item)}
              >
                <div className="timeline-date">{item?.dateRange || 'N/A'}</div>
                <div className="timeline-main">
                  <div className="timeline-title-row">
                    <h3 className="timeline-title">{item?.title || 'Untitled'}</h3>
                    {item?.company && (
                      <span className="timeline-company">({item.company})</span>
                    )}
                  </div>
                  {item?.description && (
                    <p className="timeline-description">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Resume