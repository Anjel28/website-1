import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce site with cart functionality.',
      technologies: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Weather App',
      description: 'Real-time weather information using API integration.',
      technologies: ['JavaScript', 'API', 'CSS'],
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;