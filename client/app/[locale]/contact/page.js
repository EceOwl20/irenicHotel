"use client";
import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Başlık Bölgesi - Arka Planlı */}
      <div className="relative w-full h-[60vh] mb-12">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/general/contact-bg.webp')" }} // resim yolunu değiştir
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Başlık */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat text-center">
            Contact Us
          </h1>
        </div>
      </div>

      {/* İletişim Bilgileri + Form */}
      <div className="px-4 sm:px-6 md:px-16 pb-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
        {/* Bilgiler */}
        <div className="space-y-6 text-gray-700 font-heebo text-base sm:text-lg leading-relaxed">
          <h2 className="text-2xl font-bold font-montserrat mb-4 text-irenicBlack">Get In Touch</h2>
          <p>We’re here to answer your questions and make your stay memorable.</p>
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-xl text-irenicBlack mt-1" />
            <span>Liman Mh. Atatürk Blv. No:265, Konyaaltı, Antalya</span>
          </div>
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-xl text-irenicBlack" />
            <span>+90 242 999 88 59</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-xl text-irenicBlack" />
            <span>info@irenichotel.com</span>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-irenicBlack" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-irenicBlack" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea rows={5} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-irenicBlack"></textarea>
          </div>
          <button type="submit" className="bg-irenicBlack text-white px-6 py-2 rounded-md hover:bg-black transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;