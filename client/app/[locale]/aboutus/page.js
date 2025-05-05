"use client";
import React from 'react';
import {useTranslations} from 'next-intl';
import FeatureSection from './section/FeatureSection';
import img from "../../../public/general/irenicHotel.webp"

const AboutPage = () => {
  const t = useTranslations('About');

  return (
    <div className="bg-white min-h-screen">
      {/* Başlık Bölgesi - Arka Planlı */}
      <div className="relative w-full h-[60vh] mb-12">
        {/* Arka plan görseli */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img.src})` }}
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
           {t("para1")}
          </p>

          <p>
          {t("para2")}
          </p>

          <p>
          {t("para3")}
          </p>

          <p>
          {t("para4")}
          </p>
        </div>
      </div>

      {/* Özellik Kartları */}
      <FeatureSection />
    </div>
  );
};

export default AboutPage;