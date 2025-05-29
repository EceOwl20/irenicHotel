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
    tr: '/odalar/luks-oda-fr',
    en: '/rooms/deluxe-room-fr',
    de: '/zimmer/deluxe-zimmer-fr',
    ru: '/nomera/люкс-номер-fr',
    ae: '/rooms/deluxe-room-fr'
  },
  '/rooms/deluxe-room-tw': {
    tr: '/odalar/luks-oda-tw',
    en: '/rooms/deluxe-room-tw',
    de: '/zimmer/deluxe-zimmer-tw',
    ru: '/nomera/люкс-номер-tw',
    ae: '/rooms/deluxe-room-tw'
  },
  '/rooms/corner-room': {
    tr: '/odalar/kose-oda',
    en: '/rooms/corner-room',
    de: '/zimmer/eckzimmer',
    ru: '/nomera/угловой-номер',
    ae: '/rooms/corner-room'
  },
  '/rooms/jacuzzi-suite': {
    tr: '/odalar/jakuzi-suit',
    en: '/rooms/jacuzzi-suite',
    de: '/zimmer/jacuzzi-suite',
    ru: '/nomera/джакузи-сьют',
    ae: '/rooms/jacuzzi-suite'
  },
  '/rooms/deluxe-single-room': {
    tr: '/odalar/luks-tek-kisilik-oda',
    en: '/rooms/deluxe-single-room',
    de: '/zimmer/deluxe-einzelzimmer',
    ru: '/nomera/люкс-одноместный-номер',
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