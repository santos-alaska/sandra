import React from 'react';
import why from '../assets/why.png';
import about2 from '../assets/about2.jpg';


// Placeholder image URL from the screenshot
const IMAGE_URL = why;

const AdditionalInfoSection = () => {
  return (
    <section className="bg-white w-full py-16 lg:py-24">
      <div className=" px-6 flex flex-col">

        {/* --- Her Career Block --- */}
        <div className="text-center md:text-right max-w-xl md:ml-[42%] w-full mb-16 ">
          <h2 className="text-3xl md:text-[45px] text-gray-800 mb-2">
            Her Career
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-3">
            Sandra Bullock's filmography is as rich as it is diverse. Some of her most iconic roles includes and more recently, her stunning performances in Bird Box, The Unforgivable, and The Lost City.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Beyond acting, Sandra is also a producer through her company, Fortis Films, bringing powerful stories and voices to the forefront of entertainment.
          </p>
        </div>

        {/* --- Her Philanthropy Block --- */}
        <div className="text-center md:text-left md:ml-[13%]  md:max-w-[40%]  w-full mb-16">
          <h2 className="text-3xl md:text-[45px]  text-gray-800 mb-2">
            Her Philanthropy
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed mb-8">
            Sandra is not only admired for her work on screen but for the heart she brings to the world off screen. Over the years, she has quietly donated millions to causes such as Disaster relief (Hurricane Katrina, Haiti earthquake, COVID-19 support), Children's education and health, racial justice and equality programs.
          </p>
        </div>
        <div className="h-[400px] overflow-hidden max-w-xl mx-auto w-full mb-16">
          <img
            src={IMAGE_URL}
            alt="A warm portrait of Sandra Bullock"
            className=""
          />
        </div>

        {/* --- Why This Site Exists Block --- */}
        <div className="text-center md:text-right md:max-w-[30%] md:ml-[42%] w-full mb-16 ">
          <h2 className="text-3xl md:text-[45px]  text-gray-800 mb-2">
            Why This Site Exists
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            This fan page was created by a global community of admirers who want to honor Sandra Bullock's work, her heart, and her legacy.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AdditionalInfoSection;