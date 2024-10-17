import React from 'react'

import Banner from "../image/banner.png"
import Campaign from '../component/Campaign'
import Content from '../component/Content'
import Cart from '../component/Cart'
import PriceSection from '../component/PriceSection'

function Home() {
  return (
    <>

      <div className='container' style={{ paddingTop: "20px" }}>

        <div className='headline'>
          <h2 className='text-center fw-bold primary-color'>
            বিচি মুক্ত সিডলেস খেজুর
          </h2>

        </div>

        <div className='banner d-flex justify-content-center align-items-center mt-3'>

          <img src={Banner} />

        </div>

        <Campaign />

        <PriceSection />

       

      </div>

      <div className='background-text-section mt-5'>
        <h2 className='text-center fw-bold'>আমাদের কাছে কেনো কিনবেন ?</h2>

      </div>

      <Content />

      <Cart />


    </>
  )
}

export default Home