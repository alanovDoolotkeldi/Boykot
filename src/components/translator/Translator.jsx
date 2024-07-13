import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

function Translator() {
  const {t} = useTranslation()
  const [language, setLanguage] = useState(i18next.language);

  function handleChange(event) {
    const newLanguage = event.target.value;
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <div className='translator-info'>
      <select value={language} onChange={handleChange}>
          <option className="option-kg" value="kg">{t("kg")}</option>
          <option value="ru">{t("ru")}</option>
          <option value="en">{t("en")}</option>
        
      </select>
    </div>
  );
}

export default Translator;
