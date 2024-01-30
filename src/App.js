import AboutMe from "./Components/AboutMe";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Resume from "./Components/Resume";
import Certification from "./Components/Certification";
import Contact from "./Components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Skills />
      <Resume />
      <Certification />
      <Contact />
    </>
  );
}

export default App;
