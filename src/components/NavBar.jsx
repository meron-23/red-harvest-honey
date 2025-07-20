// src/components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  // Function to scroll to a section (we'll implement this more robustly later)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <nav className="bg-yellow-500 p-4 fixed w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-white text-2xl font-bold font-geez cursor-pointer" onClick={() => scrollToSection('hero')}>
          Red Harvested Honey
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8">
          <a onClick={() => scrollToSection('home')} className="text-white hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Home</a>
          <a onClick={() => scrollToSection('about')} className="text-white hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">About Us</a>
          <a onClick={() => scrollToSection('products')} className="text-white hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Products</a>
          <a onClick={() => scrollToSection('contact')} className="text-white hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Contact</a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none focus:ring-2 focus:ring-yellow-300 p-2 rounded">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-yellow-900 absolute top-full left-0 w-full shadow-lg transition-all duration-300 ease-in-out`}>
        <a onClick={() => scrollToSection('hero')} className="block py-3 px-4 text-white hover:bg-yellow-700 hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Home</a>
        <a onClick={() => scrollToSection('about')} className="block py-3 px-4 text-white hover:bg-yellow-700 hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">About Us</a>
        <a onClick={() => scrollToSection('products')} className="block py-3 px-4 text-white hover:bg-yellow-700 hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Products</a>
        <a onClick={() => scrollToSection('contact')} className="block py-3 px-4 text-white hover:bg-yellow-700 hover:text-yellow-300 transition-colors duration-200 cursor-pointer text-lg font-primary">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;