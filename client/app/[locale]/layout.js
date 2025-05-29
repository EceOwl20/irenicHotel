import { Heebo, Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server'   // ← setRequestLocale ekledik
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from './generalComponents/Header';
import Footer from './generalComponents/Footer';
import BookSection from './generalComponents/BookSection';
import CookiePopup from './generalComponents/CookiePopup';
import Script from 'next/script';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const heebo = Heebo({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})


export const metadata = {
  title: "Irenic Hotel",
  description: "Irenic Hotel",

  icons: {
    icon: '/irenicLogo.png',      
    shortcut: '/irenicLogo.png',  
    apple: '/irenicLogo.png'     
  }
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

   // 1) Gelen locale bilgisini Next Intl’in store’una yazıyoruz
   setRequestLocale(locale)
  
    // 2) Ardından mesajları yükleyip client’a iletebiliriz
    const messages = await getMessages()

  return (
    <html lang={locale}>
       <head>
        {/* 1) gtag.js kütüphanesini yükleyin */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />

        {/* 2) Google Tag yapılandırmasını yapın */}
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','${process.env.NEXT_PUBLIC_GA_ID}',{
              page_path: window.location.pathname
            });
          `}
        </Script>
      </head>
      <body
        className={`${montserrat.variable} ${heebo.variable} antialiased`}
      >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Header/>
            <BookSection/>
             {children}
             <CookiePopup/>
            <Footer />        
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
