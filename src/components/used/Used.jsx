import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function Used() {
  const [isMin, setIsMin] = useState(0)
  const min = 70000
  const max = 80000

  useEffect(() => {
    const updateRandomNumber = () => {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
      setIsMin(randomNumber)
    }

    const interval = setInterval(updateRandomNumber, 1000) // Update every second

    const timeout = setTimeout(() => {
      clearInterval(interval) // Stop updating after 10 seconds
    }, 10000)

    // Clean up the interval and timeout on component unmount
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, []) // Empty dependency array means this runs once after initial render

  const { t } = useTranslation()
  return (
    <div className='used-texts'>
      <h1>{isMin}</h1>
      <p>{t("колдонуучунун саны")}</p>
    </div>
  )
}

export default Used
