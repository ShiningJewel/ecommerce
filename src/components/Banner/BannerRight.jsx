import React from 'react'
import banner from '../../assets/banner.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const BannerRight = () => {
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='w-[80%] ml-[45px]'>
       <Slider {...settings}>
      <div>
        <img src={banner} className='w-full' alt="" />
      </div>
      <div>
        <img src={banner} className='w-full' alt="" />
      </div>
      <div>
        <img src={banner} className='w-full' alt="" />
      </div>
    </Slider>
    </div>
  )
}

export default BannerRight
