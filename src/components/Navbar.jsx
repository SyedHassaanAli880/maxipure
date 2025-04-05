import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md">
      <div className="py-4 px-6 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <h1 className="text-white text-lg font-bold">MaxiPure</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="font-bold text-white transition-colors">Shop</a>
          <a href="#" className="font-bold text-white transition-colors">About us</a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 py-4 px-6">
          <a href="#" className="block text-white py-2">Shop</a>
          <a href="#" className="block text-white py-2">About us</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
