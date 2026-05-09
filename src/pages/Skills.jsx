import React from 'react';
import { FaBook, FaTools, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss,
  SiGithub, SiMongodb, SiExpress, SiDjango, SiPython, SiFirebase,
  SiNextdotjs, SiNodedotjs, SiReactquery, SiRedux, SiGraphql, SiPostgresql
} from 'react-icons/si';
import { FaCode, FaDatabase, FaBrain  } from "react-icons/fa"; 
import { motion } from 'framer-motion';
import './Skills.css';
// import book from '../assets/book.png';

const techSkills = [
  { icon: <SiHtml5 />, name: 'HTML5', color: '#E34F26' },
  { icon: <SiCss3 />, name: 'CSS3', color: '#1572B6' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiReact />, name: 'React.js', color: '#61DAFB' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
  { icon: <SiNodedotjs />, name: 'Node.js', color: '#339933' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
  { icon: <SiGithub />, name: 'GitHub', color: '#181717' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
  { icon: <SiExpress />, name: 'Express', color: '#000000' },
  { icon: <SiDjango />, name: 'Django', color: '#092E20' },
  { icon: <SiPython />, name: 'Python', color: '#3776AB' },
  { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
  { icon: <SiReactquery />, name: 'React Query', color: '#FF4154' },
  { icon: <SiRedux />, name: 'Redux', color: '#764ABC' },
  { icon: <SiGraphql />, name: 'GraphQL', color: '#E10098' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#4169E1' }
];

const hobbies = ['Painting 🎨', 'Gaming 🎮', 'Hiking 🥾', 'Reading 📖', 'Music 🎵', 'Fitness 🧘‍♂️', 'Photography 📷'];

const Skills = () => {
  // Duplicate skills for seamless infinite scroll
  const duplicatedSkills = [...techSkills, ...techSkills];
  
  return (
    <section className="skills-section" id="skills">
      <div className="skill-container">
        {/* Header Section */}
        <motion.div 
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h4 className="skills-subheading">Skills</h4>
          <h2 className="skills-heading">A Glimpse into My World</h2>
          <p className="skills-description">
            Learn more about who I am, what I can do, and what inspires me to create exceptional digital experiences.
          </p>
        </motion.div>

        {/* First Row - 25% | 70% */}
        <div className="skills-row first-row">
          <motion.div 
            className="skills-box small-box"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-title"><FaBook className="icon" /> My Reads</h3>
            <p className="skills-text">
              Explore the books that shape my perspective and fuel my creativity in technology and design.
            </p>
            {/* <div className="book-image">
              <img src={book} alt="Books" width="80%" />
            </div> */}
          </motion.div>

          <motion.div 
            className="skills-box large-box"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-title"><FaTools className="icon" /> My Toolbox</h3>
            <p className="skills-text">
              Technologies I use daily to craft exceptional digital experiences.
            </p>
            
            {/* Top Row - Scrolls Right */}
            <div className="skills-scroll-container top-scroll">
              <motion.div 
                className="skills-scroll-track"
                animate={{
                  x: ['0%', '-10%'],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {duplicatedSkills.map((skill, index) => (
                  <div 
                    key={`top-${index}`} 
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Bottom Row - Scrolls Left */}
            <div className="skills-scroll-container bottom-scroll">
              <motion.div 
                className="skills-scroll-track"
                animate={{
                  x: ['-10%', '0%'],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              >
                {[...duplicatedSkills].reverse().map((skill, index) => (
                  <div 
                    key={`bottom-${index}`} 
                    className="skill-item"
                    style={{ '--skill-color': skill.color }}
                  >
                    <div className="skill-icon">{skill.icon}</div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Second Row - 70% | 25% */}
        <div className="skills-row second-row">
          <motion.div 
            className="skills-box wide-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="skills-title"><FaStar className="icon" /> Beyond the Code</h3>
            <p className="skills-text">
              My passions and hobbies that keep me inspired and balanced.
            </p>
            <div className="hobbies-container">
              {hobbies.map((hobby, index) => (
                <motion.span 
                  key={index} 
                  className="hobby-tag"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {hobby}
                </motion.span>
              ))}
            </div>
          </motion.div>

         
          <motion.div 
  className="skills-box tech-box"
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  <div className="services-heading">
    <FaTools className="services-icon" />
    <h3 className="services-text">Services</h3>
  </div>

  <div className="tech-item">
    <FaCode className="tech-icon" />
    <p className="tech-text">Full Stack Development</p>
  </div>
  <div className="tech-item">
    <FaDatabase className="tech-icon" />
    <p className="tech-text">Data Scientist</p>
  </div>
  <div className="tech-item">
    <FaBrain className="tech-icon" />
    <p className="tech-text">AI / Machine Learning</p>
  </div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;