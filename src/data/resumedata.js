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

  summary: `Front-End Developer skilled in React, Next.js, Shopify & JavaScript, with 8+ real-world projects. Passionate about building responsive, user-friendly, and headless e-commerce web applications.`,

  skills: [
    {
      category: "Frontend",
      items: ["HTML5 & CSS3", "JavaScript (ES6+)", "React.js", "Next.js", "Responsive Design"],
    },
    {
      category: "E-Commerce",
      items: ["Shopify (Theme Dev & Customization)", "Headless Commerce", "GraphQL"],
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
      title: "Ak Ambala's — Headless E-Commerce Store",
      date: "Jul 2026",
      tech: "Next.js • Shopify • GraphQL",
      description:
        "Built a headless e-commerce store using Next.js and Shopify, with GraphQL powering a fully headless architecture for fast, flexible storefront delivery. Strong performance scores on Google PageSpeed Insights.",
    },
    {
      title: "Monaz — Shopify E-Commerce Store",
      date: "May 2026",
      tech: "Shopify • Theme Customization",
      description:
        "Developed and launched a Shopify store, customizing a base theme end-to-end — layout, branding, and product presentation — to match store requirements.",
    },
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
