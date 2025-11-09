import { useState, useEffect } from 'react';
import '../styles/Hero.css';

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  
  const titles = [
    "Front-End Developer",
    "React Enthusiast", 
    "Problem Solver",
    "UI Creator"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <p className="greeting">Hi, I'm</p>
        
        <h1 className="hero-name">Areej Aamir</h1>
        
        <div className="title-container">
          <h2 className="animated-title">{titles[titleIndex]}</h2>
        </div>
        
        <p className="hero-tagline">
        Building high-performing, visually engaging web experiences focused on seamless user interaction.
        </p>
        
        <div className="cta-buttons">
            <button className="btn btn-primary"  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View My Work</button>
          <button className="btn btn-secondary"  onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Get in Touch</button>
        </div>
      </div>
    </section>
  );
}