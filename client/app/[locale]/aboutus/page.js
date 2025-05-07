"use client";
import React from 'react';
import {useTranslations} from 'next-intl';
import FeatureSection from './section/FeatureSection';
import img from "../../../public/general/irenicHotel.webp"
import SubBanner from '../generalComponents/SubBanner';

const AboutPage = () => {
  const t = useTranslations('About');

  return (
    <div className="bg-white min-h-screen">
      {/* Başlık Bölgesi - Arka Planlı */}
    <SubBanner img={img} header="About Us"/>

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