import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          "t-welcome-home": "Welcome!",
          "t-welcome-title": "Sell your products in Perú.",
          "t-welcome-description": "Complete the registration form",
        }
      },
      es: {
        translations: {
          "t-welcome-home": "¡Bienvenido!",
          "t-welcome-title": "Sell your products in Perú.",
          "t-welcome-description": "Complete the registration form",
        }
      }
    },
    fallbackLng: "en",
    debug: true,
    ns: ["translations"],
    defaultNS: "translations",
    keySeparator: false,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
