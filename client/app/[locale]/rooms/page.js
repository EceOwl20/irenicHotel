"use client";
import React from 'react';
import Rezarvation from "../generalComponents/Reservation.jsx"
import RoomCard from '../generalComponents/RoomCard.jsx';
import Link from 'next/link';
import { subrooms } from '@/data/subrooms.js';

const Page = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] sm:h-[90vh]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/rooms/jacuzzi/jacuzzi1.webp')" }}
        ></div>

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/40 text-center px-4 sm:px-6 md:px-8">
          <h1 className="text-white font-montserrat text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our Rooms
          </h1>
          <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl font-heebo">
            Located in the heart of Antalya’s Konyaaltı district, Irenic Hotel offers a refined selection of stylish rooms designed for both business and leisure travelers. Whether you choose a deluxe room, a cozy corner space, or our exclusive Jacuzzi suite, you’ll enjoy comfort, modern amenities, and effortless city access.
          </p>
        </div>

        {/* Reservation form - should be positioned below text content */}
        <div className="z-10 px-4 sm:px-6 md:px-8">
          <Rezarvation />
        </div>
      </div>

      {/* Room Cards Section */}
      <div className="relative z-10 -mt-8 sm:-mt-10 p-4 sm:p-6 md:p-10 bg-white">
      <RoomCard />
      </div>
      {/* <section className="max-w-7xl mx-auto px-4 py-16 columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {subrooms.map((room) => (
          <Link
            key={room.slug}
            href={`/rooms/${room.slug}`}
            className="break-inside-avoid mb-6 block group"
          >
            <img
              src={room.images[0]}
              alt={room.title}
              className="w-full rounded-2xl object-cover group-hover:scale-105 transition"
            />
            <h3 className="mt-3 font-semibold text-center">{room.title}</h3>
          </Link>
        ))}
      </section> */}
    </div>
  );
};

export default Page;