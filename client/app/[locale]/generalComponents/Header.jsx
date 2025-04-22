"use client"
import React from 'react'
import logo from "@/public/images/irenicLogo.png"
import Image from 'next/image'
import Link from 'next/link'
import LangSwitcher from "@/LangSwitcher";
import {useTranslations} from 'next-intl';

const Header = () => {
  return (
    <div className='flex sticky max-w-screen w-s items-center justify-center  bg-irenicBlack h-[80px] lg:h-[102px] z-[999] shadow-md'>
      <div className='flex w-[90%] lg:w-[85%] lg:max-w-[1200px] items-center justify-between'>
        <Image src={logo} alt='logo' width={100} height={100} className='w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]'/>
        <div className='hidden lg:flex items-center justify-center lg:min-w-[50%] text-irenicOrange text-[14px] font-heebo text-center xl:gap-[40px] gap-[30px] leading-[20px] tracking-[2px]'>
            <Link href="/">HOME</Link>
            <Link href="/about">HAKKINIZDA</Link>
            <Link href="/services">SERVİSLER</Link>
            <Link href="/rooms">ODALAR</Link>
            <Link href="/contact">İLETİŞİM</Link>
            <Link href="https://irenic.rezervasyonal.com/" rel="norefferer nofollower"
                  target="_blank" className='flex items-center justify-center text-center bg-irenicOrange text-[12px] py-[8px] px-[16px] text-white whitespace-nowrap'>BOOK NOW</Link>
            <LangSwitcher/>
        </div>
      </div>
    </div>
  )
}

export default Header
