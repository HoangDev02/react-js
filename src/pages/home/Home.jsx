import React from 'react'
import BreakFast from '../../compoment/breakfast/BreakFast'
import Featured from '../../compoment/featured/Featured'
import Footer from '../../compoment/footer/Footer'
import Header from '../../compoment/header/Header'
import Navbar from '../../compoment/navbar/Navbar'
import News from '../../compoment/news/News'
import Relaxtion from '../../compoment/relaxtion/Relaxtion'
import SpecialOffer from '../../compoment/specialOffer/SpecialOffer'
import Testimonaials from '../../compoment/testimonials/Testimonaials'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header />
        <Featured/>
        <Testimonaials/>
        <SpecialOffer/>
        <BreakFast/>
        <Relaxtion/>
        <News />
        <Footer/>

    </div>
  )
}

export default Home