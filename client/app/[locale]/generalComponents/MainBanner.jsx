import React from 'react'
import mainImg from "@/public/images/irenicBanner.jpg"

const MainBanner = () => {
  return (
    <div className='flex items-center justify-center w-screen h-[89vh] relative' style={{ backgroundImage: `url(${mainImg.src})` }} >
      <div className='absolute inset-0 bg-black/20 z-[1]'></div>
      <div>
        <h2 className='text-[40px] font-montserrat font-medium text-white text-shadow-lg'>LÜKS YAŞAM
        IRENIC HOTEL</h2>
      </div>
    </div>
  )
}

export default MainBanner
