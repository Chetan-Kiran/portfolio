import '../styles/projects.css';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with user authentication, product management, and payment integration. Built with React, Node.js, and MongoDB.',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      tags: ['React', 'Firebase', 'Tailwind']
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      tags: ['JavaScript', 'API', 'CSS']
    },
    {
      title: 'Portfolio Generator',
      description: 'A tool that helps developers create beautiful portfolio websites with customizable themes and templates.',
      github: 'https://github.com',
      demo: 'https://demo.example.com',
      tags: ['React', 'TypeScript', 'Vite']
    }
  ];

  return (
    <div className="projects">
      <div className="projects-container">
        <h1 className="page-title">My Projects</h1>
        <p className="projects-intro">
          Here are some of my recent projects. Each one represents a unique challenge and learning experience.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                  <Github size={18} />
                  <span>Code</span>
                </a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                  <ExternalLink size={18} />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
