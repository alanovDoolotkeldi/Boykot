import React from 'react'
import { useTranslation } from 'react-i18next'

function Used() {
  const {t} = useTranslation()
  return (
    <div className='used-texts'>
        <h1>4123900</h1>
        <p>{t("колдонуучунун саны")}</p>
      
    </div>
  )
}

export default Used
