import React from 'react';
import about1 from '../assets/about1.jpg'; 
import about2 from '../assets/about2.jpg';

// You can replace these with your actual image paths
const IMAGE_1_URL = about1;
const IMAGE_2_URL = about2;

const AboutSection = () => {
  return (
    // MODIFIED: Replaced the solid background color with a subtle vertical gradient from white to light gray.
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        
        {/* Text Content */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800">
            Who Is Sandra Bullock
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-gray-600 leading-relaxed">
            Sandra Bullock is one of the most celebrated and versatile actresses of our time. With a career spanning over 30 years, she's delivered unforgettable performances in blockbusters, indie gems, and award-winning dramas. From her early breakout in Speed to her Oscar-winning role in The Blind Side, Sandra continues to impress audiences with her warmth, wit, and fearless talent.
          </p>
        </div>

        {/* Image Grid */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Wider Image (Left) */}
            <div className="md:col-span-2">
              <img
                src={IMAGE_1_URL}
                alt="Sandra Bullock in a black and white photo"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Narrower Image (Right) */}
            <div className="md:col-span-1">
              <img
                src={IMAGE_2_URL}
                alt="Portrait of Sandra Bullock"
                // MODIFIED: Added object-cover to prevent the image from stretching.
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;