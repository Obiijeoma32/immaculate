import { useRef } from "react";
import AboutMe from "./Components/AboutMe";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import "./App.css";

function App() {
  const heroSection = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const skill = useRef(null);
  const resume = useRef(null);
  const certification = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Header resume={resume} certification={certification} contact={contact} scrollToSection={scrollToSection} heroSection={heroSection} about={about} project={project} skill={skill} />
      <div ref={heroSection}>
        <HeroSection />
      </div>
      <div ref={about}>
        <AboutMe />
      </div>
      <div ref={project}>
        <Projects />
      </div>
      <div ref={skill}>
        <Skills />
      </div>
      <div ref={resume}>
        <Resume />
      </div>
      <div ref={certification}>
        <Certification />
      </div>
      <div ref={contact}>
        <Contact />
      </div>
    </>
  );
}

export default App;
