import { Heebo, Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import { getMessages } from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from './generalComponents/Header';
import Footer from './generalComponents/Footer';
import BookSection from './generalComponents/BookSection';
import CookiePopup from './generalComponents/CookiePopup';

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



export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  if (!routing.locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
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
