import React from 'react';
import './Education.css';

const educationData = [
  {
    year: '2020-2025',
    degree: 'BS Software Engineering',
    institution: 'University of Central Punjab',
    description: 'Specializing in Full Stack Development and System Design.',
    icon: '🎓',
    status: 'Completed'
  },
  {
    year: '2018-2020',
    degree: 'Intermediate (FSC)',
    institution: 'Punjab College',
    description: 'Completed with focus on Mathematics and Chemistry and Physics.',
    icon: '📚',
    status: 'Completed'
  },
  {
    year: '2016-2018',
    degree: 'Matriculation',
    institution: 'Government Boy School',
    description: 'Completed with distinction in Mathematics and Computer Science.',
    icon: '🏆',
    status: 'Completed'
  }
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <div className="education-header">
          <h2>Education</h2>
          <p className="education-section-subtitle">My academic journey and qualifications</p>
        </div>

        <div className="education-timeline-container">
          <div className="education-timeline-line"></div>
          
          {educationData.map((item, index) => (
            <div key={index} className="education-timeline-item">
              <div className="education-timeline-content">
                <div className="education-timeline-marker">
                  <span className="education-timeline-icon">{item.icon}</span>
                </div>
                
                <div className="education-card">
                  <div className="education-card-header">
                    <div className="education-year-badge">{item.year}</div>
                    <div className={`education-status-badge education-status-${item.status.toLowerCase().replace(' ', '-')}`}>
                      {item.status}
                    </div>
                  </div>
                  
                  <h3 className="education-degree-title">{item.degree}</h3>
                  <p className="education-institution-name">{item.institution}</p>
                  <p className="education-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;