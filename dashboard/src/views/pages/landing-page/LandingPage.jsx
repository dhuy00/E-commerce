import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './Banner'
import SearchBar from './components/SearchBar'
import Category from './components/Category'
import FeatureProducts from './sections/FeatureProducts'
import LatestProducts from './sections/LatestProducts'
import TopRated from './sections/TopRated'
import DiscountProducts from './sections/DiscountProducts'
import Footer from './components/Footer'
import { useEffect } from 'react'

const LandingPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Header/>
      <Nav/>
      <Banner/>
      <SearchBar/>
      <Category/>
      <FeatureProducts/>
      <LatestProducts name="Latest Products"/>
      <TopRated/>
      <DiscountProducts/>
      <Footer/>
    </div>
  )
}

export default LandingPage
