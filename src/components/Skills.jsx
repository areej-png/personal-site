import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaGitAlt, 
  FaGithub
} from 'react-icons/fa';
import { 
  SiVercel,
  SiVite 
} from 'react-icons/si';
import { MdApi } from 'react-icons/md';
import '../styles/Skills.css';

export default function Skills() {
  const skills = [
    { 
      name: "HTML5", 
      icon: <FaHtml5 />,
      color: "#e34c26" 
    },
    { 
      name: "CSS3", 
      icon: <FaCss3Alt />,
      color: "#264de4" 
    },
    { 
      name: "JavaScript", 
      icon: <FaJs />,
      color: "#f0db4f" 
    },
    { 
      name: "React", 
      icon: <FaReact />,
      color: "#61dafb" 
    },
    { 
      name: "Git", 
      icon: <FaGitAlt />,
      color: "#f34f29" 
    },
    { 
      name: "GitHub", 
      icon: <FaGithub />,
      color: "#ffffff" 
    },
    { 
      name: "Vite", 
      icon: <SiVite />,
      color: "#646cff" 
    },
    { 
      name: "Vercel", 
      icon: <SiVercel />,
      color: "#ffffff" 
    },
    { 
      name: "REST APIs", 
      icon: <MdApi />,
      color: "#a3886b" 
    }
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="section-title">Skills & Technologies</h2>
      <p className="section-subtitle">
        Technologies I work with to build modern web applications
      </p>
      
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div 
            className="skill-card" 
            key={index}
            style={{ '--skill-color': skill.color }}
          >
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}