import React from 'react'
import { motion } from 'framer-motion'
import './Portfolio.css'

const Portfolio = () => {
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

  const projects = [
    { id: 1, title: "Todo List", image: "/src/assets/file.png" },
    { id: 2, title: "HR Management system", image: "/src/assets/file.png" },
    { id: 3, title: "CricTo", image: "/src/assets/file.png" }
  ]

  return (
    <div className="portfolio-container">
      <motion.div 
        className="portfolio-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div className="portfolio-header" variants={itemVariants}>
          <h1 className="portfolio-title">Portfolio</h1>
          <p className="portfolio-subtitle">View My Works</p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div className="projects-grid" variants={itemVariants}>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="project-card"
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="project-image-container">
                <div className="project-placeholder">
                  <img src={project.image} alt="Project Avatar" />
                </div>
                <div className="project-avatar">
                  <img src={project.image} alt="Project Avatar" />
                </div>
              </div>
              <h3 className="project-title">{project.title}</h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects Section */}
        <motion.div className="additional-projects" variants={itemVariants}>
          <h2 className="section-title">More Projects Coming Soon</h2>
          <p className="section-description">
            I'm constantly working on new projects and improving my skills. 
            Check back soon for more amazing work!
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Portfolio