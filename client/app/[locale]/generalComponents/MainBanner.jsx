import React from 'react'
import mainImg from "@/public/images/irenicBanner.jpg"
import mainImg2 from "@/public/images/main2.jpg"
import Reservation from './Reservation'
import {useTranslations} from 'next-intl';

const MainBanner = () => {
  const t = useTranslations('Homepage');

  return (
    <div className='flex items-center justify-center w-screen h-[100vh] relative bg-cover bg-end parallax' style={{ backgroundImage: `url(${mainImg2.src})` }} >
      <div className='absolute inset-0 bg-black/30 z-[1]'></div>
      <div className='flex flex-col justify-center items-center text-center text-white z-20 gap-[20px]'>
        <span className='text-[16px] lg:text-[20px] font-medium font-heebo'>{t("subtitle")}</span>
        <h2 className='text-[40px] lg:text-[56px] font-montserrat font-medium text-white filter drop-shadow-lg'>{t("title")}</h2>
        <Reservation/>
      </div>
    </div>
  )
}

export default MainBanner
