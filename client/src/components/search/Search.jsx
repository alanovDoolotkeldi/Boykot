import React from 'react'
import { useTranslation } from 'react-i18next'

function Search() {
  const {t} =useTranslation()
  return (
    <form className='form'>
        <input type="text" placeholder={`${t("марканы жазып изде").slice(0,20)}...`}/>
      
    </form>
  )
}

export default Search
