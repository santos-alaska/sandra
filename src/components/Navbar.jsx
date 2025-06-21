import React, { useState } from 'react';

// --- Helper Components for Icons ---

const HamburgerIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Logo = () => (
  <div className="flex flex-col items-end -mr-2">
    <span className="text-2xl font-light text-gray-700 tracking-[0.2em]">
      FORTIS
    </span>
    <span className="text-[8px] font-light text-gray-500 tracking-[0.45em] mt-0.5">
      FOUNDATION
    </span>
  </div>
);

// --- The Main Header Component ---

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Memberships', href: '#' },
    { name: 'Meet & Greet', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    // Added `relative` to be the positioning anchor for the mobile menu
    <header className="bg-white w-full border-t-8 border-gray-800 shadow-sm relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* Logo (swapped order for better mobile layout) */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:block">
          <ul className="flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Hamburger Menu Button (visible only on mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu (conditionally rendered) */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full text-center">
                <a
                  href={item.href}
                  className="block py-3 text-gray-600 hover:bg-gray-100 font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;