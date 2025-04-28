'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LangSwitcher from '@/LangSwitcher';
import logo from '@/public/images/irenicLogo.png';
import { useTranslations } from 'next-intl';
import { LiaTimesSolid, LiaBarsSolid } from "react-icons/lia";
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  const t = useTranslations('Header');
  const [isOpaque, setIsOpaque] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsOpaque(window.scrollY > window.innerHeight);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Fixed Top Header */}
      <header
        className={`
          fixed top-0 left-0 w-screen flex items-center justify-center
          h-[80px] lg:h-[102px] z-[999]
          transition-colors duration-300
          ${isOpaque ? 'bg-irenicBlack' : 'bg-transparent shadow-2xs'}
        `}
      >
        <div className="flex w-[90%] lg:w-[85%] max-w-[1200px] items-center justify-between">
          <Link href="/">
            <Image
              src={logo}
              alt="irenic logo"
              width={90}
              height={90}
              className="w-[70px] h-[70px] lg:w-[90px] lg:h-[90px]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-[30px] xl:gap-[40px] text-irenicOrange text-[15px] font-medium font-heebo uppercase tracking-[2px]">
          <Link href="/" className="group relative inline-block">
  <span className="relative z-10 ">{t('home')}</span>
  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span>
</Link>
            <Link className='group relative inline-block' href="/rooms"><span>{t('rooms')}</span>  <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span></Link>
            <Link className="group relative inline-block" href="/services"><span>{t('services')}</span> <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span></Link>
            <Link className="group relative inline-block" href="/aboutus"><span>{t('about')}</span> <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span></Link>
            <Link className="group relative inline-block" href="/contact"><span>{t('contact')}</span> <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span></Link>
            <Link
              href="https://irenic.rezervasyonal.com/"
              target="_blank"
              rel="noreferrer"
              className="bg-[#ffa217] text-white text-[12px] py-[8px] px-[16px] hover:bg-white hover:text-[#ffa217] transition group relative inline-block"
            >
              {t('booknow')}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#ffa217] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <LangSwitcher />
          </nav>

          {/* Mobile Menu Button */}
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-irenicOrange"
              aria-label="Open menu"
            >
              <LiaBarsSolid size={28} />
            </button>
          )}
        </div>
      </header>

      {/* Backdrop (only when open) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0F171B]/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Panel */}
      <aside
        className={`
          fixed inset-y-0 right-0 w-full sm:w-[280px] bg-irenicBlack p-6 z-[9999]
          transform transition-transform duration-300
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close & LangSwitcher */}
        <div className="flex items-center justify-between mb-6 text-irenicOrange">
          <LangSwitcher />
          <button
            onClick={() => setIsOpen(false)}
            className="text-irenicOrange"
            aria-label="Close menu"
          >
            <LiaTimesSolid size={27} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="mt-20 flex flex-col gap-8 text-irenicOrange font-heebo capitalize tracking-[1px] text-[18px]">
          <Link href="/" onClick={() => setIsOpen(false)}>
            {t('home')}
          </Link>
          <Link href="/rooms" onClick={() => setIsOpen(false)}>
            {t('rooms')}
          </Link>
          <Link href="/services" onClick={() => setIsOpen(false)}>
            {t('services')}
          </Link>
          <Link href="/aboutus" onClick={() => setIsOpen(false)}>
            {t('about')}
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            {t('contact')}
          </Link>
          <Link
            href="https://irenic.rezervasyonal.com/"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-irenicOrange py-2 px-4 text-center mt-32 font-medium"
            onClick={() => setIsOpen(false)}
          >
            {t('booknow')}
          </Link>

          {/* Social Icons */}
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" aria-label="Facebook" className="text-irenicOrange hover:text-white">
              <FaFacebookF size={24} />
            </a>
            <a href="#" aria-label="Instagram" className="text-irenicOrange hover:text-white">
              <FaInstagram size={24} />
            </a>
            <a href="#" aria-label="WhatsApp" className="text-irenicOrange hover:text-white">
              <FaWhatsapp size={24} />
            </a>
          </div>
        </nav>
      </aside>
    </>
  );
}
