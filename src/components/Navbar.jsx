import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">
          Areej<span>Dev</span>
        </h2>

        <div
          className={`menu-icon ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <a href="#home" onClick={() => handleScroll("home")}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => handleScroll("about")}>About</a>
          </li>
          <li>
            <a href="#skills" onClick={() => handleScroll("skills")}>Skills</a>
          </li>
          <li>
            <Link to="/resume" className="nav-link" onClick={() => setMenuOpen(false)}>Resume</Link>
          </li>
          <li>
            <a href="#projects" onClick={() => handleScroll("projects")}>Projects</a>
          </li>
          <li>
            <a href="#contact" onClick={() => handleScroll("contact")}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}