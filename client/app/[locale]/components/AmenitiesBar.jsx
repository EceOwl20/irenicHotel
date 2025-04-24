'use client';

import React from 'react';
import {
  FaSmokingBan,
  FaBed,
  FaShip,
  FaCocktail,
  FaSwimmingPool,
  FaUtensils,
} from 'react-icons/fa';

const amenities = [
  { label: 'No Smoking', Icon: FaSmokingBan },
  { label: 'Big Beds', Icon: FaBed },
  { label: 'Yacht Riding', Icon: FaShip },
  { label: 'Free Drinks', Icon: FaCocktail },
  { label: 'Swimming Pool', Icon: FaSwimmingPool },
  { label: 'Room Breakfast', Icon: FaUtensils },
];

export default function AmenitiesBar() {
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
