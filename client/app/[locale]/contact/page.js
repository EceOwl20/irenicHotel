import React from 'react';
import {useTranslations} from 'next-intl';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import img from "../../../public/general/irenicHotel.webp"
import SubBanner from '../generalComponents/SubBanner';

const ContactPage = () => {
  const t = useTranslations('Contact');

  return (
    <div className="bg-white min-h-screen">
      {/* Başlık kısmı ve map kısmı burada olsun, yukarıdaki örneği dahil et */}
        {/* Başlık Bölgesi - Arka Planlı */}
       <SubBanner img={img} header={t("headerTitle")}/>
      {/* Harita + Bilgiler */}
      <div className="px-4 sm:px-6 md:px-16 pb-24 mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">
          {/* Sol: İletişim Bilgileri */}
          <div className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start space-y-6">
            <h2 className="text-[25px] lg:text-3xl font-bold font-montserrat text-irenicBlack">{t("subtitle")}</h2>
            <p className="text-gray-600 text-base font-heebo">
            {t("getInTouchDesc")}
            </p>

            <div className="space-y-4 text-gray-700 text-sm font-heebo flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl text-irenicBlack mt-1" />
                <span>{t("addressValue2")}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-irenicBlack" />
                <span> {t("phoneValue")}</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-irenicBlack" />
                <span> {t("emailValue")}</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Liman+Mh.+Atatürk+Blv.+No:265,+Konyaaltı,+Antalya"
              target="_blank"
              className="inline-block mt-4 bg-irenicBlack text-white text-sm px-6 py-2 rounded-md hover:bg-black transition font-montserrat"
            >
               {t("openMapsButton")}
            </a>
          </div>

          {/* Sağ: İletişim Formu */}
          <form className="flex flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-start w-full space-y-5">
            <div className='flex flex-col w-full text-start'>
              <label className="block text-sm font-medium text-gray-700"> {t("formNameLabel")}</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none "
              />
            </div>
            <div className='flex flex-col w-full text-start'>
              <label className="block text-sm font-medium text-gray-700"> {t("formEmailLabel")}</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none"
              />
            </div>
            <div className='flex flex-col w-full text-start'>
              <label className="block text-sm font-medium text-gray-700"> {t("formMessageLabel")}</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-irenicBlack text-white px-6 py-2 rounded-md hover:bg-black transition"
            >
               {t("formSubmit")}
            </button>
          </form>
        </div>
      </div>
      <div className="w-full h-[400px] overflow-hidden rounded-xl border border-gray-200 shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.6956879262053!2d30.63050877563449!3d36.84676776468117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39019edcbcb65%3A0xc7cbd9fd5dc9e061!2sLiman%2C%20Atat%C3%BCrk%20Blv.%20No%3A265%2C%2007130%20Konyaalt%C4%B1%2FAntalya!5e0!3m2!1str!2str!4v1713879455411!5m2!1str!2str"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactPage;