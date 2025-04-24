"use client";
import Image from "next/image";
import {
  FaBed,
  FaUserFriends,
  FaShower,
  FaHotTub,
  FaWifi,
  FaMugHot,
  FaGlassMartiniAlt,
  FaUser,
  FaExpandArrowsAlt,
} from "react-icons/fa";

export default function RoomCard() {
  const rooms = [
    {
      name: "Deluxe Room FR",
      description: "Comfortable double bed with all modern amenities, ideal for couples.",
      image: "/images/rooms/deluxe-fr.webp",
      price: 110,
      icons: [FaBed, FaShower, FaWifi, FaMugHot],
    },
    {
      name: "Deluxe Room TW",
      description: "Twin beds and a cozy atmosphere for friends or solo travelers.",
      image: "/images/rooms/deluxe-tw.webp",
      price: 115,
      icons: [FaUserFriends, FaBed, FaShower, FaWifi],
    },
    {
      name: "Corner Room",
      description: "Spacious corner room with one double and one single bed.",
      image: "/images/rooms/corner.webp",
      price: 130,
      icons: [FaBed, FaUserFriends, FaExpandArrowsAlt, FaWifi],
    },
    {
      name: "Jacuzzi Suite",
      description: "A luxurious suite with a jacuzzi — perfect for a romantic escape.",
      image: "/images/rooms/jacuzzi.webp",
      price: 160,
      icons: [FaHotTub, FaGlassMartiniAlt, FaWifi, FaBed],
    },
    {
      name: "Deluxe Single Room",
      description: "Ideal for solo travelers. Cozy and fully equipped for comfort.",
      image: "/images/rooms/single.webp",
      price: 100,
      icons: [FaUser, FaShower, FaWifi, FaMugHot],
    },
  ];

  return (
    <div className="flex flex-col items-center">
        <div className="min-h-screen mt-36 bg-gray-50 p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 w-8/12">
      {rooms.map((room, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <div className="relative w-full h-64">
            <Image
              src={room.image}
              alt={room.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="p-5">
            <h3 className="text-xl font-montserrat font-semibold">{room.name}</h3>
            <p className="text-gray-500 font-heebo text-sm mt-1 mb-4">{room.description}</p>
            <button className="bg-black text-white font-heebo text-sm px-4 py-2 rounded hover:bg-gray-800">
              BOOK FROM ${room.price}
            </button>
            <div className="flex mt-5">
                <div className="flex w-full bg-gray-500 h-[0.1px]"></div>
            </div>
            <div className="flex justify-between items-center mt-5 mb-1">
                {/* İkonlar */}
                <div className="flex gap-5 text-gray-500 text-xl">
                    {room.icons.map((Icon, i) => (
                    <Icon key={i} />
                    ))}
                </div>

                {/* More Info Butonu */}
                <button className="text-sm text-gray-600 font-heebo hover:text-white font-medium cursor-pointer transition duration-300 bg-orange-100 hover:bg-orange-500 px-4 py-2 rounded-md shadow-sm">
                    More Info
                </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}