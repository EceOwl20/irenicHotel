"use client"
import { IoIosArrowDown } from "react-icons/io"
import React, { useState, useEffect } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useTranslations } from "next-intl"
import Link from "next/link"

export default function Reservation() {
  const t = useTranslations('Reservation')

  const [checkInDate, setCheckInDate] = useState(null)
  const [checkOutDate, setCheckOutDate] = useState(null)
  const [adults, setAdults] = useState(0)
  const [children, setChildren] = useState(0)
  const [showAdults, setShowAdults] = useState(false)
  const [showChildren, setShowChildren] = useState(false)
  const [guestInfo, setGuestInfo] = useState({})

  useEffect(() => {
    setGuestInfo({ checkInDate, checkOutDate, adults, children })
  }, [checkInDate, checkOutDate, adults, children])

  useEffect(() => {
    console.log("Guest Information:", guestInfo)
  }, [guestInfo])

  const toggleAdults = () => setShowAdults(prev => !prev)
  const toggleChildren = () => setShowChildren(prev => !prev)

  const incrementAdults = () => setAdults(adults + 1)
  const decrementAdults = () => adults > 0 && setAdults(adults - 1)

  const incrementChildren = () => setChildren(children + 1)
  const decrementChildren = () => children > 0 && setChildren(children - 1)

  return (
    <section
      className="
      max-w-screen
        hidden
        md:flex
        absolute 
        bottom-0  
        left-0 
        right-0
        w-screen 
        h-auto 
        z-20 
        items-center 
        justify-center
        bg-irenicBlack
        bg-opacity-50
      "
      aria-labelledby="reservation-heading"
    >
      <form
        className="
          flex 
          flex-row 
          w-[95%]
          lg:w-screen
          items-center 
          h-auto
          max-h-content
          justify-center 
          text-[#ffffff] 
          font-jost 
          leading-normal 
          text-center
          gap-[40px]
          lg:gap-[50px]
        "
      >
        {/* CHECK-IN */}
        <div className="relative flex items-center justify-center w-auto ">
          <label htmlFor="checkInDate" className="sr-only text-white">
            {t("checkin")}
          </label>
          <DatePicker
            id="checkInDate"
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText={t("checkin")}
            className="
              cursor-pointer 
              py-[30px] 
              lg:w-auto 
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-center 
              placeholder:text-white
              placeholder:uppercase
              placeholder:text-[16px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-jost
            "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <IoIosArrowDown className="absolute right-[10px]" width={12} height={12} />
        </div>

        {/* İnce çizgi */}
        <div className="w-[1px] h-[11px] bg-white" />

        {/* CHECK-OUT */}
        <div className="relative flex items-center justify-center w-auto ">
          <label htmlFor="checkOutDate" className="sr-only">
            {t("checkout")}
          </label>
          <DatePicker
            id="checkOutDate"
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText={t("checkout")}
            className="
              cursor-pointer 
              py-[30px] 
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-center 
              placeholder:text-white
              placeholder:uppercase
              placeholder:text-[16px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-jost
            "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <IoIosArrowDown className="absolute right-[3px]" width={12} height={12} />
        </div>

        {/* İnce çizgi */}
        <div className="w-[1px] h-[11px] bg-white " />

        {/* ADULTS */}
        <div className="relative flex items-center justify-center w-auto">
          <button
            id="adults-button"
            onClick={toggleAdults}
            className="
              flex
              items-center justify-center
              py-[30px] 
              w-full 
              text-customGray
              bg-transparent
              focus:outline-none
              text-center
              uppercase
              text-[16px]
              leading-[24px]
              font-medium
              font-jost
            "
            aria-haspopup="dialog"
            aria-expanded={showAdults}
            type="button"
          >
            {t("adult")}
            <IoIosArrowDown className="flex ml-[13px]" width={12} height={12} />
          </button>
          {showAdults && (
            <div
              className="
                absolute 
                bottom-full 
                -left-1/2 
                mt-2 
                bg-transparent 
                border 
                border-gray-300 
                text-[#ffff] 
                text-[14px] 
                font-semibold 
                rounded-lg 
                shadow-lg 
                w-full 
                min-w-[180px] 
                p-3 
                xl:p-4
              "
              role="dialog"
            >
              <div className="flex justify-between items-center mb-3">
                <label htmlFor="adultCounter" id="adultCounterLabel" className="whitespace-nowrap">
                  {t("adult")}
                </label>
                <div className="flex items-center gap-1 lg:gap-2" id="adultCounter">
                  <button
                    onClick={decrementAdults}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="adultCounterLabel"
                    aria-label="Decrease adults"
                    type="button"
                  >-
                  </button>
                  <span>{adults}</span>
                  <button
                    onClick={incrementAdults}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="adultCounterLabel"
                    aria-label="Increase adults"
                    type="button"
                  >+
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* İnce çizgi */}
        <div className="w-[1px] h-[11px] bg-white " />

        {/* CHILDREN */}
        <div className="relative flex items-center justify-center w-auto">
          <button
            id="children-button"
            onClick={toggleChildren}
            className="
              flex
              items-center justify-center
              py-[30px] 
              w-full 
              text-customGray
              bg-transparent
              focus:outline-none
              text-center
              uppercase
              text-[16px]
              leading-[24px]
              font-medium
              font-jost
            "
            aria-haspopup="dialog"
            aria-expanded={showChildren}
            type="button"
          >
            {t("children")}
            <IoIosArrowDown className="flex ml-[13px]" width={12} height={12} />
          </button>
          {showChildren && (
            <div
              className="
                absolute 
                bottom-full 
                -left-1/2 
                mt-2 
                bg-transparent 
                border 
                border-gray-300 
                text-[#ffff] 
                text-[14px] 
                font-semibold 
                rounded-lg 
                shadow-lg 
                w-full 
                min-w-[180px] 
                p-3 
                xl:p-4
              "
              role="dialog"
            >
              <div className="flex justify-between items-center">
                <label htmlFor="childrenCounter" id="childrenCounterLabel" className="whitespace-nowrap">
                  {t("children")}
                </label>
                <div className="flex items-center gap-1 lg:gap-2" id="childrenCounter">
                  <button
                    onClick={decrementChildren}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Decrease children"
                    type="button"
                  >-
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={incrementChildren}
                    className="
                      cursor-pointer 
                      w-5 
                      h-5 
                      xl:w-6 
                      xl:h-6 
                      border 
                      border-gray-400 
                      rounded-full 
                      flex 
                      items-center 
                      justify-center 
                      font-medium
                    "
                    aria-labelledby="childrenCounterLabel"
                    aria-label="Increase children"
                    type="button"
                  >+
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SEARCH BUTTON */}
        <Link href="https://irenic.rezervasyonal.com/">
          <button
            onClick={() => console.log("Final Guest Information:", guestInfo)}
            className="
              flex 
              cursor-pointer 
              px-[47px] 
              py-[10px] 
              text-white
              whitespace-nowrap
              text-[13px]
              font-medium
              uppercase
              font-jost
              text-center 
              justify-center
              items-center
              bg-irenicOrange
              capsizedText4
              max-w-[155px]
            "
            type="button"
          >
            {t("search")}
          </button>
        </Link>

      </form>
    </section>
  )
}
