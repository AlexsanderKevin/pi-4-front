import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation_en from './translation_en';
import translation_pt from './translation_pt';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: translation_en,
      pt: translation_pt
    },
    lng: 'pt',
    interpolation: {
      escapeValue: false,
    }
  });


export default i18n;
