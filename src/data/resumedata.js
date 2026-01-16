import { data } from "react-router-dom";

// data.js
export const resumeData = {
  header: {
    name: "SIDRA AAMIR",
    title: "Front-End Developer",
    contact: [
      { icon: "📧", text: "areejamir890@gmail.com" },
      { icon: "📱", text: "+92 318 1067738" },
      { icon: "📍", text: "Karachi, Pakistan" },
    ],
  },

  summary: `Front-End Developer specializing in React and modern JavaScript, with hands-on experience building responsive, user-friendly web applications. Strong practical background in API integration, state management, version control, and deployment. Completed 6+ real-world projects demonstrating clean code practices and problem-solving skills while pursuing a Bachelor of Computer Science.`,

  skills: [
    {
      category: "Frontend",
      items: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Responsive Design"],
    },
    {
      category: "Tools",
      items: ["Git & GitHub", "Vite & npm", "VS Code", "Vercel"],
    },
    {
      category: "Other",
      items: ["REST APIs", "localStorage", "Version Control", "Deployment"],
    },
  ],

  projects: [
    {
      title: "Weather App (React)",
      date: "Nov 2025",
      tech: "React • REST API • localStorage • Vercel",
      description:
        "Responsive weather app with real-time data, temperature conversion (°C/°F), recent searches with localStorage, smooth animations, and comprehensive error handling.",
    },
    {
      title: "Movie Search App",
      date: "Oct 2025",
      tech: "JavaScript • OMDb API • DOM Manipulation",
      description:
        "Responsive movie search application fetching real-time data from OMDb API with dynamic results display including posters and movie details.",
    },
    {
         title: "Interactive Quiz App",
      date: "Oct 2025",
      tech: "HTML • CSS • JavaScript",
      description:
      " Interactive quiz with multiple-choice questions, navigation functionality, and score tracking demonstrating JavaScript logic and DOM manipulation."
    },
    {
        title: "GitHub Workflow Simulation",
        date: "Oct 2025",
        tech: "Git • GitHub • Version Control",
        description: 
        "Professional workflow simulation practicing branch management, pull requests, conflict resolution, and rebasing techniques."
       
    },
    {
        title: "Simple Calculator",
        date: "Oct 2025",
        tech: "HTML • CSS • JavaScript",
        description:
        "Functional calculator with clean UI supporting basic arithmetic operations with styled interactive buttons."
    }
  ],

  education: [
    {
      degree: "Self-Taught Front-End Developer",
      institution: "Comprehensive YouTube tutorials & hands-on projects",
      year: "Jun 2025 - Present",
    },
    {
      degree: "Intermediate",
      institution: "Women College, Karachi",
      year: "Completed",
    },
    {
      degree: "Bachelor of computer science",
      institution: "University of Karachi",
      year: "2023 - In Progress",
    }
  ],
};
