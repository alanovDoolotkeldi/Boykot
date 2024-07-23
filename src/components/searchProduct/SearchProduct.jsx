import React from 'react'
import Search from '../search/Search'
import Used from '../used/Used'

function SearchProduct() {
  return (
    <section>
        <div className="container product-container">
            <Search/>
            <Used/>
        </div>
      
    </section>
  )
}

export default SearchProduct
