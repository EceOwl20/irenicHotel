import React from 'react'
import mainImg from "@/public/images/irenicBanner.jpg"
import Reservation from './Reservation'

const MainBanner = () => {
  return (
    <div className='flex items-center justify-center w-screen h-[100vh] relative' style={{ backgroundImage: `url(${mainImg.src})` }} >
      <div className='absolute inset-0 bg-black/25 z-[1]'></div>
      <div className='flex z-20'>
        <h2 className='text-[40px] font-montserrat font-medium text-white filter drop-shadow-lg'>LÜKS YAŞAM
        IRENIC HOTEL</h2>
        <Reservation/>
      </div>
    </div>
  )
}

export default MainBanner
