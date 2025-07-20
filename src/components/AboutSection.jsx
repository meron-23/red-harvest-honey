import React from 'react';
import beekeeper from '../assets/beekeeper.png'
import landscape from '../assets/landscape.jpg'
import honeyComb from '../assets/honeycomb.jpg'

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-8 bg-yellow-100 text-center quintessential-regular">
      {/* Section Title */}
      <h2 className="font-geez text-4xl md:text-5xl text-red-700 mb-12">
        Our Story: Rooted in Tradition, Harvested with Love.
      </h2>

      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center lg:items-start lg:space-x-16">
        {/* About Content - Left Side on Desktop */}
        <div className="lg:w-1/2 text-gray-800 space-y-6 lg:text-left">
          <p className="font-primary text-lg leading-relaxed">
            Red Harvested Honey is 100% organic, raw honey gathered by local Ethiopian beekeepers
            using centuries-old methods. We partner directly with communities, ensuring sustainable
            practices that honor the land and its rich biodiversity.
          </p>
          <p className="font-primary text-lg leading-relaxed">
            Our commitment to purity means you get honey exactly as nature intended – unpasteurized,
            unfiltered, and bursting with the unique flavors of Ethiopia's diverse flora, including
            the prized Kosso trees and various wildflowers.
          </p>
          <p className="font-primary text-lg leading-relaxed font-semibold">
            It's more than honey; it's a testament to tradition, a bond with nature, and a taste of Ethiopian heritage.
            <br />
            <span className="amharic-phrase italic text-yellow-800 text-xl block mt-4">
              "የኢትዮጵያ ማር" <span className="text-base font-normal block">(Ye'Ityop'iya Mar - Ethiopian Honey)</span>
            </span>
          </p>
        </div>

        {/* About Images - Right Side on Desktop */}
        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12 lg:mt-0">
          <img
            src={beekeeper} // Image of an Ethiopian beekeeper
            alt="Ethiopian Beekeeper"
            className="rounded-lg shadow-xl object-cover w-full h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={landscape} // Image of Ethiopian landscape/flora
            alt="Ethiopian Landscape with flora"
            className="rounded-lg shadow-xl object-cover w-full h-auto transform transition-transform duration-300 hover:scale-105"
          />
          <img
            src={honeyComb} // Close-up of a natural honeycomb
            alt="Natural honeycomb close-up"
            className="rounded-lg shadow-xl object-cover w-full h-50 sm:col-span-2 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;