const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['ta'],  // 'ta' for Tamil
  localePath: typeof window === 'undefined' ? 'public/locales' : '/locales',
});
