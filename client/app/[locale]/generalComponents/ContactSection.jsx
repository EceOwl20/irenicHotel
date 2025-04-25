'use client';
import {useTranslations} from 'next-intl';
import React from 'react';

export default function ContactSection() {
  const t = useTranslations('Contact');

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center relative">
        {/* Subtitle */}
        <span className="uppercase text-gray-400 text-sm">{t("subtitle")}</span>
        <div className='flex absolute left-1/2 -translate-x-1/2 top-8 h-[1px] w-[80px] bg-irenicOrange '></div>
        {/* Accent underline */}
        <div className="w-12 h-[2px] bg-irenicGreen mx-auto my-3" />
        {/* Main title */}
        <h2 className="font-montserrat text-3xl text-irenicBlack mb-12">
        {t("title")}
        </h2>

        {/* Details grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-12 max-w-4xl mx-auto mb-12">
          {/* Address */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold">{t("addressLabel")}</span>
              <span className="font-heebo text-gray-500 text-left">
              {t("addressValue")}
              </span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>

          {/* Phone */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold"> {t("phoneLabel")}</span>
              <span className="font-heebo text-gray-500">{t("phoneValue")}</span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>

          {/* City */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold">{t("cityLabel")}</span>
              <span className="font-heebo text-gray-500">{t("cityValue")}</span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>

          {/* Email */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold">{t("emailLabel")}</span>
              <span className="font-heebo text-gray-500">{t("emailValue")}</span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>

          {/* Check-In */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold">{t("checkinLabel")}</span>
              <span className="font-heebo text-gray-500">{t("checkinValue")}</span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>

          {/* Check-Out */}
          <div className="mb-6">
            <div className="flex justify-between">
              <span className="font-heebo text-gray-700 font-semibold">{t("checkoutLabel")}</span>
              <span className="font-heebo text-gray-500">{t("checkoutValue")}</span>
            </div>
            <div className="mt-1 h-px bg-gray-200 w-full" />
          </div>
        </div>

        {/* Footer info */}
        <p className="italic text-gray-400 mb-6">{t("footerInfo")}</p>
        <p className="font-heebo text-4xl text-gray-800 tracking-wider">
        {t("footerPhone")}
        </p>
      </div>
    </section>
  );
}
