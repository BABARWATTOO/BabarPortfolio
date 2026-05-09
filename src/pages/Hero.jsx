import React, { useEffect } from 'react';
import './Hero.css';
import MainHero from '../assets/MainHero.png';
import My from '../assets/my.png';
import { FaArrowDown, FaLink } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../component/AnimatedBackground';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="hero-container" ref={ref}>
        <AnimatedBackground/>
      <motion.div 
        className="upper-section"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div variants={itemVariants}>
          <div className="avatar-container">
            <img 
              className="Hero-img" 
              src={MainHero} 
              alt="avatar" 
            />
            <div className="glow-effect"></div>
          </div>
        </motion.div>

        <motion.div className="hero-img-text" variants={itemVariants}>
          <span className="hero-online-icon-dot"></span>
          <span className="hero-online-text">Available For New Projects</span>
        </motion.div>

        <motion.div className="hero-main-heading" variants={itemVariants}>
          <h1 className="main-head">
            <span className="heading-highlight">Building</span> Exceptional
          </h1>
          <h1 className="main-head">
            User <span className="heading-highlight">Experience</span>
          </h1>
        </motion.div>

        <motion.div className="hero-main-paragraph" variants={itemVariants}>
          <p className="main-para">
            I specialize in transforming design into functional, high-performing web applications. 
            Let's discuss your next project.
          </p>
        </motion.div>

        <motion.div className="main-hero-btn" variants={itemVariants}>
          <button className="hero-btn work-btn">
            Explore My Work <FaArrowDown className="down-arrow-icon" />
          </button>
          <button className="hero-btn connect-btn">
            <FaLink className="link-icon" /> Let's Connect
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Hero;