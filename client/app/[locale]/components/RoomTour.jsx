import React from 'react'

const RoomTour = ({header,text, link}) => {
  return (
    <div className='flex max-w-7xl h-auto mt-16 lg:mt-28'>
      <div className='flex flex-col  items-center justify-center gap-[30px] lg:gap-[50px] max-w-[1106px] font-jost'>

       <div className='flex flex-col items-start justify-center gap-[15px] md:gap-[25px] lg:gap-[35px] text-black text-start '>
       <h2 className='text-[28px] md:text-[32px] lg:text-[42px] font-marcellus font-normal leading-[120%] lg:leading-[57.6px] lg:capsizedText2'>{header}</h2>
       <p className='text-[14px] lg:text-[16px] leading-[130%] lg:leading-[24px] font-normal w-full lg:w-[70%] capsizedText4'>{text}</p>
       </div>

       <div className='flex w-full items-center justify-center py-[20px] lg:px-[20px]'>
       <iframe width="100%" height="640" allow="xr-spatial-tracking; gyroscope; accelerometer" allowFullScreen scrolling="no" src={link} className='max-h-[500px] lg:max-h-[640px]'></iframe>
       </div>

      </div>
    </div>
  )
}

export default RoomTour
