import React, { useState, useEffect } from 'react';
import './Experience.css';

const experienceData = [
  {
    title: 'Internship',
    company: 'Penta Squad',
    date: 'June 2023 - October 2023',
    description: 'Worked as a Software Engineering intern focusing on full-stack development and bug fixing.',
    skills: ['React', 'Node.js', 'MongoDB', 'Git','Wordpress'],
  },
  {
    title: 'Freelancer (Fiverr)',
    company: 'Freelance Projects',
    date: 'January 2023 - Present',
    description: 'Developed mobile apps and websites for clients globally through Fiverr, specializing in Mern.',
    skills: ['React Js','Next Js','React Native', 'UI/UX', 'Firebase', 'Node Js','Express Js', 'Django Rest Framework'],
  },
  {
    title: 'Freelancer (Upwork)',
    company: 'Upwork Projects',
    date: 'March 2023 - Present',
    description: 'Worked on various client projects involving web development, UI/UX design, and backend APIs.',
    skills: ['React Js','Next Js','React Native', 'UI/UX', 'Firebase', 'Node Js','Express Js', 'Django Rest Framework'],
  },
];

const Experience = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => { 
    const interval = setInterval(() => {
      setDirection('right');
      setCurrentIndex((prevIndex) => 
        prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setDirection('left');
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? experienceData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setDirection('right');
    setCurrentIndex((prevIndex) => 
      prevIndex === experienceData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="experience-section" id="experience">
      <div className="experience-header">
        <h2>Professional Journey</h2>
        <p className="subtitle">My work experience and freelance engagements</p>
      </div>

      <div className="experience-slider-container">
        <button className="slider-arrow left-arrow" onClick={goToPrev}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        
        <div className="experience-slider">
          {experienceData.map((exp, index) => (
            <div 
              key={index}
              className={`experience-card ${index === currentIndex ? 'active' : ''} ${direction}`}
              style={{
                transform: `translateX(${(index - currentIndex) * 120}%)`,
                opacity: index === currentIndex ? 1 : 0.3,
              }}
            >
              <div className="cardss-content">
                <div className="cardss-header">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company-name">{exp.company}</span>
                    <span className="date">{exp.date}</span>
                  </div>
                </div>
                <p className="description">{exp.description}</p>
                <div className="skills-container">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="skill-pill">{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button className="slider-arrow right-arrow" onClick={goToNext}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="slider-indicators">
        {experienceData.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setDirection(index > currentIndex ? 'right' : 'left');
              setCurrentIndex(index);
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;