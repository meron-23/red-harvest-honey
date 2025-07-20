
import hero_img from "../assets/hero_img.png"
import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="relative quintessential-regular w-full min-h-screen flex flex-col lg:flex-row items-center justify-center bg-yellow-500 text-center lg:text-left overflow-hidden pt-16">
      {/* Background (optional, for subtle texture or base color) */}
      <div className="absolute inset-0 bg-yellow-500 opacity-10"></div>

      {/* Content Column (Left Side) */}
      <div className="relative z-10 p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-white">
        <h1 className="font-geez text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 text-white drop-shadow-md">
          Pure. Bold. Red Harvested Honey<br />
          From the Heart of Ethiopia.
        </h1>
        <p className="font-primary text-md md:text-lg mb-8 text-yellow-100 drop-shadow-sm max-w-lg lg:max-w-none">
          From the sun-kissed lands of Ethiopia, our honey is a taste of tradition,
          hand-harvested with care, bringing you unparalleled purity and flavor.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#products">
            <button className="px-7 py-3 rounded-full text-md font-bold cursor-pointer transition-all duration-300
                              bg-red-700 text-white shadow-lg shadow-red-700/40
                              hover:bg-red-800 hover:-translate-y-1 hover:shadow-xl hover:shadow-red-700/60
                              focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-opacity-75">
              Explore Products
            </button>
          </a>
          <a href="https://instagram.com" target="_blank">
             <button className="px-7 py-3 rounded-full text-md font-bold cursor-pointer transition-all duration-300
                             bg-transparent text-white border-2 border-white shadow-lg shadow-white/20
                             hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/40
                             focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75">
            Taste the Tradition
          </button>
          </a>
         
        </div>
      </div>

      {/* Image Column (Right Side) */}
      <div className="w-full lg:w-1/2 min-h-80 lg:min-h-screen relative flex items-center justify-center p-4">
        <img
          src={hero_img}
          alt="Honey pouring with Ethiopian elements"
          className="object-cover w-full h-full lg:h-[calc(100vh-6rem)] rounded-3xl shadow-2xl transition-transform duration-500 ease-in-out hover:scale-105"
        />
        {/* Optional: Subtle texture or pattern overlay on the image area */}
        <div className="absolute inset-0 bg-red-700/5 rounded-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;