import React from 'react';
import Rezarvation from "../generalComponents/Reservation.jsx"
import RoomCard from '../generalComponents/RoomCard.jsx';

const page = () => {
  return (
    <div className="relative w-screen h-[80vh]">
      {/* Arka plan resmi */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/rooms/jacuzzi/jacuzzi1.webp')" }} // kendi resim yolunu yaz buraya
      ></div>

      {/* Yazı katmanı */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30 text-center px-4">
            <h1 className="text-white text-4xl font-bold mb-4">Our Rooms</h1>
            <p className="text-white text-lg max-w-2xl">
            Located in the heart of Antalya’s Konyaaltı district, Irenic Hotel offers a refined selection of stylish rooms designed for both business and leisure travelers. Whether you choose a deluxe room, a cozy corner space, or our exclusive Jacuzzi suite, you’ll enjoy comfort, modern amenities, and effortless city access.
            </p>
      </div>
      <div>
        <Rezarvation />
      </div>
      <div>
        <RoomCard />
      </div>
    </div>
  );
};

export default page;