import React from 'react'
import { useTranslations } from 'next-intl';
import img2 from "../rooms/images/bannerfoto.webp"

const SubRoomBanner = ({slug}) => {
    const t = useTranslations('subrooms');

    const title       = t(`${slug}.title`);
    const description = t(`${slug}.description`);

  return (
    <div className="flex flex-col max-w-screen h-[62vh]">
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
        {title}
        </h1>
        <p className="text-white text-base sm:text-lg md:text-xl max-w-3xl font-heebo">
        {description}
        </p>
      </div>
    </div>
  </div>
  )
}

export default SubRoomBanner
