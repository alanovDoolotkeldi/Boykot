import React from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function Text() {
  const {t} = useTranslation()
  return (
    <Link to="/products" className='text-container'>
      <h1>

      {t("АЛБАСАҢ ӨЛБӨЙСҮҢ, АЛСАҢ")} <span>{t("ӨЛҮШӨТ")} !!!</span>
      </h1>
    </Link>
  )
}

export default Text
