import React from 'react';

const BrandPartnerships = () => {
  return (
    <section id="contact" className="bg-white font-sans w-full">
      <div className="container mx-auto text-center py-[100px] px-6">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl text-gray-900 font-light mb-6 tracking-wide">
          Brand Partnerships & Promotions
        </h1>
        
        {/* Subheading */}
        <p className="text-sm text-gray-600 max-w-md mx-auto mb-[100px]">
          Interested in promoting your brand or company? Reach out to our team directly for tailored partnership packages.
        </p>
        
        {/* Contact Label */}
        <p className="text-lg text-gray-800 mb-3">
          Contact us
        </p>
        
        {/* Email Address */}
        <a 
          href="mailto:sandrabullockannette909@gmail.com" 
          className="text-lg md:text-2xl text-black font-semibold break-all"
        >
          sandrabullockannette909@gmail.com
        </a>
        
      </div>
    </section>
  );
};

export default BrandPartnerships;