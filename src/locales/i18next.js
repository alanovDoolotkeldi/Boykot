import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import trnaslationEn from "./en/translate.json"
import translationRu from "./ru/translate.json"
import translationKg from "./kg/translate.json"
i18next.use(initReactI18next).init({
    resources:{
        en:{
            translation:trnaslationEn
        },
        ru:{
            translation:translationRu
        },
        kg:{
            translation:translationKg
        }

    },
    lng:"kg"
})
export default i18next