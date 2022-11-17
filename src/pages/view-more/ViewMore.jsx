import React from 'react'
import '../../styles/main.css'
import ImageRender from '../../scripts/components/image-render'
import ViewMore_1 from '../../scripts/components/view-more'
import OtherRoom from '../../scripts/components/other-room'
import Navbar from '../../compoment/navbar/Navbar'
import Footer from '../../compoment/footer/Footer'
import Header from '../../scripts/components/header'
const ViewMore = () => {
  return (
    <div>
      <Header/>
        <main style={{ minHeight: "100vh" }}>
          <ImageRender />
          <ViewMore_1 />
          <OtherRoom />
        </main>
      <Footer/>
    </div>
  )
}

export default ViewMore