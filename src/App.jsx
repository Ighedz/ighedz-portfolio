
import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import About from './Components/About';
import Pharmacy from './Components/Pharmacy'; 
import Tech from './Components/Tech';
import Project from './Components/Project';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Pharmacy />
      <Tech />
      <Project />
      <Contact />
    </div>
  )
}; 

export default App;
