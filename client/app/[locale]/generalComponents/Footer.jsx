import React from 'react';
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import Link from 'next/link';
import DgtlfaceSvg from './DgtlfaceSvg';
import {useTranslations} from 'next-intl';


const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-irenicBlack text-white font-heebo">
      <div className="container mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Column 1 - Hotel Info */}
        <div>
          <h4 className="font-montserrat text-2xl mb-4">{t("hotelName")}</h4>
          <p className="text-gray-300 leading-relaxed">
          {t("tagline")}
          </p>
        </div>

        {/* Column 2 - Contact */}
        <div>
          <h4 className="font-montserrat text-xl mb-4"> {t("contactTitle")}</h4>
          <ul className="space-y-4 text-gray-300">
            <li>
              <Link
                href="https://www.google.com/maps?q=Irenic+Hotel+Antalya"
                target="_blank"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <FaMapMarkerAlt className="mt-1 text-lg" />
                <span>{t("address")}</span>
              </Link>
            </li>
            <li>
              <a href="tel:+902429998859" className="flex items-center gap-3 hover:text-white transition-colors">
                <FaPhoneAlt className="text-lg" />
                <span>{t("phone")}</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@irenichotel.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FaEnvelope className="text-lg" />
                <span>{t("email")}</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Quick Links + Social */}
        <div>
          <h4 className="font-montserrat text-xl mb-4">{t("quickLinksTitle")}</h4>
          <ul className="space-y-3 text-gray-300 mb-6">
            {[t("rooms"), t("about"), t("contact"), t("reservation")].map((path) => (
              <li key={path}>
                <Link
                  href={`/${path}`}
                  className="hover:underline hover:text-white transition-colors"
                >
                  {path.charAt(0).toUpperCase() + path.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition-colors"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm font-heebo">
        <p>© {new Date().getFullYear()} Irenic Hotel. All rights reserved.</p>
        <div className="pt-1 pb-3 items-center justify-center flex">
          Powered by{' '} 
          <a
            href="https://dgtlface.com"
            target="_blank"
            className="text-white font-semibold hover:underline"
          >{" "}
            <DgtlfaceSvg className="flex" width={104} height={27} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
