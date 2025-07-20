// src/components/ContactSection.js
import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server,
    // a service like Formspree.io, Netlify Forms, or a direct email link.
    // For now, we'll just log it and show an alert.
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form fields
  };

  return (
    <section id="contact" className="py-20 px-8 bg-yellow-800 text-white text-center">
      {/* Section Title */}
      <h2 className="font-geez text-4xl md:text-5xl text-white mb-8">
        Get In Touch
      </h2>

      <p className="font-primary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
        We'd love to hear from you! Whether you have a question about our honey,
        want to place a special order, or just want to share your experience,
        feel free to reach out.
      </p>

      <div className="container mx-auto max-w-4xl flex flex-col lg:flex-row gap-12 items-start lg:items-stretch">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:w-1/2 bg-white p-8 rounded-lg shadow-xl text-gray-800">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone (Optional)"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent resize-y"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-red-700 text-white px-6 py-3 rounded-full hover:bg-red-800 transition-colors duration-200 font-semibold text-lg mt-4 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-75"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp Option */}
        <div className="lg:w-1/2 flex flex-col justify-center items-center p-8 bg-yellow-700 rounded-lg shadow-xl">
          <p className="text-white text-xl mb-6">Prefer to chat directly?</p>
          <a
            href="https://wa.me/+251912345678?text=Hello%20Red%20Harvested%20Honey,%20I%20have%20a%20question." // Replace with your actual phone number
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3 hover:bg-green-600 transition-colors duration-200 font-bold text-xl shadow-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.298.63 4.453 1.72 6.324L.085 23.915l5.772-1.68C7.45 23.368 9.61 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm4.015 17.581c-.14-.084-.828-.407-.958-.456-.13-.05-.226-.075-.32-.075-.102 0-.285.038-.445.228-.16.19-.62.75-.75.91-.12.16-.25.18-.46.06-.21-.126-.88-.324-1.67-.978-.62-.51-1.04-1.12-1.16-1.32-.12-.2-.01-.31.09-.41.085-.084.19-.2.27-.3.084-.093.112-.15.17-.26.06-.11.03-.2.01-.26-.06-.16-.54-.62-.74-.84-.2-.22-.17-.18-.32-.45-.16-.27-.01-.26-.1-.45-.09-.19-.77-2.07-.95-2.82-.18-.75-.36-.62-.49-.63-.12 0-.27-.01-.4-.01-.13 0-.34.05-.52.26-.18.2-.7 1.05-.7 2.58 0 1.53.73 2.99 1.05 3.2.32.22 1.43 2.18 3.49 2.97 2.05.79 2.55.63 3.01.59.46-.04.82-.25 1.1-.42.28-.17.49-.32.56-.47.07-.15.07-.27.05-.4-.02-.13-.07-.2-.14-.24z"/>
            </svg>
            Contact us on WhatsApp
          </a>
          <p className="text-yellow-200 mt-6 text-lg italic">
              ጥያቄ ካለዎት ያግኙን
              <br/>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;