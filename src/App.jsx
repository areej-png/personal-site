import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Resume from "./components/Resum"; 
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Portfolio main page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Skills />
              <Project />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* Resume page */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}
