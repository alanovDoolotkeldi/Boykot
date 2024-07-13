import { useEffect, useState } from "react"
import i18next from "i18next"
function Translator() {
  const [languages, setLanguages] = useState(["en", "ru", "kg"])
  const [language, setLanguage] = useState(i18next.language)
  console.log(language)

  function handleClick(el) {
    i18next.changeLanguage(el)
    


  }



  return (
    <div className='translator-info'>
      {languages.map((el) => (
        <p key={el} onClick={()=>handleClick(el)}>{el.toUpperCase()}</p>
      ))}
    </div>
  )
}

export default Translator
