"use client";
import {useTranslations} from 'next-intl';
import React from 'react';
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaCocktail,
  FaTshirt,
  FaPlane,
} from 'react-icons/fa';

export default function ServicesSection() {
  const t = useTranslations('Services');

  const services = [
    {
      Icon: FaWifi,
      title: t("titleFreeWifi"),
      description: t("descriptionFreeWifi"),
    },
    {
      Icon: FaSwimmingPool,
      title: t("titleOpenSwimmingPool"),
      description: t("descriptionOpenSwimmingPool"),
    },
    {
      Icon: FaUtensils,
      title: t("titleALaCarteRestaurant"),
      description: t("descriptionALaCarteRestaurant"),
    },
    {
      Icon: FaCocktail,
      title: t("titleLobbyBar"),
      description: t("descriptionLobbyBar"),
    },
    {
      Icon: FaTshirt,
      title: t("titleLaundryService"),
      description: t("descriptionLaundryService"),
    },
    {
      Icon: FaPlane,
      title:t("titleAirportTransfer"),
      description: t("descriptionAirportTransfer"),
    },
  ];

  return (
    <section className=" pb-20 bg-white">
      <div className="container mx-auto px-6 text-center relative">
        {/* Small uppercase subtitle */}
        <span className="uppercase text-gray-400 text-sm">
       {t("subtitle")}
        </span>
        <div className='flex absolute left-1/2 -translate-x-1/2 top-9 h-[1px] w-[80px] bg-irenicOrange '></div>
        {/* Accent underline */}
        <div className="w-12 h-[2px] bg-irenicGreen mx-auto my-4" />

        {/* Main title */}
        <h2 className="font-montserrat text-3xl text-irenicBlack mb-12">
        {t("title")}
        </h2>

        {/* Grid of features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center px-4"
            >
              <Icon className="text-irenicGreen text-4xl mb-4" />
              <h3 className="font-montserrat text-xl text-irenicBlack mb-2">
                {title}
              </h3>
              <p className="font-heebo text-gray-500 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
