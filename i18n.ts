// i18n.ts
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18next
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ta'],
    backend: {
      loadPath: '/translations/{{lng}}/translations.json', // Matches public/translations/{lang}/translations.json
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;