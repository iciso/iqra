const path = require('path'); 

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ta'],
  },
  localePath: path.resolve('./public/locales'),
};
