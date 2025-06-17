"use client"
import { IoIosArrowDown } from "react-icons/io";
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { format, addDays } from "date-fns";

export default function Reservation() {
  const t = useTranslations("Reservation");

  const today = new Date();
  const defaultCheckIn = today;
  const defaultCheckOut = addDays(today, 4);

  const [checkInDate, setCheckInDate] = useState(defaultCheckIn);
  const [checkOutDate, setCheckOutDate] = useState(defaultCheckOut);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [childAges, setChildAges] = useState([]);
  const [showAdults, setShowAdults] = useState(false);
  const [showChildren, setShowChildren] = useState(false);

  useEffect(() => {
    setChildAges((prev) => prev.slice(0, children));
  }, [children]);

  const toggleAdults = () => setShowAdults((prev) => !prev);
  const toggleChildren = () => setShowChildren((prev) => !prev);

  const incrementAdults = () => setAdults(adults + 1);
  const decrementAdults = () => adults > 1 && setAdults(adults - 1); // minimum 1 olmasını öneririm

  const incrementChildren = () => setChildren(children + 1);
  const decrementChildren = () => children > 0 && setChildren(children - 1);

  const handleChildAgeChange = (index, value) => {
    const ages = [...childAges];
    ages[index] = value;
    setChildAges(ages);
  };

  const getReservationUrl = () => {
    const checkIn = checkInDate ? format(checkInDate, "yyyy-MM-dd") : format(defaultCheckIn, "yyyy-MM-dd");
    const checkOut = checkOutDate ? format(checkOutDate, "yyyy-MM-dd") : format(defaultCheckOut, "yyyy-MM-dd");
    const adultCount = adults > 0 ? adults : 2;
    const ages = childAges.filter((age) => age).join("+");
    return `https://irenic.rezervasyonal.com/?Checkin=${checkIn}&Checkout=${checkOut}&Adult=${adultCount}&child=${children}&ChildAges=${ages}&language=tr`;
  };

  return (
    <section className="max-w-[1100px] hidden lg:flex absolute bottom-[4%] left-[50%] -translate-x-[50%] w-[80%] h-auto items-center justify-center bg-[#0F172B]/70 py-4 z-[990]">
      <form className="flex flex-row w-[95%] lg:w-screen items-center justify-around text-[#ffffff] font-heebo text-center">
        {/* CHECK-IN */}
        <div className="relative flex items-center border border-white/50 py-[10px] px-[20px]">
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText={t("checkin")}
            className="cursor-pointer text-customGray bg-transparent placeholder:text-white max-w-[140px]"
            popperPlacement="bottom-start"
          />
          <IoIosArrowDown className="flex" />
        </div>

        {/* CHECK-OUT */}
        <div className="relative flex items-center border border-white/50 py-[10px] px-[20px]">
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText={t("checkout")}
            className="cursor-pointer text-customGray bg-transparent placeholder:text-white max-w-[140px]"
            popperPlacement="bottom-start"
          />
          <IoIosArrowDown className="flex" />
        </div>

        {/* ADULTS */}
        <div className="relative flex items-center">
          <button
            onClick={toggleAdults}
            type="button"
            className="flex items-center py-[10px] px-[20px] text-customGray border border-white/50 uppercase text-[14px]"
          >
            <span>{adults === 0 ? t("adult") : `${adults} ${t("adult")}`}</span>
            <IoIosArrowDown className="flex ml-[16px]" />
          </button>
          {showAdults && (
            <div className="absolute -bottom-[136%] left-1/2 -translate-x-1/2 bg-[#0F172B]/70 text-[#ffff] p-3 shadow-lg w-full min-w-[180px]">
              <div className="flex justify-between items-center">
                <label>{t("adult")}</label>
                <div className="flex items-center gap-2">
                  <button onClick={decrementAdults} type="button">-</button>
                  <span>{adults}</span>
                  <button onClick={incrementAdults} type="button">+</button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CHILDREN */}
        <div className="relative flex items-center">
          <button
            onClick={toggleChildren}
            type="button"
            className="flex items-center py-[10px] px-[20px] text-customGray border border-white/50 uppercase text-[14px]"
          >
            <span>{children === 0 ? t("children") : `${children} ${t("children")}`}</span>
            <IoIosArrowDown className="flex ml-[13px]" />
          </button>
          {showChildren && (
            <div className="absolute -bottom-[152%] left-1/2 -translate-x-1/2 bg-[#0F172B]/90 text-[#ffff] p-3 shadow-lg w-full min-w-[180px]">
              <div className="flex justify-between items-center mb-2">
                <label>{t("children")}</label>
                <div className="flex items-center gap-2">
                  <button onClick={decrementChildren} type="button">-</button>
                  <span>{children}</span>
                  <button onClick={incrementChildren} type="button">+</button>
                </div>
              </div>
              {/* Çocuk yaş inputları */}
              {Array.from({ length: children }).map((_, index) => (
                <input
                  key={index}
                  type="number"
                  min="0"
                  placeholder={`Child ${index + 1} age`}
                  value={childAges[index] || ""}
                  onChange={(e) => handleChildAgeChange(index, e.target.value)}
                  className="w-full mb-1 p-1 text-white"
                />
              ))}
            </div>
          )}
        </div>

        {/* SEARCH BUTTON */}
        <Link href={getReservationUrl()} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="flex px-[47px] py-[10px] text-white bg-irenicOrange uppercase font-heebo max-w-[155px] whitespace-nowrap text-center items-center justify-center"
          >
            {t("search")}
          </button>
        </Link>
      </form>
    </section>
  );
}
