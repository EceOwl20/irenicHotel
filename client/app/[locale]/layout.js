import { Heebo, Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
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

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}


export const metadata = {
  title: "Irenic Hotel",
  description: "Irenic Hotel",

  icons: {
    icon: '/irenicLogo.png',      
    shortcut: '/irenicLogo.png',  // bazen ek kısayol desteği için
    apple: '/irenicLogo.png'      // iOS ana ekran ikonu
  }
};



export default async function RootLayout({ children, params }) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // 2) Dil dosyalarını dinamik import et
  const messages = (await import(`../../messages/${locale}.json`)).default

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${heebo.variable} antialiased`}
      >
          <NextIntlClientProvider>
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
