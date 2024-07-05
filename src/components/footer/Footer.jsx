import React from 'react'
import { useTranslation } from 'react-i18next'

function Footer() {
  const {t} = useTranslation()
  return (
    <footer>
       <div className="container footer-container">
        <p>{t("text")}</p>
        <h1>{t("al")} : 139</h1>

       </div>
      
    </footer>
  )
}

export default Footer
