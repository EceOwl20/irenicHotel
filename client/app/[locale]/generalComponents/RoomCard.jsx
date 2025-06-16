"use client";
import Image from "next/image";
import Link from "next/link";
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
import {useTranslations} from 'next-intl';

export default function RoomCard() {
  const t = useTranslations('Rooms.RoomCard');

  const rooms = [
    {
      slug: "deluxe-room-fr",
      name: t("deluxeRoomFrName"),
      description: t("deluxeRoomFrDescription"),
      image: "/images/balkonyfrenchroom/IRN-FRENCHBED3.webp",
      price: 110,
      icons: [FaBed, FaShower, FaWifi, FaMugHot],
    },
    {
      slug: "deluxe-room-tw",
      name: t("deluxeRoomTwName"),
      description: t("deluxeRoomTwDescription"),
      image: "/images/twintwinbalkonyroom/IRN-DELUXETWIN2.webp",
      price: 115,
      icons: [FaUserFriends, FaBed, FaShower, FaWifi],
    },
    {
      slug: "corner-room",
      name: t("cornerRoomName"),
      description: t("cornerRoomDescription"),
      image: "/images/deluxeCorner/IRN-CORNER2.webp",
      price: 130,
      icons: [FaBed, FaUserFriends, FaExpandArrowsAlt, FaWifi],
    },
    {
      slug: "jacuzzi-suite",
      name: t("jacuzziSuiteName"),
      description: t("jacuzziSuiteDescription"),
      image: "/images/jakuzi/IRN-JAKUZI.webp",
      price: 160,
      icons: [FaHotTub, FaGlassMartiniAlt, FaWifi, FaBed],
    },
    {
      slug: "deluxe-single-room",
      name: t("deluxeSingleRoomName"),
      description: t("deluxeSingleRoomDescription"),
      image: "/images/frenchroom/IRN-DELUXEFRENCHROOM3.webp",
      price: 100,
      icons: [FaUser, FaShower, FaWifi, FaMugHot],
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="min-h-screen mt-10 lg:mt-36 bg-gray-50 p-1 lg:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10 w-[94%] lg:w-[80%] xl:w-[75%] max-w-[1180px]">
        {rooms.map((room) => (
          <div
            key={room.slug}
            className="bg-white  shadow-md overflow-hidden"
          >
            <div className="relative w-full h-64 lg:h-[40vh] lg:min-h-[300px] max-h-[320px]">
              <Image
                src={room.image}
                alt={room.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-xl xl:text-[24px] font-montserrat font-semibold">{room.name}</h3>
              <p className="text-gray-500 font-heebo text-sm mt-1 mb-4">{room.description}</p>
           
              <div className="flex mt-5">
                <div className="flex w-full bg-gray-500 h-[0.1px]"></div>
              </div>
              <div className="flex justify-between items-center mt-5 mb-1">
                <div className="flex gap-5 text-gray-500 text-xl">
                  {room.icons.map((Icon, i) => (
                    <Icon key={i} />
                  ))}
                </div>
                <Link
                  href={`/rooms/${room.slug}`}
                  className="text-sm lg:text-[14px]  font-heebo text-white font-medium transition duration-300 hover:bg-[#0f172b] hover:text-white bg-[#ffa217] px-4 py-2 shadow-sm"
                >
                  {t("moreInfo")}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
