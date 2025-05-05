'use client';

import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { usePathname, useParams } from 'next/navigation';
import AmenitiesBar from './AmenitiesBar';
import RoomTour from './RoomTour';

export default function RoomDetailSection({ slug, images = [] }) {
  // 1) Client tarafında hem next-intl hem de routing hook’larını kullanabiliriz
  const t = useTranslations('subrooms');

  const { slug: _ } = useParams();      // Next.js >=15, dynamic param’ı alır
  const title       = t(`${slug}.title`);
  const description = t(`${slug}.description`);
  const features    = t(`${slug}.features`);
// Yeni: tek string → array
const rawOverview = t(`${slug}.overview`);
const overview    = rawOverview.split('\n');
  const [current, setCurrent] = useState(0);
  const total = images.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section className="max-w-7xl mx-auto px-4 py-2 mt-[2%] lg:mt-[3%]">
      {/* <h2 className="text-[28px] md:text-[32px] lg:text-[36px] font-heading mb-6 text-irenicBlack ">{title}</h2> */}
      <section className="flex flex-col lg:grid lg:grid-cols-3 gap-8 mb-6 md:mb-10 lg:mb-16">
        {/* Slider and Thumbnails */}
        <div className="lg:col-span-2">
          <div className="relative">
            <img
              src={images[current]}
              alt={`Slide ${current + 1}`}
               className="w-full min-h-64 h-[40vh] sm:h-[50vh] md:h-[60vh] object-cover "
            />
            <button
              onClick={prev}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white p-2 cursor-pointer"
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white p-2  cursor-pointer"
              aria-label="Next"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
  {images.map((src, idx) => (
    <button
      key={idx}
      className={`overflow-hidden border-2 aspect-[4/3] w-full ${
        idx === current ? 'border-irenicOrange' : 'border-transparent'
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
        <aside className="bg-black text-white p-6 h-[440px]">
          <h3 className="text-lg font-semibold mb-4">{t("availability")}</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-xs uppercase mb-1">{t("checkin")}</label>
              <input
                type="date"
                placeholder={t("checkin")}
                className="w-full bg-gray-800 text-white px-3 py-2 "
              />
            </div>
            <div>
              <label className="block text-xs uppercase mb-1">{t("checkout")}</label>
              <input
                type="date"
                placeholder={t("checkout")}
                className="w-full bg-gray-800 text-white px-3 py-2 "
              />
            </div>
            <div>
              <select className="w-full bg-gray-800 text-white px-3 py-2 uppercase font-light">
                {[1,2,3,4].map(n => (
                  <option key={n} value={n}>{t("adults")}</option>
                ))}
              </select>
            </div>
            <div>
              <select className="w-full bg-gray-800 text-white px-3 py-2 uppercase font-light">
                {[0,1,2,3].map(n => (
                  <option key={n} value={n}>{t("children")}</option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-irenicOrange text-white py-3 uppercase tracking-wide"
            >
              {t("booknow")}
            </button>
          </form>
        </aside>
      </section>
      {/* <AmenitiesBar /> */}

      {/* Slider + Thumbnails + Booking */}
      {/* ... mevcut kodun ... */}

      {/* Description, Overview & Features */}
      <div className="mt-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-3">
          <h2 className="text-2xl font-semibold mb-4">{t("description")}</h2>
          <p className="text-gray-700">{description}</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("overview")}</h3>
          <ul className="list-disc list-inside space-y-1">
            {overview.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{t("features")}</h3>
          <p>{features}</p> 
        </div>
      </div>
      <RoomTour header={t(`${slug}.tourtitle`)} text={t(`${slug}.tourtext`)} link={t(`${slug}.tourlink`)}/>
    </section>
  );
}
