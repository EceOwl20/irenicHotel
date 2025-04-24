/*
 * components/RoomDetailSection.jsx
 * Room detail slider with thumbnails + booking form + amenities + description, overview, and features.
 * Uses React Icons and Tailwind CSS.
 */

'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AmenitiesBar from './AmenitiesBar';

export default function RoomDetailSection({
  images = [],
  description = '',
  overview = [],
  features = ''
}) {
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const prev = () => setCurrent(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setCurrent(i => (i === total - 1 ? 0 : i + 1));
  const goTo = idx => setCurrent(idx);

  return (
    <div>
      {/* Amenities bar right after banner */}
      <AmenitiesBar />

      {/* Slider & Booking Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">
        {/* Slider and Thumbnails */}
        <div className="lg:col-span-2">
          <div className="relative">
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
              className="w-full h-[400px] object-cover rounded-lg"
            />
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="mt-4 flex gap-2 overflow-x-auto">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`flex-shrink-0 w-24 h-16 rounded-md overflow-hidden border-2 ${
                  idx === current ? 'border-green-500' : 'border-transparent'
                }`}
              >
                <img
                  src={src}
                  alt={`Thumb ${idx + 1}`}
                  className="object-cover w-full h-full"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <aside className="bg-black text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Check Availability</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-xs uppercase mb-1">Check-in Date</label>
              <input
                type="date"
                className="w-full bg-gray-800 text-white px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-xs uppercase mb-1">Check-out Date</label>
              <input
                type="date"
                className="w-full bg-gray-800 text-white px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block text-xs uppercase mb-1">Adults</label>
              <select className="w-full bg-gray-800 text-white px-3 py-2 rounded">
                {[1,2,3,4].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs uppercase mb-1">Children</label>
              <select className="w-full bg-gray-800 text-white px-3 py-2 rounded">
                {[0,1,2,3].map(n => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-3 rounded uppercase tracking-wide"
            >
              Book Now
            </button>
          </form>
        </aside>
      </section>

      {/* Description, Overview & Features at the very end */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Overview</h3>
          <ul className="space-y-1 text-sm">
            {overview.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Features</h3>
          <p className="text-sm leading-relaxed">{features}</p>
        </div>
      </section>
    </div>
  );
}
