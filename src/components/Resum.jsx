import React, { useRef } from "react";
import "../styles/Resume.css";
import { useReactToPrint } from "react-to-print";
import { resumeData } from "../data/resumedata";

export default function Resume() {
  const { header, summary, skills, projects, education } = resumeData;

  const componentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: "Areej_Aamir_Resume",
    pageStyle: `
      @media print {
        body { -webkit-print-color-adjust: exact; }
      }
    `,
  });

  return (
    <div className="resume-wrapper">
      {/*Printable Section */}
      <div id="resume" className="resume-container" ref={componentRef}>
        {/* ===== Header ===== */}
        <div className="header">
          <h1 className="name">{header.name}</h1>
          <p className="title">{header.title}</p>
          <div className="resume-contact">
            {header.contact.map((item, index) => (
              <span key={index}>
                {item.icon} {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ===== Summary ===== */}
        <div className="section">
          <h2 className="section-title">Professional Summary</h2>
          <p className="summary">{summary}</p>
        </div>

        {/* ===== Skills ===== */}
        <div className="section">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((s, i) => (
              <div className="skill-category" key={i}>
                <h4>{s.category}</h4>
                <ul>
                  {s.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ===== Projects ===== */}
        <div className="section">
          <h2 className="section-title">Featured Projects</h2>
          {projects.map((p, i) => (
            <div className="project" key={i}>
              <div className="project-header">
                <h3 className="project-title">{p.title}</h3>
                <span className="project-date">{p.date}</span>
              </div>
              <p className="project-tech">{p.tech}</p>
              <p className="project-description">{p.description}</p>
            </div>
          ))}
        </div>

        {/* ===== Education ===== */}
        <div className="section">
          <h2 className="section-title">Education & Learning</h2>
          {education.map((edu, i) => (
            <div className="education-item" key={i}>
              <div>
                <div className="degree">{edu.degree}</div>
                <div className="institution">{edu.institution}</div>
              </div>
              <span className="year">{edu.year}</span>
            </div>
          ))}
        </div>
      </div>

      {/*Download Button */}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={handlePrint} className="download-btn">
          Download Resume PDF
        </button>
      </div>
    </div>
  );
}
