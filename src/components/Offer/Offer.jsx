import React from 'react'
import Container from '../Layout/Container'
import Countdown from 'react-countdown';
import RenderedTime from './RenderedTime';

const Offer = () => {
  return (
    <section className=' pb-[161px]'>
      <Container>
        <div className='bg-[url(./assets/offer.png)] bg-cover bg-no-repeat bg-center py-[69px]'>
      <div  className='pl-[56px]'>
        <div>
        <p className='font-primary font-semibold text-[#00FF66]'>Categories</p>
        <h3 className='w-[441px] text-white font-secondary font-semibold text-[48px] leading-[60px] tracking-[4%] '>Enhance Your Music Experience</h3>
      </div>
      <div>
        <Countdown date={Date.now() + 100000000}
        renderer={RenderedTime}
        />,
      </div>
      <div>
        <button className='py-4 px-[48px] font-primary font-medium bg-[#00FF66] rounded text-white'>Buy Now!</button>
      </div>
      </div>
    </div>
      </Container>
    </section>
  )
}

export default Offer
