// Örneğin şöyle olmalı:
import createNextIntlPlugin from 'next-intl/plugin';
export default createNextIntlPlugin({
  experimental: { appDir: true },
  i18n: {
    locales: ['tr','en','de','ru','ae'],
    defaultLocale: 'tr',
    localeDetection: true
  }
});
