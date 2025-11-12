import { FaCode, FaLaptopCode, FaRocket, FaCoffee } from 'react-icons/fa';
import '../styles/About.css';

export default function About() {
  const stats = [
    { icon: <FaCode />, number: '6+', label: 'Projects Completed' },
    { icon: <FaLaptopCode />, number: '10+', label: 'Technologies' },
    { icon: <FaRocket />, number: '100%', label: 'Passion & Dedication' },
    { icon: <FaCoffee />, number: '∞', label: 'Cups of Coffee' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me better</p>

        <div className="about-layout">
          {/* Main Content */}
          <div className="about-content">
            <div className="about-intro">
              <h3 className="intro-heading">Hi, I'm Areej! 👋</h3>
              <p className="about-text highlight">
                I'm a passionate <strong>Front-End Developer</strong> focused on creating modern,
                responsive, and user-friendly web experiences.
              </p>
            </div>

            <p className="about-text">
              I enjoy turning complex problems into simple, elegant solutions using clean and
              efficient code. My journey in web development started with HTML & CSS, and has
              evolved into building interactive applications with <strong>React</strong> and
              modern JavaScript.
            </p>

            <p className="about-text">
              With a strong eye for detail and a love for design, I aim to build
              websites that not only function smoothly but also deliver a seamless
              and engaging user experience. I'm always eager to learn new technologies
              and take on challenging projects.
            </p>

            <div className="skills-highlight">
              <h4>What I Do Best:</h4>
              <ul className="skills-list">
                <li>🎨 Responsive Web Design</li>
                <li>⚛️ React Application Development</li>
                <li>🔌 REST API Integration</li>
                <li>📱 Mobile-First Approach</li>
              </ul>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <p>Want to Know more about my experience?</p>
          <a href="/Areej_Aamir_Resume.pdf" download className="cta-btn">Download Resume</a>
        </div>
      </div>
    </section>
  );
}