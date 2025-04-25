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
    <div className="w-full bg-black text-white py-6">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
        {amenities.map(({ label, Icon }) => (
          <div key={label} className="flex flex-col items-center gap-2">
            <Icon className="w-6 h-6" />
            <span className="text-xs uppercase tracking-widest">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
