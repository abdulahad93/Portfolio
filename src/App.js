import React, { useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from "./Components/Projects";
import Tools from './Components/Tools';
import Contact from './Components/Contact';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="container">
      <Navbar />
      <div id="home"><Home /></div>
      <div id="AboutMe"><AboutMe /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id = "tools"><Tools/></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
