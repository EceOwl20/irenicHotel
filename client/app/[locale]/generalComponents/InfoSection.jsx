'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import img1 from '@/public/rooms/jacuzzi/jacuzzi1.webp';
import img2 from '@/public/rooms/french9.jpg';
import img3 from '@/public/rooms/single4.jpg';

const InfoSection = ({ subtitle, title, text }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // mount olur olmaz animasyonu tetikle
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row w-full items-center justify-center py-12 px-6 lg:px-24 gap-10">
      {/* Text Bölümü */}
      <div className="flex flex-col w-full lg:w-1/2 max-w-[600px] gap-[15px] lg:gap-[20px]">
        <span className="text-[14px] lg:text-[16px] font-heebo text-irenicOrange font-medium">
          {subtitle}
        </span>
        <h3 className="text-[28px] md:text-[36px] lg:text-[48px] font-montserrat">
          {title}
        </h3>
        <p className="text-[16px] lg:text-[18px] font-light">
          {text}
        </p>
      </div>

      {/* Görsel Katmanları */}
      <div className="relative w-full lg:w-1/2 max-w-[600px] mt-8 lg:mt-0 h-[250px] sm:h-[300px] lg:h-[400px]">
        {/* Alt Katman - soldan gelir */}
        <div
          className={`
            absolute bottom-0 left-0 w-[45%] h-[45%] z-10
            transform transition-transform duration-1000 ease-in-out
            ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}
          `}
        >
          <Image
            src={img3}
            alt="single room"
            fill
            className="object-cover "
          />
        </div>

        {/* Orta Katman - sağdan gelir */}
        <div
          className={`
            absolute top-0 right-0 w-[55%] h-[55%] z-20
            transform transition-transform duration-1000 delay-200 ease-in-out
            ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
          `}
        >
          <Image
            src={img2}
            alt="french room"
            fill
            className="object-cover"
          />
        </div>

        {/* Üst Katman - statik */}
        <div className="absolute top-1/5 left-1/5 w-[65%] h-[65%] z-30">
          <Image
            src={img1}
            alt="jacuzzi room"
            fill
            className="object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
