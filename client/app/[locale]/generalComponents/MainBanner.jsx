import React from 'react'
import mainImg from "@/public/images/irenicBanner.jpg"
import mainImg2 from "@/public/images/main2.jpg"
import Reservation from './Reservation'
import {useTranslations} from 'next-intl';

const MainBanner = () => {
  const t = useTranslations('Homepage');

  return (
    <div className='flex items-center justify-center w-screen h-[100vh] relative bg-cover bg-center ' style={{ backgroundImage: `url(${mainImg2.src})` }} >
      <div className='absolute inset-0 bg-black/10 z-[1]'></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className=" top-0 left-0 w-full h-full object-cover hidden lg:flex relative">
        <source 
          src="/videos/irenic.mp4"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
        <Reservation/>
      </video>

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover flex lg:hidden"
      >
        <source 
          src="/videos/irenic.mp4"
          type="video/mp4"
        />
        Tarayıcınız bu videoyu desteklemiyor.
        
      </video>
      {/* <div className='flex flex-col justify-center items-center text-center text-white z-20 gap-[20px]'>
        <span className='text-[14px] md:text-[16px] lg:text-[20px] font-medium font-heebo'>{t("subtitle")}</span>
        <h2 className='text-[32px] md:text-[40px] lg:text-[52px] font-montserrat font-medium text-white filter drop-shadow-lg'>{t("title")}</h2>
        <Reservation/>
      </div> */}
       <Reservation/>
    </div>
  )
}

export default MainBanner
