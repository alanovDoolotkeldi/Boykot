import { useState } from "react"
import i18next from "../../locales/i18next"
function Translator() {
  const [lungueage , setLungueage] = useState(i18next.language)
  const [ru ,setEn] = useState("ru")
  function handleClick (el) {
    i18next.changeLanguage(el)
    setLungueage(el)


  }
  return (
    <div className='translator-info'>
        <p onClick={()=>handleClick("ru")}>RU</p>
        <p onClick={()=>handleClick("en")}>EN</p>
        <p onClick={()=>handleClick("kg")}>KG</p>
    </div>
  )
}

export default Translator
