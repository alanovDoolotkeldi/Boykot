import React, { useEffect, useState } from 'react'
import SearchProduct from '../../components/searchProduct/SearchProduct'
import Item from '../../components/Items/Item'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import Element from '../../components/element/Element'


function HomePage() {


  return (
    <div className='body'>
         <Navbar/>
        <SearchProduct/>
        {/* <Item /> */}
        <Element/>
        <Footer/>
    </div>
  )
}

export default HomePage
