import React from 'react'
import { Link } from 'react-router-dom'

function Text() {
  return (
    <Link to="/products" className='text-container'>
      <h1>

      АЛБАСАҢ ӨЛБӨЙСҮҢ, АЛСАҢ <span>ӨЛҮШӨТ !!!</span>
      </h1>
    </Link>
  )
}

export default Text
