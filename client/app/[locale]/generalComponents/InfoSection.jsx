import Image from 'next/image'
import React from 'react'
import img1 from "@/public/images/irenicOda1.jpg"
import img2 from "@/public/images/irenicOda2.jpg"

const InfoSection = () => {
  return (
    <div className='flex w-screen h-[80vh] items-cenetr justify-center'>
      <div className='flex w-[90%] lg:w-[80%] items-center justify-center '>
        <div className='flex flex-col w-[100%] lg:w-[49%] items-center justify-center text-center gap-[15px] lg:gap-[25px] '>
            <span className='text-[12px]'>Hakkımızda</span>
            <h3 className='text-[48px]'>IRENIC HOTEL'e hoş geldiniz</h3>
            <p className='text-[15px] w-[80%]'>Antalya Konyaaltı Sahili'nde yer alan lüks otelimizde unutulmaz bir tatil deneyimi sizi bekliyor! Denize yürüme mesafesindeki bu benzersiz konum, hayatınızın en keyifli tatilini yaşamanız için mükemmel bir fırsat sunuyor.</p>
        </div>
        <div className='flex w-[49%]'>
        <Image src={img1} alt='oda' width={img1.width} height={img1.height} className='w-[400px] h-[400px]'/>
        <Image src={img2} alt='oda' width={img2.width} height={img2.height} className='w-[300px] h-[400px]'/>
        </div>
      </div>
    </div>
  )
}

export default InfoSection
