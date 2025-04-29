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
      max-w-[1100px]
        hidden
        md:flex
        absolute 
        bottom-[4%]  
       left-[50%]
       -translate-x-[50%]
        w-[80%] 
        h-auto 
        z-20 
        items-center 
        justify-center
        bg-[#0F172B]/70
        bg-opacity-50
        py-4
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
          justify-around 
          text-[#ffffff] 
          font-heebo 
          leading-normal 
          text-center "
      >
        {/* CHECK-IN */}
        <div className="relative flex items-center justify-center w-auto border border-white/50 py-[10px] 
              px-[20px]">
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
              lg:w-auto 
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-start 
              placeholder:text-white
              placeholder:uppercase
              placeholder:text-[14px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-heebo
               max-w-[140px]
              "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <IoIosArrowDown className="flex" width={12} height={12} />
        </div>

        {/* CHECK-OUT */}
        <div className="relative flex items-center justify-start w-auto border border-white/50  py-[10px] 
              px-[20px]">
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
              text-customGray 
              focus:outline-none 
              bg-transparent 
              text-start 
              placeholder:text-white
              placeholder:uppercase
              placeholder:text-[14px]
              placeholder:leading-[24px]
              placeholder:font-medium
              placeholder:font-heebo
              max-w-[140px]
            "
            popperPlacement="bottom-start"
            calendarClassName="custom-calendar"
            dayClassName={() => "custom-day hover:bg-blue-100 focus:outline-none"}
          />
          <IoIosArrowDown className="flex" width={12} height={12} />
        </div>


        {/* ADULTS */}
        <div className="relative flex items-center justify-center w-auto ">
          <button
            id="adults-button"
            onClick={toggleAdults}
            className="
              flex
              items-center justify-center
              py-[10px] 
              px-[20px]
              w-full 
              text-customGray
              bg-transparent
              focus:outline-none
              text-start
              uppercase
              text-[14px]
              leading-[24px]
              font-medium
              font-heebo
              border
              border-white/50
            
            "
            aria-haspopup="dialog"
            aria-expanded={showAdults}
            type="button"
          >
            <span> {adults === 0 ? t("adult") : `${adults} ${t("adult")}`}</span>{" "}{" "}
            <IoIosArrowDown className="flex ml-[16px]" width={12} height={12} />
          </button>
          {showAdults && (
            <div
              className="
                absolute 
                -bottom-[136%] 
                left-1/2 
                -translate-x-1/2
                mt-2 
                bg-[#0F172B]/70
                text-[#ffff] 
                text-[14px] 
                font-semibold 
                shadow-lg 
                w-full 
                min-w-[180px] 
                p-3 
                xl:p-2
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


        {/* CHILDREN */}
        <div className="relative flex items-center justify-center w-auto">
          <button
            id="children-button"
            onClick={toggleChildren}
            className="
              flex
              items-center justify-center
              py-[10px] 
              px-[20px]
              w-full 
              text-customGray
              bg-transparent
              focus:outline-none
              text-center
              uppercase
              text-[14px]
              leading-[24px]
              font-medium
              font-heebo
               border
               border-white/50"
            aria-haspopup="dialog"
            aria-expanded={showChildren}
            type="button"
          >
           <span> {children === 0 ? t("children") : `${children} ${t("children")}`}</span>
            <IoIosArrowDown className="flex ml-[13px]" width={12} height={12} />
          </button>
          {showChildren && (
            <div
              className="
                absolute 
                bg-[#0F172B]/70
                -bottom-[128%]
                 left-1/2 
                -translate-x-1/2
                mt-2 
                text-[#ffff] 
                text-[14px] 
                font-semibold 
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
              font-heebo
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
