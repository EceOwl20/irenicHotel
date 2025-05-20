"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import img1 from "../../../public/images/kahvaltı-bar/IRN-HAVALTI2.webp";
import img2 from "../../../public/images/kahvaltı-bar/IRN-HAVALTI3.webp";
import img3 from "../../../public/images/kahvaltı-bar/IRN-HAVALTI6.webp";
import img4 from "../../../public/images/kahvaltı-bar/IRN-KAHALTI5.webp";
import img5 from "../../../public/images/kahvaltı-bar/IRN-KAHVALTI.webp";
import img6 from "../../../public/images/kahvaltı-bar/IRN-KAHVALTI1.webp";
import img7 from "../../../public/images/kahvaltı-bar/IRN-KAHVALTI4.webp";
import img8 from "../../../public/images/kahvaltı-bar/IRN-BAR-2.webp";
import img9 from "../../../public/images/kahvaltı-bar/IRN-BAR3.webp";
import img10 from "../../../public/images/kahvaltı-bar/IRN-REST.webp";
import img11 from "../../../public/images/kahvaltı-bar/IRN-restorant2.webp";
import img12 from "../../../public/images/havuz/IRN-HAV.webp";
import img13 from "../../../public/images/havuz/IRN-HAVUZ2.webp";
import img14 from "../../../public/images/havuz/IRN-HAVUZ3.webp";

const SlidingCarouselSection = ({
  isReversed = false,
  title,
  text,
  buttonText,
  images = []
}) => {
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setAnimate(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    ref.current && obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const initialTranslate = isReversed ? "translate-x-full" : "-translate-x-full";
  const prev = () => setCurrentIndex(i => (i - 1 + images.length) % images.length);
  const next = () => setCurrentIndex(i => (i + 1) % images.length);

  return (
    <div
      ref={ref}
      className={`
        flex flex-col 
        ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
        w-full items-center justify-center
      `}
    >
      {/* Metin Kısmı */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-lg text-center space-y-4">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-montserrat">
            {title}
          </h3>
          <p className="text-sm md:text-base font-heebo text-irenicGray">
            {text}
          </p>
          {/* <Link
            href="/rooms"
            className="inline-block bg-irenicBlack text-white uppercase text-sm md:text-base py-2 px-4 hover:bg-[#FEA116] transition"
          >
            {buttonText}
          </Link> */}
        </div>
      </div>

      {/* Görsel Kısmı */}
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[500px] overflow-hidden">
        {/* Drop-line */}
        <div
          className={`
            absolute top-0 
            ${isReversed ? 'right-0' : 'left-0'} 
            w-1 bg-[#0F172B] 
            transition-[height] duration-500 
            ${animate ? 'h-full' : 'h-0'}
          `}
        />

        {/* Sliding & Carousel Container */}
        <div
          className={`
            absolute inset-0 
            transform transition-transform duration-1000 ease-out delay-500
            ${animate ? 'translate-x-0' : initialTranslate}
          `}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`
                absolute inset-0 
                transition-opacity duration-700
                ${idx === currentIndex ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <Image
                src={img}
                alt={title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Kontroller */}
          <button
            onClick={prev}
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SlidingCarousel() {
  const t = useTranslations('ServicesPage');
  
  const sections = [
    {
      title: t("title1"),
      text: t("text1"),
      buttonText: 'Detaylar',
      images: [ img12, img13, img14 ],
      isReversed: false
    },
    {
      title: t("title2"),
      text: t("text2"),
      buttonText: 'Menü',
      images: [ img1, img2, img3,img4,img5,img6,img7 ],
      isReversed: true
    },
    {
      title: t("title3"),
      text: t("text3"),
      buttonText: 'Keşfet',
      images: [ img8, img9 ],
      isReversed: false
    }
  ];

  return (
    <div className="space-y-12 mb-10 lg:mb-20">
      {sections.map((sec, i) => (
        <SlidingCarouselSection key={i} {...sec} />
      ))}
    </div>
  );
}
