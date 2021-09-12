import React, { ReactNode, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Experiences from "./sections/Experiences";
import Projects from "./sections/Projects";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Fade from "react-reveal/Fade";
function App() {
  return (
    <div className="app container mx-auto">
      <Header></Header>

      <Fade bottom>
        <About></About>
      </Fade>

      <Fade bottom>
      <Projects></Projects>
      </Fade>

      <Fade bottom>
      <Skills></Skills>
      </Fade>

      <Fade bottom>
      <Contact></Contact>
      </Fade>

      <Fade bottom>
      <Footer></Footer>
      </Fade>
      
      <AnimatedBackground></AnimatedBackground>
    </div>
  );
}

export default App;
