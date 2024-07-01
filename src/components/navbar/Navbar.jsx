import React from 'react'
import Text from '../text/Text'
import Translator from '../translator/Translator'

function Navbar() {
  return (
    <header>
      <div className="container header-container">
        <Text/>
        <Translator/>
    
      </div>
    </header>
  )
}

export default Navbar
