import React, { useRef } from 'react';
import {
  FaReact, FaNodeJs, FaDatabase,
  FaPalette, FaMobile, FaServer,
  FaGitAlt, FaGithub, FaCode,
  FaBug, FaCloud, FaTools
} from 'react-icons/fa';
import {
  SiNextdotjs, SiExpress, SiDjango,
  SiMongodb, SiFirebase, SiJira,
  SiJavascript, SiPython
} from 'react-icons/si';
import { motion } from 'framer-motion';
import './Service.css';

const services = [
  {
    title: "Frontend Development",
    icon: <FaReact className="service-icon" />,
    description: "Modern, responsive frontend development using React, Next.js, and React Native with TypeScript support.",
    technologies: [
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <FaReact />, name: "React" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <FaMobile />, name: "React Native" }
    ]
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs className="service-icon" />,
    description: "Scalable backend solutions with Node.js, Express, and Django REST Framework.",
    technologies: [
      { icon: <FaNodeJs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiPython />, name: "Python" },
      { icon: <SiDjango />, name: "Django" }
    ]
  },
  {
    title: "Database Solutions",
    icon: <FaDatabase className="service-icon" />,
    description: "Database design, optimization, and management for all your data needs.",
    technologies: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <FaDatabase />, name: "SQL" },
      { icon: <SiFirebase />, name: "Firebase" },
      { icon: <FaServer />, name: "PostgreSQL" }
    ]
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette className="service-icon" />,
    description: "Beautiful, intuitive user interfaces with pixel-perfect designs and prototypes.",
    technologies: [
      { icon: <FaPalette />, name: "Figma" },
      { icon: <FaPalette />, name: "Adobe XD" },
      { icon: <FaPalette />, name: "Sketch" },
      { icon: <FaCode />, name: "CSS/JS" }
    ]
  },
  {
    title: "DevOps & Version Control",
    icon: <FaGitAlt className="service-icon" />,
    description: "CI/CD pipelines, containerization, and version control management.",
    technologies: [
      { icon: <FaGitAlt />, name: "Git" },
      { icon: <FaGithub />, name: "GitHub" },
      { icon: <FaCloud />, name: "Docker" },
      { icon: <FaTools />, name: "CI/CD" }
    ]
  },
  {
    title: "Testing & Deployment",
    icon: <FaBug className="service-icon" />,
    description: "Comprehensive testing and seamless deployment solutions.",
    technologies: [
      { icon: <FaBug />, name: "Testing" },
      { icon: <SiJira />, name: "Jira" },
      { icon: <FaCloud />, name: "Hosting" },
      { icon: <FaTools />, name: "Maintenance" }
    ]
  }
];

const Service = () => {
  const handleMouseMove = (e, index) => {
    const card = document.querySelectorAll(".service-card")[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 12).toFixed(2);
    const rotateY = ((x - centerX) / 12).toFixed(2);

    card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.boxShadow = `${-rotateY * 2}px ${rotateX * 2}px 30px rgba(139, 92, 246, 0.3)`;
  };

  const resetTransform = (index) => {
    const card = document.querySelectorAll(".service-card")[index];
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
    card.style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.3)`;
  };

  return (
    <section className="service-section" id="services">
      <motion.div
        className="service-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">My <span>Services</span></h2>
        <p className="section-subtitle">Comprehensive solutions tailored to your needs</p>
      </motion.div>

      <div className="service-container">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            onMouseMove={(e) => handleMouseMove(e, index)}
            onMouseLeave={() => resetTransform(index)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="service-icon-container">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <div className="technologies-container">
              {service.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-badge">
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Service;
