import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './sections/About';
import Contact from './sections/Contact';
import Experiences from './sections/Experiences';
import Projects from './sections/Projects';
import Header from './sections/Header';
import Skills from './sections/Skills';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Footer from './sections/Footer';
import AnimatedBackground from './components/AnimatedBackground';

function App() {
  return (
    <div className="app container">
      <Header></Header>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
      <AnimatedBackground></AnimatedBackground>
    </div>
  );
}

export default App;
