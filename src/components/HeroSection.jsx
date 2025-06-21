import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white w-full">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-16 px-6 py-24">
        
        {/* Left Column: Content & Buttons */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-md">
          <p className="text-base text-gray-700 leading-relaxed">
            At SandraBullock.fans, we're more than admirers, we're a global fan family. Whether you want exclusive access, support her causes, or invest in her vision, this is your official hub.
          </p>
          <div className="flex items-center gap-4 mt-8">
            <button className="bg-[#2d4a43] text-white font-semibold py-2 px-5 rounded-md hover:bg-opacity-90 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d4a43]">
              Buy Fan Card
            </button>
            <button className="border border-gray-400 text-gray-700 font-semibold py-2 px-5 rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
              Join Meet & Greet
            </button>
          </div>
        </div>

        {/* Right Column: Large Name */}
        <div className="text-black font-light leading-[0.9] text-7xl sm:text-8xl lg:text-9xl whitespace-nowrap">
          <h1 className="tracking-[0.05em]">
            SANDRA .
          </h1>
          <h1>
            BULLOCK
          </h1>
        </div>
        
      </div>
    </section>
  );
};

export default HeroSection;