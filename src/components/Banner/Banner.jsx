import React from 'react'
import BannerLeft from './BannerLeft'
import BannerRight from './BannerRight'
import Container from '../Layout/Container'

const Banner = () => {
  return (
    <section className='mt-[40px]'>
      <Container>
     <div className='flex'>
      <BannerLeft/>
      <BannerRight/>
     </div>
    </Container>
    </section>
  )
}

export default Banner
