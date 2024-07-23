import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en/translate.json";
import translationRu from "./ru/translate.json";
import translationKg from "./kg/translate.json";

i18next.use(initReactI18next).init({
    resources: {
        en: {
            translation: translationEn
        },
        ru: {
            translation: translationRu
        },
        kg: {
            translation: translationKg
        }
    },
    lng: "kg", // Default language
    fallbackLng: "en", // Fallback language if the current language translations are not available
    interpolation: {
        escapeValue: false // React already does escaping
    }
});

export default i18next;
