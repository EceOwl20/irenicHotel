import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Başlık kısmı ve map kısmı burada olsun, yukarıdaki örneği dahil et */}
        {/* Başlık Bölgesi - Arka Planlı */}
        <div className="relative w-full h-[60vh] mb-12">
          {/* Arka plan görseli */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/general/contact-header.webp')" }} // kendi görsel yolun
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Başlık */}
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-montserrat text-center">
              Contact
            </h1>
          </div>
        </div>
      {/* Harita + Bilgiler */}
      <div className="px-4 sm:px-6 md:px-16 pb-24 mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Sol: İletişim Bilgileri */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-montserrat text-irenicBlack">Get In Touch</h2>
            <p className="text-gray-600 text-base font-heebo">
              Have a question or need help with your reservation? Our team is here to assist you.
            </p>

            <div className="space-y-4 text-gray-700 text-sm font-heebo">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-xl text-irenicBlack mt-1" />
                <span>Liman Mh. Atatürk Blv. No:265, Konyaaltı, Antalya</span>
              </div>
              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-irenicBlack" />
                <span>+90 242 999 88 59</span>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-xl text-irenicBlack" />
                <span>info@irenichotel.com</span>
              </div>
            </div>

            <a
              href="https://www.google.com/maps?q=Liman+Mh.+Atatürk+Blv.+No:265,+Konyaaltı,+Antalya"
              target="_blank"
              className="inline-block mt-4 bg-irenicBlack text-white text-sm px-6 py-2 rounded-md hover:bg-black transition font-montserrat"
            >
              Open in Google Maps
            </a>
          </div>

          {/* Sağ: İletişim Formu */}
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows={5}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-irenicBlack outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-irenicBlack text-white px-6 py-2 rounded-md hover:bg-black transition"
            >
              Send Message
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

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905312345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg z-50 transition"
      >
        <FaWhatsapp className="text-2xl" />
      </a>
    </div>
  );
};

export default ContactPage;