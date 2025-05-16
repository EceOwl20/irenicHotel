import {defineRouting} from 'next-intl/routing';
 
export const config = {
  // A list of all locales that are supported
  locales: ['tr', 'en','de', 'ru', 'ae'],
  // Used when no locale matches
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix : "always",
  pathnames : {
    '/': {
      tr: '/',   // /tr/
      en: '/',   // /en/
      de: '/',   // /de/
      ru: '/',   // /ru/
      ae: '/'    // /ae/
    },

    '/aboutus': {
      tr: '/hakkimizda',  // /tr/hakkimizda
      en: '/about',       // /en/about
      de: '/uber-uns',    // /de/uber-uns
      ru: '/o-nas',       // /ru/o-nas
      ae: '/about'        // /ae/about
    },

    '/contact': {
      tr: '/iletisim',
      en: '/contact',
      de: '/kontakt',
      ru: '/kontakt',
      ae: '/contact',
    },

    '/rooms': {
      tr: '/odalar',
      en: '/rooms',
      de: '/zimmer',
      ru: '/nomera',
      ae: '/rooms',
    },

   '/rooms/deluxe-room-fr': {
      tr: '/odalar/deluxe-room-fr',
      en: '/rooms/deluxe-room-fr',
      de: '/zimmer/deluxe-room-fr',
      ru: '/nomera/deluxe-room-fr',
      ae: '/rooms/deluxe-room-fr'
    },
    '/rooms/deluxe-room-tw': {
      tr: '/odalar/deluxe-room-tw',
      en: '/rooms/deluxe-room-tw',
      de: '/zimmer/deluxe-room-tw',
      ru: '/nomera/deluxe-room-tw',
      ae: '/rooms/deluxe-room-tw'
    },
    '/rooms/corner-room': {
      tr: '/odalar/corner-room',
      en: '/rooms/corner-room',
      de: '/zimmer/corner-room',
      ru: '/nomera/corner-room',
      ae: '/rooms/corner-room'
    },
    '/rooms/jacuzzi-suite': {
      tr: '/odalar/jacuzzi-suite',
      en: '/rooms/jacuzzi-suite',
      de: '/zimmer/jacuzzi-suite',
      ru: '/nomera/jacuzzi-suite',
      ae: '/rooms/jacuzzi-suite'
    },
    '/rooms/deluxe-single-room': {
      tr: '/odalar/deluxe-single-room',
      en: '/rooms/deluxe-single-room',
      de: '/zimmer/deluxe-single-room',
      ru: '/nomera/deluxe-single-room',
      ae: '/rooms/deluxe-single-room'
    },
  
    '/services': {
      tr: '/hizmetler',
      en: '/services',
      de: '/leistungen',
      ru: '/uslugi',
      ae: '/services',
    },

  }};
  export const routing = defineRouting(config);