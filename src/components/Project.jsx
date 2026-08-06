import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/Projects.css';

export default function Projects() {
  const projects = [
    {
      title: "Ak Ambala's — Headless E-Commerce Store",
      description: "Built a headless e-commerce storefront using Next.js and Shopify, with GraphQL powering a fully headless architecture for fast, flexible storefront delivery. Achieved strong performance scores on Google PageSpeed Insights.",
      tech: ['Next.js', 'Shopify', 'GraphQL', 'Vercel'],
      liveLink: 'https://akambalas.com',
      codeLink: 'https://github.com/areej-png/ak-ambalas-next',
      featured: true
    },
    {
      title: 'Monaz — Shopify E-Commerce Store',
      description: "Developed and launched a Shopify store, customizing a base theme end-to-end — layout, branding, and product presentation — to match store requirements.",
      tech: ['Shopify', 'Theme Customization'],
      liveLink: 'https://monaaz.com',
      codeLink: null
    },
    {
      title: 'Weather App',
      description: 'Built a responsive weather application using React, OpenWeatherMap API, and localStorage. Features temperature conversion (°C/°F), recent searches, smooth animations, and real-time weather data.',
      tech: ['React', 'CSS', 'REST API', 'localStorage', 'Vercel'],
      liveLink: 'https://weather-app-react-phi-flax.vercel.app/',
      codeLink: 'https://github.com/areej-png/Weather-App-react'
    },
    {
      title: 'Movie Search App',
      description: "A responsive movie search app built with vanilla JavaScript. Fetches real-time movie data from OMDb API and displays results with posters, titles, and release years dynamically.",
      tech: ['HTML', 'CSS', 'JavaScript', 'OMDb API'],
      liveLink: 'https://movie-search-app-three-lac.vercel.app/', 
      codeLink: 'https://github.com/areej-png/movie-search-app'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A collection of projects showcasing my journey in React, Next.js, Shopify, and web development
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-content">
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  {project.featured && <span className="featured-badge">Featured</span>}
                </div>
                <p>{project.description}</p>
                
                <div className="tech-tags">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                {project.codeLink && (
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  >
                    <FaGithub /> Code
                  </a>
                )}
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
