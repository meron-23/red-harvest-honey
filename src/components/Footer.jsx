// src/components/Footer.js
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to scroll to a section (reused from Navbar)
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-yellow-950 py-10 px-8 text-white text-center">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand and Tagline */}
        <div className="flex flex-col items-center md:items-start text-yellow-300">
          <h3 className="font-geez text-2xl font-bold mb-1">
            Red Harvested Honey
          </h3>
          <p className="font-primary text-base text-gray-300">
            Pure. Bold. From the Heart of Ethiopia.
          </p>
          <p className="font-primary text-sm text-gray-400 mt-4">
            Addis Ababa, Ethiopia
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="font-primary text-lg font-semibold mb-3 text-white">Quick Links</h4>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-base">
            <li>
              <a onClick={() => scrollToSection('hero')} className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">Home</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">About Us</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">Products</a>
            </li>
            <li>
              <a onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-yellow-300 transition-colors duration-200 cursor-pointer">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div className="flex flex-col items-center md:items-end">
          <h4 className="font-primary text-lg font-semibold mb-3 text-white">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            {/* Facebook Icon */}
            <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-500 transition-colors duration-200">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.505 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            {/* Instagram Icon */}
            <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-500 transition-colors duration-200">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.792.006 3.24.024a.79.79 0 01.527.132.79.79 0 01.32.32c.123.197.16.357.195.834.037.472.046.597.046 1.832V19.78c0 1.235-.009 1.36-.046 1.832a.79.79 0 01-.195.834.79.79 0 01-.32.32.79.79 0 01-.527.132c-.447.018-.809.024-3.24.024-2.43 0-2.792-.006-3.24-.024a.79.79 0 01-.527-.132.79.79 0 01-.32-.32c-.123-.197-.16-.357-.195-.834-.037-.472-.046-.597-.046-1.832V4.22c0-1.235.009-1.36.046-1.832a.79.79 0 01.195-.834.79.79 0 01.32-.32c.447-.018.809-.024 3.24-.024zM12 5.51c-3.5 0-6.36 2.86-6.36 6.36s2.86 6.36 6.36 6.36 6.36-2.86 6.36-6.36-2.86-6.36-6.36-6.36zm-.07 10.13a4.01 4.01 0 110-8.02 4.01 4.01 0 010 8.02zM18.15 4.5c-.746 0-1.35.603-1.35 1.35s.604 1.35 1.35 1.35c.747 0 1.35-.603 1.35-1.35s-.603-1.35-1.35-1.35z" clipRule="evenodd" />
              </svg>
            </a>
            {/* WhatsApp Icon */}
            <a href="https://wa.me/+251912345678" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-500 transition-colors duration-200">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.298.63 4.453 1.72 6.324L.085 23.915l5.772-1.68C7.45 23.368 9.61 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm4.015 17.581c-.14-.084-.828-.407-.958-.456-.13-.05-.226-.075-.32-.075-.102 0-.285.038-.445.228-.16.19-.62.75-.75.91-.12.16-.25.18-.46.06-.21-.126-.88-.324-1.67-.978-.62-.51-1.04-1.12-1.16-1.32-.12-.2-.01-.31.09-.41.085-.084.19-.2.27-.3.084-.093.112-.15.17-.26.06-.11.03-.2.01-.26-.06-.16-.54-.62-.74-.84-.2-.22-.17-.18-.32-.45-.16-.27-.01-.26-.1-.45-.09-.19-.77-2.07-.95-2.82-.18-.75-.36-.62-.49-.63-.12 0-.27-.01-.4-.01-.13 0-.34.05-.52.26-.18.2-.7 1.05-.7 2.58 0 1.53.73 2.99 1.05 3.2.32.22 1.43 2.18 3.49 2.97 2.05.79 2.55.63 3.01.59.46-.04.82-.25 1.1-.42.28-.17.49-.32.56-.47.07-.15.07-.27.05-.4-.02-.13-.07-.2-.14-.24z"/>
              </svg>
            </a>
          </div>
          <p className="font-primary text-sm text-gray-400">
            Reach us on social media for updates!
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-6 border-t border-gray-700">
        <p className="font-primary text-sm text-gray-500">
          &copy; {currentYear} Red Harvested Honey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;