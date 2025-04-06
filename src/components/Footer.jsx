import React from 'react';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa'; // Facebook and WhatsApp icons from FontAwesome

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            <p>© 2025 MaxiPure. All rights reserved.</p>
            <p className="mt-2 text-sm">Shop#11, Japan Mansion Near Bank Al-Habib, Regal Chowk Saddar, Karachi, Pakistan</p>
            <p className="mt-2 text-sm">Shop timings: Mon-Sun 10:00 AM - 8:00 PM</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a 
              href="https://wa.me/923009188812" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
