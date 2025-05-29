import { Heebo, Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server'  
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




          {/* Chat script'i sabit olarak layout'ta bırakıyoruz */}
          <script 
          src="https://cdn.livechat.connexease.com/embed.js" 
          async 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Chat'i ilk yüklemede başlat
              document.addEventListener('DOMContentLoaded', function() {
                function initChat() {
                  if (window.ConnexeaseWebMessenger && window.ConnexeaseWebMessenger.Init) {
                    try {
                      window.ConnexeaseWebMessenger.Init('188913a5-5fcf-4de1-b6a5-711e8fd4ea8e', {
                        position: 'bottom-right'
                      });
                      console.log('Initial chat loaded');
                    } catch (error) {
                      console.error('Initial chat load error:', error);
                    }
                  } else {
                    setTimeout(initChat, 500);
                  }
                }
                
                setTimeout(initChat, 1000);
              });
            `
          }}
        />
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
