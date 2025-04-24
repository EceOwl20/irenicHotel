"use client";
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import img1 from "@/public/rooms/jacuzzi/jacuzzi1.webp";
import Link from 'next/link';

const SlidingImageSection = ({ isReversed }) => {
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
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-screen items-center justify-center h-[60vh] overflow-hidden`}
    >
      {/* Text half */}
      <div className="flex flex-col w-[50%] items-center justify-center text-center bg-gray-100 h-full z-20">
        <div className='flex flex-col w-[70%] max-w-[530px] items-center justify-center text-center gap-[15px] lg:gap-[35px] h-full'>
          <h3 className='text-[24px] md:text-[28px] lg:text-[36px] font-montserrat leading-[1.5]'>Single Rooms</h3>
          <p className='text-[12px] lg:text-[14px] font-heebo text-irenicGray'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit, sed beatae accusantium non cumque, mollitia eaque vel ipsa fugit atque ipsam! Quis dicta impedit tempore magni odit suscipit facilis sapiente?</p>
          <Link href="/rooms" className='bg-irenicBlack text-white py-[10px] px-[18px] uppercase hover:bg-[#FEA116]'>CHECK AVAILABILITY</Link>
        </div>
      </div>

      {/* Image half with drop-line and slide-in */}
      <div className="relative w-[50%] h-full overflow-hidden">
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
          <Image src={img1} alt='room' width={img1.width} height={img1.height} className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default SlidingImageSection;
