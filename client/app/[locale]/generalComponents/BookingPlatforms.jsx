"use client"
import React from "react";
import { useTranslations } from "next-intl";
import tripadvisor from "../../../public/general/logos/tripadvisor-logo.png";
import booking from "../../../public/general/logos/booking-logo.png";
import airbnb from "../../../public/general/logos/airbnb.png";
import expedia from "../../../public/general/logos/expedia.png";
import hotelscom from "../../../public/general/logos/hotelscom.png";
import skyscanner from "../../../public/general/logos/skyscanner.svg";
import ostrovok from "../../../public/general/logos/ostrovok.png";
import Image from "next/image";

function BookingPlatforms() {
    const t = useTranslations("Reservation");

    const logos = [
  {
    name: "hotelscom",
    src: hotelscom,
    href: "https://tr.hotels.com/ho3241051680/irenic-hotel-antalya-turkiye?chkin=2025-06-27&chkout=2025-06-28&x_pwa=1&rfrr=HSR&pwa_ts=1749825079247&referrerUrl=aHR0cHM6Ly90ci5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&useRewards=false&rm1=a2&regionId=6323188&destination=Konyaalt%C4%B1%2C%20Antalya%20(b%C3%B6lge)%2C%20T%C3%BCrkiye&destType=MARKET&selected=101251615&latLong=41.0145%2C28.9533&sort=RECOMMENDED&top_dp=4164&top_cur=TRY&gclid=Cj0KCQjwmK_CBhCEARIsAMKwcD56aITGr2QVoHKbH5R6yRC45K17vs_k9VdYKYznoCTidFJOgWrPPpAaAvaFEALw_wcB&semcid=HCOM-TR.UB.GOOGLE.PT-c-TR.HOTEL&semdtl=a115306224866.b1157673540325.g1aud-2141179518447%3Akwd-2258789658406.e1c.m1Cj0KCQjwmK_CBhCEARIsAMKwcD56aITGr2QVoHKbH5R6yRC45K17vs_k9VdYKYznoCTidFJOgWrPPpAaAvaFEALw_wcB.r1.c1.j19197799.k11012764.d1722150700453.h1p.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=323991146&selectedRatePlan=393316716&expediaPropertyId=101251615&searchId=91caa3a5-7017-4f86-adf6-6a12c6bcc388",
    alt: "Hotels.com"
  },
  {
    name: "tripadvisor",
    src: tripadvisor,
    href: "https://www.tripadvisor.com.tr/Hotel_Review-g297962-d27423172-Reviews-Irenic_Hotel-Antalya_Turkish_Mediterranean_Coast.html",
    alt: "Tripadvisor"
  },
  {
    name: "ostrovok",
    src: ostrovok,
    href: "https://ostrovok.ru/hotel/turkey/antalya/mid11179483/irenic_hotel/",
    alt: "Ostrovok"
  },
  {
    name: "booking",
    src: booking,
    href: "https://www.booking.com/index.tr.html?aid=356980&label=gog235jc-1BCAso5AFCBmlyZW5pY0gzWANo5AGIAQGYASi4AQfIAQzYAQHoAQGIAgGoAgO4Ar7wsMIGwAIB0gIkZDlhNjhmNTktMGRhYi00YjliLWIyNTAtMmU2ZWQyOGMyYWFk2AIF4AIB&tr_redirected=1&",
    alt: "Booking.com"
  },
  {
    name: "skyscanner",
    src:skyscanner,
    href: "https://www.skyscanner.com.tr/hotels/turkiye/antalya-hotels/irenic-hotel/ht-217967125",
    alt: "Skyscanner"
  },
  {
    name: "expedia",
    src: expedia,
    href: "https://euro.expedia.net/Konyaalti-Hotels-IRENIC-HOTEL.h101251615.Hotel-Information?chkin=2025-06-27&chkout=2025-06-28&x_pwa=1&rfrr=HSR&pwa_ts=1749825741558&referrerUrl=aHR0cHM6Ly9ldXJvLmV4cGVkaWEubmV0L0hvdGVsLVNlYXJjaA%3D%3D&useRewards=false&rm1=a2&regionId=6323188&destination=Konyaalti%2C%20Antalya%20Region%2C%20T%C3%BCrkiye&destType=MARKET&selected=101251615&latLong=36.837528%2C30.481854&sort=RECOMMENDED&top_dp=82&top_cur=EUR&semcid=EU.B.GOOGLE.BD-c-EN.HOTEL&semdtl=a118945608822.b1142769038694.g1kwd-344116075419.e1c.m1Cj0KCQjwmK_CBhCEARIsAMKwcD7YTjvAuVp8r51pVjJ1AF8zud5Va2QPWGpngttCMU83QjRZ7kgtV5EaAkglEALw_wcB.r1a9421eeab2ec223937e9654433a8aa45b9d693224189c0975ecf595dd805281b.c1mbmAO-r3Sszw8zs0r_0Fvw.j19197799.k1.d1641050304528.h1p.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&userIntent=&selectedRoomType=323991146&selectedRatePlan=393316716&searchId=242bf17f-20cc-4211-a0d7-9350fe3b4af5",
    alt: "Expedia"
  }
];
    
  return (
    <div className="flex lg:flex flex-col mt-0 pb-1 lg:mb-8 lg:pb-8 lg:mt-10 px-5 l bg-white h-auto lg:h-[60px]  items-center justify-center gap-8 lg:gap-10 ">
    
    <h3 className="text-[28px] md:text-[32px] lg:text-[36px] font-medium leading-[120%] tracking-[0.3px]">{t("bookingPlatforms")}</h3>

      {/* Logo listesi, satırları ortalar */}
      <div className="flex flex-wrap justify-center items-center gap-9 md:gap-20 lg:gap-10 xl:gap-16 mt-6">
        {logos.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noreferrer noopener"
            className="flex justify-center"
          >
            {/* Büyük ekran için */}
            <Image
              src={logo.src}
              width={130}
              height={130}
              alt={logo.alt}
              className="hidden md:block transform transition-transform duration-300 ease-in-out hover:scale-125"
            
            />
            {/* Küçük ekran için */}
            <Image
              src={logo.src}
              width={100}
              height={100}
              alt={logo.alt}
              className="block md:hidden transform transition-transform duration-300 ease-in-out hover:scale-125"
             
            />
          </a>
        ))}
      </div>
    </div>
  );
}

export default BookingPlatforms;