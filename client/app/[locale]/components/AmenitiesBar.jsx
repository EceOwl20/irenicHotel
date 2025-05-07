'use client';

import React from 'react';
import {
  FaWifi,
  FaSwimmingPool,
  FaUtensils,
  FaCocktail,
  FaPlane,
  FaTshirt,
} from 'react-icons/fa';
import { useTranslations } from 'next-intl';

export default function AmenitiesBar() {
  const t = useTranslations('subrooms.Amenities');

  const amenities = [
    { label: t("freeWifi"), Icon: FaWifi },
    { label: t("swimmingPool"), Icon: FaSwimmingPool },
    { label: t("aLaCarteRestaurant"), Icon: FaUtensils },
    { label: t("lobbyBar"), Icon: FaCocktail },
    { label: t("airportTransfer"), Icon: FaPlane },
    { label: t("laundryService"), Icon: FaTshirt },
  ];

  return (
    <div className="w-full bg-irenicBlack text-white py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:flex justify-center items-center text-center gap-x-16 gap-y-2 lg:gap-y-3 pl-2">
        {amenities.map(({ label, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6">
            <Icon className="w-6 h-6" />
            <span className="text-xs lg:text-[13px] uppercase tracking-widest font-light">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
