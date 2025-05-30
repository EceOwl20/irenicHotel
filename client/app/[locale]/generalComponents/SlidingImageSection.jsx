"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from '@/i18n/navigation';

const SlidingImageSection = ({ isReversed, title,text,buttonText,img }) => {
  const [animate, setAnimate] = useState(false);
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
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  // determine initial off-screen direction
  const initialTranslate = isReversed ? "translate-x-full" : "-translate-x-full";

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-screen items-center justify-center h-[80vh] lg:h-[60vh] overflow-hidden`}
    >
      {/* Text half */}
      <div className="flex flex-col w-[100%] lg:w-[50%] items-center justify-center text-center bg-gray-100 h-full z-20">
        <div className='flex flex-col w-[70%] max-w-[530px] items-center justify-center text-center gap-[15px] lg:gap-[35px] h-full'>
          <h3 className='text-[24px] md:text-[28px] lg:text-[36px] font-montserrat leading-[1.5]'>{title}</h3>
          <p className='text-[12px] lg:text-[14px] font-heebo text-irenicGray'>{text}</p>
          <Link href="/rooms" className='bg-irenicBlack text-white text-[14px] lg:text-[16px] py-[6px] px-[12px] lg:py-[10px] lg:px-[18px] uppercase hover:bg-[#FEA116]'>{buttonText}</Link>
        </div>
      </div>

      {/* Image half with drop-line and slide-in */}
      <div className="relative w-[100%] lg:w-[50%] min-h-[300px] h-full overflow-hidden">
        {/* 1px grey line curtain */}
        <div
          className={
            `absolute ${isReversed ? 'right-0' : 'left-0'} top-0 w-[8px] bg-[#0F172B] transition-[height] duration-500 ${animate ? 'h-full' : 'h-0'}`
          }
        />
        {/* sliding image */}
        <div
          className={`transform transition-transform duration-1000 ease-out delay-500 ${animate ? 'translate-x-0' : initialTranslate} w-full h-full`}
        >
          <Image src={img} alt='room' width={img.width} height={img.height} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SlidingImageSection;
