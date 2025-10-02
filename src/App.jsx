import { useState } from 'react';
import Navbar from './components/Navbar'; // Import Navbar component
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import Experience from './components/Experience'
import './App.css';

function App() {
  return (
    <>
      <Navbar />  {/* Add Navbar Here */}
      <Hero />
      <About />
      <Experience />   {/* New Section */}
      <Education />    {/* New Section */}
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
