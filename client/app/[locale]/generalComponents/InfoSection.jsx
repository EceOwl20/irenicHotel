import Image from 'next/image'
import React from 'react'
import img1 from "@/public/rooms/jacuzzi/jacuzzi1.webp"
import img2 from "@/public/rooms/french9.jpg"
import img3 from "@/public/rooms/single4.jpg"

const InfoSection = ({subtitle,title,text}) => {
  return (
    <div className='flex w-screen h-[70vh] items-cenetr justify-center'>
      <div className='flex flex-col lg:flex-row w-[90%] lg:w-[70%] max-w-[1350px] items-center justify-center gap-[25px] lg:gap-[8%]'>
        <div className='flex flex-col w-[100%] lg:w-[46%] items-center justify-start text-start gap-[15px] lg:gap-[20px] '>
            <span className='text-[14px] lg:text-[16px] w-full font-heebo text-irenicOrange font-medium'>{subtitle}</span>
            <h3 className='text-[28px] md:text-[36px] lg:text-[48px] font-montserrat'>{title}</h3>
            <p className='text-[16px] lg:text-[18px] w-[100%] font-light'>{text}</p>
        </div>
        <div className='flex w-[95%] lg:w-[45%] items-end justify-start h-[40%] lg:h-[70%] relative'>
        <Image src={img1} alt='oda' width={img1.width} height={img1.height} className='w-[78%] h-auto z-20 max-w-[420px] max-h-[276px]'/>
        <Image src={img2} alt='oda' width={img2.width} height={img2.height} className='w-[70%] h-auto absolute right-0 top-0 z-10 max-w-[388px] max-h-[270px]'/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
