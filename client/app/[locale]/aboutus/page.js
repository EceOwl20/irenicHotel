"use client";
import React from 'react';
import FeatureSection from './section/FeatureSection';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Başlık Bölgesi - Arka Planlı */}
      <div className="relative w-full h-[60vh] mb-12">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/general/irenicHotel.webp')" }}
        ></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Başlık */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat text-center">
            About Us
          </h1>
        </div>
      </div>

      {/* Açıklama Alanı */}
      <div className="px-4 sm:px-6 md:px-16 pb-12">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 font-heebo text-base sm:text-lg leading-relaxed">
          <p>
            Welcome to <strong>Irenic Hotel</strong>, a modern boutique hotel located in the heart of Antalya’s vibrant Konyaaltı district. Since our opening in November 2023, we’ve been committed to providing an elegant, comfortable, and memorable stay for both business and leisure travelers.
          </p>

          <p>
            With 59 well-appointed rooms, including exclusive Jacuzzi Suites and spacious Corner Rooms, our hotel is designed for guests who appreciate quality, aesthetics, and convenience. Each room is thoughtfully equipped with contemporary amenities to make your stay as seamless as possible.
          </p>

          <p>
            At Irenic Hotel, we believe that hospitality is more than a service — it’s an experience. Whether you're enjoying your morning coffee in our stylish lobby, relaxing by the outdoor pool, or planning your day with help from our 24/7 team, we aim to deliver warm, personalized service every step of the way.
          </p>

          <p>
            Discover the charm of city living with the comfort of a boutique hotel. Welcome home — welcome to Irenic.
          </p>
        </div>
      </div>

      {/* Özellik Kartları */}
      <FeatureSection />
    </div>
  );
};

export default AboutPage;