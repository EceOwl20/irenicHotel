"use client"
import Image from "next/image";
import {useTranslations} from 'next-intl';
import MainCarousel from "./generalComponents/MainBanner";
import InfoSection from "./generalComponents/InfoSection";

export default function Home() {
  const t = useTranslations('Homepage');

  return (
    <div className="flex flex-col overflow-hidden">
      <MainCarousel/>
      <InfoSection/>
    </div>
  );
}
