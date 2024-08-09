import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for the menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const handleMenuItemClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false); // Close the menu when an item is clicked
  };

  return (
    <header className="w-full text-white py-4 flex justify-between items-center border-b-[1px] border-b-blue-600 px-4 md:px-10">
      <div className="flex items-center space-x-4 md:space-x-6">
        <h1 className="text-2xl font-bold uppercase">Particles</h1>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase font-semibold">
          <button onClick={() => handleMenuItemClick('home')} className="text-white hover:text-gray-300">
            <a href="https://staging.devlodges.com/">Home</a>
          </button>
          <button onClick={() => handleMenuItemClick('Services')} className="text-white hover:text-gray-300">Services</button>
          <button onClick={() => handleMenuItemClick('Work')} className="text-white hover:text-gray-300">Work</button>
          <button onClick={() => handleMenuItemClick('about-us')} className="text-white hover:text-gray-300">About Us</button>
          <button onClick={() => handleMenuItemClick('contact-us')} className="text-white hover:text-gray-300">Contact Us</button>
        </nav>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white text-2xl"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 left-0 w-full h-screen bg-blue-900 z-50 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } flex flex-col items-center space-y-6 text-sm uppercase font-semibold`}
        style={{ top: '64px' }} // Adjust top positioning for better alignment
      >
        <button onClick={() => handleMenuItemClick('home')} className="text-white hover:text-gray-300"><a href="https://staging.devlodges.com/">Home</a></button>
        <button onClick={() => handleMenuItemClick('Services')} className="text-white hover:text-gray-300">Services</button>
        <button onClick={() => handleMenuItemClick('Work')} className="text-white hover:text-gray-300">Work</button>
        <button onClick={() => handleMenuItemClick('about-us')} className="text-white hover:text-gray-300">About Us</button>
        <button onClick={() => handleMenuItemClick('contact-us')} className="text-white hover:text-gray-300">Contact Us</button>
      </nav>
    </header>
  );
};

export default Header;
