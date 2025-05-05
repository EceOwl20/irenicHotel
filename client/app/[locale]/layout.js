import { Heebo, Montserrat, Roboto } from 'next/font/google'
import "../globals.css";
import {NextIntlClientProvider, Locale, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from './generalComponents/Header';
import Footer from './generalComponents/Footer';
import BookSection from './generalComponents/BookSection';

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
};

export default async function RootLayout({ children, params }) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${heebo.variable} antialiased`}
      >
          <NextIntlClientProvider>
            <Header/>
            <BookSection/>
        {children}
            <Footer />        
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
