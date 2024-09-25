import React from 'react'
import Header from '../landing-page/components/Header'
import Nav from '../landing-page/components/Nav'
import PageName from './../product-detail/components/PageName'
import { useState } from 'react'
import ProductList from './components/ProductList'


const ShoppingCart = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <PageName name="Shopping Cart"/>
      <ProductList/>
    </div>
  )
}

export default ShoppingCart
