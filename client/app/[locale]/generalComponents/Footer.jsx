import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-irenicBlack text-white px-6 py-12 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Column 1 - Hotel Info */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Irenic Hotel</h4>
          <p className="text-sm text-gray-300 leading-relaxed">
            Discover boutique elegance in the heart of Antalya. Your comfort is our priority.
          </p>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1" />
              <span>Liman Mh. Atatürk Blv. No:265, Antalya</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt />
              <span>+90 242 999 88 59</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope />
              <span>info@irenichotel.com</span>
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm text-gray-300">
            <li><a href="/rooms" className="hover:underline hover:text-white">Rooms</a></li>
            <li><a href="/about" className="hover:underline hover:text-white">About</a></li>
            <li><a href="/contact" className="hover:underline hover:text-white">Contact</a></li>
            <li><a href="/reservation" className="hover:underline hover:text-white">Reservation</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-xs sm:text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Irenic Hotel. All rights reserved.</p>
        <p className="mt-1 text-gray-500">Powered by <span className="text-white font-semibold">DGTLFACE</span></p>
      </div>
    </footer>
  );
};

export default Footer;