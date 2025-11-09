import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: 'Weather App',
      description: 'Built a responsive weather application using React, OpenWeatherMap API, and localStorage. Features temperature conversion (°C/°F), recent searches, smooth animations, and real-time weather data.',
      tech: ['React', 'CSS', 'REST API', 'localStorage', 'Vercel'],
      liveLink: 'https://weather-app-react-phi-flax.vercel.app/',
      codeLink: 'https://github.com/areej-png/Weather-App-react',
      featured: true
    },
    {
      title: 'Movie Search App',
      description: "A responsive movie search app built with vanilla JavaScript. Fetches real-time movie data from OMDb API and displays results with posters, titles, and release years dynamically.",
      tech: ['HTML', 'CSS', 'JavaScript', 'OMDb API'],
      liveLink: 'https://movie-search-app-three-lac.vercel.app/', 
      codeLink: 'https://github.com/areej-png/movie-search-app'
    },
    {
      title: "Interactive Quiz App",
      description: "A simple interactive quiz application with multiple-choice questions. Users can navigate through questions and see their final score. Built to practice JavaScript logic and DOM manipulation.",
      tech: ["HTML", "CSS", "JavaScript"],
      liveLink: 'https://quiz-app-js-roan.vercel.app/', 
      codeLink: 'https://github.com/areej-png/quiz-app-js'
    },
    {
      title: 'Simple Calculator',
      description: "A functional calculator supporting basic arithmetic operations (addition, subtraction, multiplication, division) with a clean user interface and styled interactive buttons.",
      tech: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://simple-calculator-9xel.vercel.app/',
      codeLink: 'https://github.com/areej-png/simple-calculator'
    },
    {
      title: "GitHub Workflow Simulation",
      description: "Simulated a professional GitHub team workflow to practice real-world version control techniques. Implemented branch management, pull requests, conflict resolution, squash merges, and rebasing.",
      tech: ["Git", "GitHub", "Version Control"],
      liveLink: 'https://team-project-dpuy.vercel.app/',
      codeLink: 'https://github.com/areej-png/team-project'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of 6 projects showcasing my journey in React, JavaScript, and web development
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
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  <FaGithub /> Code
                </a>
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-link btn-primary"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}