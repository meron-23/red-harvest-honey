// src/App.js
import React from 'react';
import HeroSection from './components/HeroSection';
import NavBar from './components/NavBar';

import AboutSection from './components/AboutSection';
import FeaturedProducts from './components/FeaturedProducts';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer'; 


function App() {
  return (
    <div className="App">
      <NavBar />
      <HeroSection id="home" />
      <AboutSection id="about"/>
      <FeaturedProducts id="produts"/>
      <ContactSection id="contact"/>
      <Footer />
    </div>
  );
}

export default App;