import React from 'react';

// SVG Icon Components for better readability
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);


const Footer = () => {
  return (
    <footer className="bg-[#2d4a43] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="border border-gray-400 rounded-full p-2">
                  <MailIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Email:</p>
                  <a href="mailto:sandrabullockannette909@gmail.com" className="text-sm break-all hover:underline">
                    sandrabullockannette909@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="border border-gray-400 rounded-full p-2">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-300">Phone:</p>
                  <a href="tel:+14422359602" className="text-sm hover:underline">
                    +1 (442) 235-9602
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Subscribe */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Subscribe</h3>
            <p className="text-sm text-gray-300 mb-4">
              Stay Informed About Our Security Solution and News
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex items-center border border-gray-500 rounded-md overflow-hidden max-w-sm">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-white text-gray-800 py-2 px-4 focus:outline-none"
                  aria-label="Email for subscription"
                />
                <button type="submit" className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 transition-colors duration-200">
                  <span className="hidden sm:inline">Subscribe</span>
                  <span className="sm:hidden"><ArrowIcon /></span>
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
       <div className="bg-black bg-opacity-20 text-center py-4">
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Sandra Bullock Fans. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;