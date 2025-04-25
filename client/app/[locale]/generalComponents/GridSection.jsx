"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const GridSection = () => {
  const t = useTranslations('Homepage.gridSection');
  const images = [
    '/images/accomodation.jpg',
    '/images/restaurants.jpg',
    '/images/beach.jpg',
    '/images/entertainment.jpg'
  ];

  return (
    <section className="bg-irenicGray py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => {
            const label = t(`label${i + 1}`);
            return (
              <div
                key={i}
                className="relative group overflow-hidden
                           shadow-md transition-shadow duration-300 
                           hover:shadow-xl ring-1 ring-transparent hover:ring-white/20"
              >
                {/* Aspect ratio ensures consistent card shapes */}
                <div className="aspect-[4/3] relative">
                  <Image
                    src={src}
                    alt={label}
                    fill
                    className="object-cover transition-transform duration-500 
                               group-hover:scale-110 group-hover:rotate-1"
                  />
                </div>

                {/* Gradient overlay on hover */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                             opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />

                {/* Label */}
                <h3
                  className="absolute bottom-4 left-4 text-white  px-2 py-0 bg-[#0F172B]/80
                             font-montserrat text-lg md:text-xl"
                >
                  {label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GridSection;
