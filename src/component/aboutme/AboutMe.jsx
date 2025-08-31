import React from 'react'
import { motion } from 'framer-motion'
import './AboutMe.css'

const AboutMe = () => {
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

  const stats = [
    { number: "15+", label: "Project" },
    { number: "10+", label: "React Project" },
    { number: "6+", label: "Month of Company experience" },
    { number: "10+", label: "DSA Questions Solved" }
  ]

  const techStack = {
    languages: [
        { src: "/src/assets/icons/c-.png", name: 'C++' },
        { src: "/src/assets/icons/java.png", name: 'Java' },
        { src: "/src/assets/icons/python.png", name: 'Python' },
        { src: "/src/assets/icons/php.png", name: 'PHP' },
        { src: "/src/assets/icons/c-sharp.png", name: 'C-Sharp' },
    ],
    frameworks: [
        { src: "/src/assets/icons/html-5.png", name: 'HTML' },
        { src: "/src/assets/icons/css-3.png", name: 'CSS' },
        { src: "/src/assets/icons/js.png", name: 'JavaScript' },
        { src: "/src/assets/icons/react.png", name: 'React' },
        { src: "/src/assets/icons/nodejs.png", name: 'NodeJs' },
        { src: "/src/assets/icons/mongodb.png", name: 'MongoDB' },
        { src: "/src/assets/icons/tailwindcss.png", name: 'TailwindCSS' },
    ],
    tools: [
          { src: "/src/assets/icons/figma.png", name: 'Figma' },
          { src: "/src/assets/icons/firebase.png", name: 'Firebase' },
          { src: "/src/assets/icons/git.png", name: 'Git' },
          { src: "/src/assets/icons/github.png", name: 'GitHub' },
          { src: "/src/assets/icons/sql.png", name: 'SQL' },
          { src: "/src/assets/icons/visual-studio.png", name: 'Visual Studio' },
    ],
};

const profileLinks = [
    { href: "https://stackoverflow.com/users/23696327/parth-kathrotiyaa", src: "https://tse1.mm.bing.net/th/id/OIP.Wh3QnaiiD1biXyWSKF8gxwHaCZ?pid=Api&P=0&h=180", alt: "CodeForces" },
    { href: "https://leetcode.com/u/Parth_Kathrotiya/", src: "https://asset.brandfetch.io/id8BaDflDb/idMTJ6fnty.png", alt: "LeetCode" },
    // { href: "https://www.codechef.com/users/vraj_chovatiya", src: "https://asset.brandfetch.io/idM2-b7Taf/id9CeVm2nY.png", alt: "CodeChef" },
    { href: "https://www.hackerrank.com/profile/parthkathrotiya6", src: "https://asset.brandfetch.io/idTrJXGwd0/idAJPV0fZV.png", alt: "HackerRank" },
    // { href: "https://www.naukri.com/code360/profile/vb_chovatiya", src: "https://asset.brandfetch.io/ideRRB4-kx/idUvsBj1k5.png", alt: "CodingNinjas" },
    { href: "https://www.geeksforgeeks.org/user/parthkathfvi2/", src: "https://asset.brandfetch.io/idw2s-0Tuo/idushz6qWf.png", alt: "GeeksForGeeks" }
];

  const handleProfileLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <div className="about-container">
      <motion.div 
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* About Section */}
        <motion.section className="about-section" variants={itemVariants}>
          <h2 className="section-title">About me</h2>
          <p className="about-text">
            I Am Parth Kathrotiya, I Am A Motivated And Dedicated Web Developer With A Strong Passion For Technology And Problem-Solving. I Approach Every Challenge With Resilience, Adaptability, And A Commitment To Excellence. I Am Eager To Contribute My Technical Skills, Attention To Detail, And Collaborative Mindset To An Organization That Values Dedication And Growth. My Goal Is To Create Innovative And User-Friendly Web Solutions That Not Only Meet But Exceed Client Expectations.
          </p>
        </motion.section>

        {/* Stats Section */}
        <motion.section className="stats-section" variants={itemVariants}>
          <div className="stats-grid">
            {stats?.map((stat, index) => (
              <motion.div 
                key={index}
                className="stat-item"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="stat-number">{stat?.number || '0'}</div>
                <div className="stat-label">{stat?.label || 'Stat'}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Section */}
        <motion.section className="tech-stack-section" variants={itemVariants}>
          <h2 className="section-title tech-stack-title">Tech Stack</h2>
          
          {/* Languages */}
          <div className="tech-subsection">
            <h3 className="tech-subtitle">1. Languages</h3>
            <div className="tech-grid">
              {techStack.languages?.map((lang, index) => (
                <motion.div 
                  key={index}
                  className="tech-item"
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img src={lang?.src} alt={lang?.name} className="tech-icon" />
                  <span className="tech-name">{lang?.name || 'Language'}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Frameworks and Libraries */}
          <div className="tech-subsection">
            <h3 className="tech-subtitle">2. Framework and Libraries</h3>
            <div className="tech-grid">
              {techStack.frameworks?.map((framework, index) => (
                <motion.div 
                  key={index}
                  className="tech-item"
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img src={framework?.src} alt={framework?.name} className="tech-icon" />
                  <span className="tech-name">{framework?.name || 'Framework'}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Other Tools & Technologies */}
          <div className="tech-subsection">
            <h3 className="tech-subtitle">3. Other Tools & Technologies</h3>
            <div className="tech-grid">
              {techStack.tools?.map((tool, index) => (
                <motion.div 
                  key={index}
                  className="tech-item"
                  whileHover={{ 
                    scale: 1.1,
                    y: -3,
                    transition: { duration: 0.2 }
                  }}
                >
                  <img src={tool?.src} alt={tool?.name} className="tech-icon" />
                  <span className="tech-name">{tool?.name || 'Tool'}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Profile Links Section */}
        <motion.section className="profile-links-section" variants={itemVariants}>
          <h2 className="section-title profile-links-title">Profile Links</h2>
          <div className="profile-links-grid">
          {profileLinks.map((item, index) => (
              <motion.div className='card-item' key={index}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <img src={item.src} alt={item.alt} />
                      <p>{item.alt}</p>
                  </a>
              </motion.div>
          ))}
          </div>
        </motion.section>

        {/* Expertise Section */}
        <motion.section className="expertise-section" variants={itemVariants}>
          <h2 className="section-title">Expertise</h2>
          <div className="expertise-grid">
            <div className="skill-item">
              <span className="skill-icon">💻</span>
              <span className="skill-text">Frontend Development</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">⚙️</span>
              <span className="skill-text">Backend Development</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📱</span>
              <span className="skill-text">Responsive Design</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🔧</span>
              <span className="skill-text">API Integration</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">🎨</span>
              <span className="skill-text">UI/UX Design</span>
            </div>
            <div className="skill-item">
              <span className="skill-icon">📊</span>
              <span className="skill-text">Problem Solving</span>
            </div>
          </div>
        </motion.section>

        {/* Language Section */}
        <motion.section className="language-section" variants={itemVariants}>
          <h2 className="section-title">Languages</h2>
          <div className="language-list">
            <div className="language-item">
              <span className="language-icon">🇮🇳</span>
              <span className="language-text">Hindi (Native)</span>
            </div>
            <div className="language-item">
              <span className="language-icon">US</span>
              <span className="language-text">English (Professional)</span>
            </div>
            <div className="language-item">
              <span className="language-icon">🇮🇳</span>
              <span className="language-text">Gujarati (Native)</span>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  )
}

export default AboutMe