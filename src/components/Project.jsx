import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'A modern and responsive React Weather App with real-time weather data, temperature conversion, and localStorage for recent searches.',
      tech: ['React', 'CSS', 'REST API', 'localStorage'],
      liveLink: 'https://weather-app-react-phi-flax.vercel.app/',
      codeLink: 'https://github.com/areej-png/Weather-App-react',
      featured: true //  Highlight this project
    },
    {
      title: 'Calculator App',
      description: "A functional calculator built with HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean user interface.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://simple-calculator-9xel.vercel.app/',
      codeLink: 'https://github.com/areej-png/simple-calculator'
    },
    {
      title: "GitHub Workflow Project",
      description: "Simulated a professional GitHub team workflow to practice real-world version control techniques including branching and pull requests.",
      tech: ["Git", "GitHub", "Version Control"],
      liveLink: 'https://team-project-dpuy.vercel.app/',
      codeLink: 'https://github.com/areej-png/team-project'
    },
    {
      title: "To-Do App",
      description: "Task management app with add, complete, and delete functionality. Data persists using localStorage.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      liveLink: 'https://to-do-app-pied-omega.vercel.app/', 
      codeLink: 'https://github.com/areej-png/To-Do-App' 
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my skills in React, JavaScript, and modern web development
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && <span className="featured-badge">Featured</span>}
              
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.codeLink !== '#' && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.liveLink !== '#' && (
                  <a 
                    href={project.liveLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link btn-primary"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}