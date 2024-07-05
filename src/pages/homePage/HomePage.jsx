import React from 'react'
import SearchProduct from '../../components/searchProduct/SearchProduct'
import Item from '../../components/Items/Item'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'

function HomePage() {
  return (
    <div >
         <Navbar/>
        <SearchProduct/>
        <Item/>
        <Footer/>
    </div>
  )
}

export default HomePage
