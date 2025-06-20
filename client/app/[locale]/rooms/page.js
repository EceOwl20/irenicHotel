"use client";
import React from 'react';
import Reservation from "../generalComponents/Reservation.jsx"
import RoomCard from '../generalComponents/RoomCard.jsx';
import {useTranslations} from 'next-intl';
import img from "@/public/rooms/jacuzzi/jacuzzi1.webp"
import img2 from "./images/bannerfoto.webp"
import BookingPlatforms from '../generalComponents/BookingPlatforms.jsx';

const Page = () => {
  const t = useTranslations('Rooms');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] sm:h-[90vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${img2.src})` }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-white font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
           {t("heroTitle")}
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl font-heebo">
          {t("heroDescription")}
          </p>
        </div>

        {/* Reservation form - should be positioned below text content */}
        <div className="z-10 px-4 sm:px-6 md:px-8">
        <Reservation />
        </div>
      </div>

      {/* Room Cards Section */}
      <div className="relative z-10 -mt-8 sm:-mt-10 p-4 sm:p-6 md:p-10 bg-white">
      <RoomCard />
      </div>

     <div className='py-10 lg:py-16'>
       <BookingPlatforms/>
     </div>
      
    </div>
  );
};

export default Page;