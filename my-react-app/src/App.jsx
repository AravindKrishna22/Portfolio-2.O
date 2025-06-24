import React from 'react';
import './App.css';
import Navbar from './Components/navbar';
import About from './Components/about';
import Skill from './Components/skill';
import Projects from './Components/project';
 import Contact from './Components/Contact';
// import Footer from './Components/footer';

function App() {
  return (
    <div>
      <Navbar />
      <About />
      <Skill />
     <Projects />
     <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
