import React from 'react'
import Container from '../Layout/Container'
import products1 from '../../assets/products1.png'
import products2 from '../../assets/products2.png'
import products3 from '../../assets/products3.png'
import products4 from '../../assets/products4.png'
import { FaStar } from "react-icons/fa6";
import { TiStarHalfOutline } from "react-icons/ti";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";

const BestSellingProducts = () => {
  return (
    <section className='pb-[122px]'>
     <Container>
      <div className='pt-[27px] border-t border-black/30'></div>
      <div>
        <div className='flex items-center'>
          <div className='h-[40px] w-[20px] bg-primary rounded'></div>
          <div>
            <p className='font-primary font-semibold text-primary ml-[16px]'>This Month</p>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-between mt-[20px]'>
        <div>
          <h3 className='font-secondary font-semibold text-[36px]'>Best Selling Products</h3>
        </div>
        <div>
          <button className='py-4 px-12 bg-primary text-white rounded'>View All</button>
        </div>
      </div>
      <div className='flex justify-between items-center'>
        <div>
          <div className='relative'>
            <div className='w-[270px] py-[52px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
          <img src={products1} alt="" />
        </div>
        <div className='absolute top-3 right-3'>
            <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full mb-2'>  
              <CiHeart />        
          </div>
          <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full'>
            <FiEye />
          </div>
        </div>
          </div>
        <div>
          <p className='font-primary font-medium mt-4'>The north coat</p>
          <p className='font-primary font-medium text-primary py-2'>$260 <del className='font-primary font-medium text-[#808080] ml-3'>$360</del></p>
        </div>
        <div className='flex items-center'>
          <div className='flex'>
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
         
        </div>
         <div>
            <p className='font-primary font-medium text-[#808080] ml-2'>(65)</p>
          </div>
        </div>
        </div>
        <div>
          <div className='relative'>
            <div className='w-[270px] pt-[61px] pb-[60px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
          <img src={products2} alt="" />
        </div>
        <div className='absolute top-3 right-3'>
            <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full mb-2'>  
              <CiHeart />        
          </div>
          <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full'>
            <FiEye />
          </div>
        </div>
          </div>
        <div>
          <p className='font-primary font-medium mt-4'>Gucci duffle bag</p>
          <p className='font-primary font-medium text-primary py-2'>$960 <del className='font-primary font-medium text-[#808080] ml-3'>$1160</del></p>
        </div>
        <div className='flex items-center'>
          <div className='flex'>
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <TiStarHalfOutline size={20} className='text-[#FFAD33]' />
         
        </div>
         <div>
            <p className='font-primary font-medium text-[#808080] ml-2'>(65)</p>
          </div>
        </div>
        </div>
        <div>
          <div className='relative'>
            <div className='w-[270px] pt-[82px] pb-[73px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
          <img src={products3} alt="" />
        </div>
        <div className='absolute top-3 right-3'>
            <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full mb-2'>  
              <CiHeart />        
          </div>
          <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full'>
            <FiEye />
          </div>
        </div>
          </div>
        <div>
          <p className='font-primary font-medium mt-4'>RGB liquid CPU Cooler</p>
          <p className='font-primary font-medium text-primary py-2'>$160 <del className='font-primary font-medium text-[#808080] ml-3'>$170</del></p>
        </div>
        <div className='flex items-center'>
          <div className='flex'>
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <TiStarHalfOutline size={20} className='text-[#FFAD33]' />
         
        </div>
         <div>
            <p className='font-primary font-medium text-[#808080] ml-2'>(65)</p>
          </div>
        </div>
        </div>
        <div>
         <div className='relative'>
            <div className='w-[270px] pt-[38px] pb-[36px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
          <img src={products4} alt="" />
        </div>
        <div className='absolute top-3 right-3'>
            <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full mb-2'>  
              <CiHeart />        
          </div>
          <div className='flex justify-center items-center w-[34px] h-[34px] bg-[#FFFFFF] rounded-full'>
            <FiEye />
          </div>
        </div>
          </div>
        <div>
          <p className='font-primary font-medium mt-4'>Small BookSelf</p>
          <p className='font-primary font-medium text-primary py-2'>$360</p>
        </div>
        <div className='flex items-center'>
          <div className='flex'>
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
          <FaStar size={20} className='text-[#FFAD33]' />
         
        </div>
         <div>
            <p className='font-primary font-medium text-[#808080] ml-2'>(65)</p>
          </div>
        </div>
        </div>
      </div>
    </Container> 
    </section>
  )
}

export default BestSellingProducts
