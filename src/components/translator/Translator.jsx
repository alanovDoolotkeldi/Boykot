import { useEffect, useState } from "react";
import i18next from "i18next";

function Translator() {
  const [languages, setLanguages] = useState(["en", "ru", "kg"]);
  const [language, setLanguage] = useState(i18next.language);

  function handleChange(event) {
    const newLanguage = event.target.value;
    i18next.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  }

  return (
    <div className='translator-info'>
      <select value={language} onChange={handleChange}>
        {languages.map((el) => (
          <option key={el} value={el}>
            {el.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Translator;
