import React from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import MessageSection from "./MessageSection"
import Link from 'next/link';
import { LiaPhoneVolumeSolid } from "react-icons/lia";

const bookSection = () => {
  return (
    <div className='fixed flex bottom-4 left-0 lg:left-4 md:bottom-6 lg:bottom-7 z-[980] w-full'>
      <div className='flex justify-between items-center w-full'>
      <div className='flex w-[50px] h-[50px] lg:w-[60px] lg:h-[60px] relative rounded-full border-white border ml-6 lg:ml-7 text-white bg-black/70 hover:bg-white hover:border-black  hover:text-black items-center justify-center animate-zoom'>
     <Link href="tel:2429998859"> <LiaPhoneVolumeSolid className="flex z-[9999] wiggle-phone" size={36}/></Link>
     <div className="absolute w-[51px] h-[51px] lg:w-[61px] lg:h-[61px] bg-transparent border border-white rounded-full pulse-ring"></div>
      </div>
      
      <Link href="https://irenic.rezervasyonal.com/"   target="_blank"
        rel="noopener noreferrer" className='flex md:hidden whitespace-nowrap text-white bg-black py-[8px] px-[24px] absolute left-1/2 -translate-x-1/2'>Book Now</Link>
      <div className="flex">
      <MessageSection/>
      </div>
      </div>
    </div>
  )
}

export default bookSection
