'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LangSwitcher from '@/LangSwitcher';
import logo from '@/public/images/irenicLogo.png';

export default function Header() {
  const [isOpaque, setIsOpaque] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // when you've scrolled more than one screen height, make it opaque
      setIsOpaque(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`
        fixed top-0 left-0 w-screen flex items-center justify-center
        h-[80px] lg:h-[102px] z-[999]
        transition-colors duration-300
        ${isOpaque ? 'bg-irenicBlack' : 'bg-transparent'}
      `}
    >
      <div className="flex w-[90%] lg:w-[85%] max-w-[1200px] items-center justify-between">
        <Image
          src={logo}
          alt="logo"
          width={90}
          height={90}
          className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]"
        />

        <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[40px] text-irenicOrange text-[15px] font-heebo uppercase tracking-[2px]">
          <Link href="/">HOME</Link>
          <Link href="/about">HAKKIMIZDA</Link>
          <Link href="/services">SERVİSLER</Link>
          <Link href="/rooms">ODALAR</Link>
          <Link href="/contact">İLETİŞİM</Link>
          <Link
            href="https://irenic.rezervasyonal.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-irenicOrange text-white text-[12px] py-[8px] px-[16px] hover:bg-orange-500 transition"
          >
            BOOK NOW
          </Link>
          <LangSwitcher />
        </nav>
      </div>
    </div>
  );
}
