"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import MainCarousel from "./generalComponents/MainBanner";
import InfoSection from "./generalComponents/InfoSection";
import SlidingImageSection from "./generalComponents/SlidingImageSection";
import GridSection from "./generalComponents/GridSection";

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div className="flex flex-col overflow-hidden gap-[40px] md:gap-[70px] lg:gap-[100px]">
      <MainCarousel/>
      <InfoSection/>
     <div className="flex flex-col">
     <SlidingImageSection isReversed={false}/>
     <SlidingImageSection isReversed={true}/>
     </div>
     <GridSection/>
    </div>
  );
}
