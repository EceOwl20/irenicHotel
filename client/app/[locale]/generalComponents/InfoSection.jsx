import Image from 'next/image'
import React from 'react'
import img1 from "@/public/rooms/jacuzzi/jacuzzi1.webp"
import img2 from "@/public/rooms/french9.jpg"
import img3 from "@/public/rooms/single4.jpg"

const InfoSection = () => {
  return (
    <div className='flex w-screen h-[70vh] items-cenetr justify-center'>
      <div className='flex flex-col lg:flex-row w-[90%] lg:w-[70%] max-w-[1200px] items-center justify-center gap-[25px] lg:gap-[2%]'>
        <div className='flex flex-col w-[100%] lg:w-[49%] items-center justify-center text-center gap-[15px] lg:gap-[25px] '>
            <span className='text-[12px] lg:text-[14px]'>Hakkımızda</span>
            <h3 className='text-[28px] md:text-[36px] lg:text-[48px]'>IRENIC HOTEL'e hoş geldiniz</h3>
            <p className='text-[15px] w-[80%]'>Antalya Konyaaltı Sahili'nde yer alan lüks otelimizde unutulmaz bir tatil deneyimi sizi bekliyor! Denize yürüme mesafesindeki bu benzersiz konum, hayatınızın en keyifli tatilini yaşamanız için mükemmel bir fırsat sunuyor.</p>
        </div>
        <div className='flex w-[95%] lg:w-[49%] items-end justify-start h-[40%] lg:h-[70%] relative'>
        <Image src={img1} alt='oda' width={img1.width} height={img1.height} className='w-[78%] h-auto z-20 max-w-[390px] max-h-[256px]'/>
        <Image src={img2} alt='oda' width={img2.width} height={img2.height} className='w-[70%] h-auto absolute right-0 top-0 z-10 max-w-[358px] max-h-[260px]'/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
