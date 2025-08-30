// i18next.config.js
const i18next = require('i18next');
const HttpBackend = require('i18next-http-backend');
const LanguageDetector = require('i18next-browser-languagedetector');
const { initReactI18next } = require('react-i18next');

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta'],
    backend: {
      loadPath: '/translations/{{lng}}/translations.json', // Updated path
    },
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

module.exports = i18next;
