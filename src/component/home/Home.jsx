import React from 'react'
import file from '../../assets/file.png';
import { motion } from 'framer-motion'
import './Home.css'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut"
      }
    }
  }

  const textVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  }

  return (
    <div className="home">
      <motion.div 
        className="home-firstside"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="hero-container">
          <motion.div className="hero-content" variants={textVariants}>
            <motion.h1 
              className="typewriter"
              variants={itemVariants}
            >
              Hi, I'm Parth Kathrotiya
            </motion.h1>
            <motion.div 
              className="code-container"
              variants={itemVariants}
            >
              <code>Web Developer & Problem Solver</code>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              style={{ color: '#E0E0E0', marginBottom: '20px', lineHeight: '1.6' }}
            >
              Passionate about creating innovative web solutions and turning ideas into reality through clean, efficient code.
            </motion.p>
          </motion.div>
          
          <motion.div className="hero-image" variants={imageVariants}>
            <div className="hero-image-container">
              <motion.div 
                className="hero-image-background"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <motion.img 
                src={file}
                alt="Parth Kathrotiya" 
                className="hero-image-profile"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      
      <motion.div 
        className="home-secondside"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="home-secondside-text"
          animate={{ 
            opacity: [0.7, 1, 0.7],
            scale: [0.98, 1, 0.98]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          Welcome to my portfolio
        </motion.span>
      </motion.div>
    </div>
  )
}

export default Home