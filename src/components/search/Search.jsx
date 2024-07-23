import React from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setChangeProduct } from '../../redux/ChangeSlice/ChangeSlice'
function Search() {
  const {value} = useSelector((state)=>state.value)
  const dispatch = useDispatch()
  const {t} =useTranslation()
  function handleChange (event) {
    dispatch(setChangeProduct(event.target.value))

  }
  return (
    <form className='form'>
        <input onChange={handleChange} value={value} type="text" placeholder={`${t("марканы жазып изде").slice(0,20)}...`}/>
      
    </form>
  )
}

export default Search
