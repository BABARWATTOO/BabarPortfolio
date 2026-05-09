import React, { useState } from 'react';
import './Project.css';

// Project images
import project1 from '../assets/xpertinfx.png';
import project2 from '../assets/pix.png';
import project3 from '../assets/vort.png';
import project4 from '../assets/phool.png';
import project5 from '../assets/usconstruct.png';
import project6 from '../assets/Alfateh.png';

const projects = [
  {
    id: 4,
    title: 'Phool Nagar Shop',
    description: 'Complete ecommerce website for various products',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: project4,
    link: 'https://www.phoolnagar.shop/'
  },
  {
    id: 1,
    title: 'Xpertinfx',
    description: 'Full-featured online service with payment integration',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: project1,
    link: 'https://xpertinfx.com'
  },
  {
    id: 3,
    title: 'Vortex Marketing',
    description: 'Modern marketing website to showcase services and attract clients',
    tags: ['Next.js', 'Firebase', 'Redux', 'CSS'],
    image: project3,
    link: 'https://fortesting321.netlify.app'
  },
  {
    id: 2,
    title: 'PixelPro',
    description: 'Platform to hire photographers and buy camera equipment',
    tags: ['Express.js', 'Next.js', 'MongoDB', 'CSS'],
    image: project2,
    link: '#'
  },
  {
    id: 5,
    title: 'US Construction Estimation',
    description: 'Innovative platform for construction estimations and planning',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: project5,
    link: 'https://www.usconstructionestimation.com/'
  },
  {
    id: 6,
    title: 'Al Fateh Exports',
    description: 'User-friendly Exports platform for various countrries',
    tags: ['React', 'Django REST', 'SQLite3', 'WebSockets'],
    image: project6,
    link: 'https://www.alfatehexports.com/'
  }
];

const Project = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (image, title) => {
    setSelectedImage({ image, title });
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="project-section" id="projects">
      <div className="project-container">
        <div className="project-header">
          <h2>My <span className="project-gradient-text">Projects</span></h2>
          <p className="project-section-subtitle">Recent work and case studies</p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-card-image" onClick={() => openImage(project.image, project.title)}>
                <img src={project.image} alt={project.title} />
                <div className="project-image-overlay">
                  <span className="project-view-icon">🔍</span>
                </div>
              </div>
              
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">{tag}</span>
                  ))}
                </div>
                
                <a href={project.link} className="project-view-button">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="project-image-modal" onClick={closeImage}>
            <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="project-modal-close" onClick={closeImage}>×</button>
              <img src={selectedImage.image} alt={selectedImage.title} />
              <h3>{selectedImage.title}</h3>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
