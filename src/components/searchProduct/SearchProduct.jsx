import React from 'react'
import Search from '../search/Search'
import Used from '../used/Used'

function SearchProduct() {
  return (
    <div>
        <div className="container product-container">
            <Search/>
            <Used/>
        </div>
      
    </div>
  )
}

export default SearchProduct
