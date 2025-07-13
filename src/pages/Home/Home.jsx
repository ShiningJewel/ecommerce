import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Banner from '../../components/Banner/Banner'
import Categories from '../../components/Categories/Categories'
import BestSellingProducts from '../../components/BestSellingProducts/BestSellingProducts'
import Offer from '../../components/Offer/Offer'
import OurProducts from '../../components/OurProducts/OurProducts'

const Home = () => {
  return (
    <>
    <Header/>
    <Navbar/>  
    <Banner/>
    <Categories/>
    <BestSellingProducts/>
    <Offer/>
    <OurProducts/>
    </>
  )
}

export default Home
