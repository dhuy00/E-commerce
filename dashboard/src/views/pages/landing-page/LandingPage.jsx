import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Banner from './Banner'
import SearchBar from './components/SearchBar'
import Category from './components/Category'
import FeatureProducts from './sections/FeatureProducts'

const LandingPage = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <Banner/>
      <SearchBar/>
      <Category/>
      <FeatureProducts/>
    </div>
  )
}

export default LandingPage
