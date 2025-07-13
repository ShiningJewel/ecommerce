import React, { useState } from 'react'
import Container from '../Layout/Container'
import products1 from '../../assets/products1.png'
import { FaStar } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { FiEye } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const OurProducts = () => {

  const [visible, setVisible] = useState(1)
  const handleLoadData = () =>{
    setVisible((prev)=>prev+1)
  }
  const products = [
    {
      name: 'The north coat',
      price: '$3243',
      image: products1,
    },
    {
      name: 'The north coat',
      price: '$3243',
      image: products1,
    },
    {
      name: 'The north coat',
      price: '$3243',
      image: products1,
    },
    {
      name: 'The north coat',
      price: '$3243',
      image: products1,
    },
  ]

  return (
    <section className='pb-[122px]'>
         <Container>
          <div className='pt-[27px]'></div>
          <div>
            <div className='flex items-center'>
              <div className='h-[40px] w-[20px] bg-primary rounded'></div>
              <div>
                <p className='font-primary font-semibold text-primary ml-[16px]'>Our Products</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between mt-[20px]'>
            <div>
              <h3 className='font-secondary font-semibold text-[36px]'>Explore Our Products</h3>
            </div>
            <div className='flex items-center'>
                        <div>
                          <button className='flex justify-center items-center w-[46px] h-[46px] rounded-full bg-[#F5F5F5]'>
                            <FaArrowLeft />
                          </button>
                        </div>
                        <div>
                          <button className='flex justify-center items-center ml-[8px] w-[46px] h-[46px] rounded-full bg-[#F5F5F5]'>
                            <FaArrowRight />
                          </button>
                        </div>
                      </div>
          </div>
          {
            products.slice(0,visible).map((product)=>(
              <div className='flex flex-wrap justify-between items-center'>
            <div>
              <div className='relative'>
                <div className='w-[270px] group py-[52px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
              <img src={product.image} alt="" />
              <p className='bg-black hidden group-hover:block text-white py-2 text-center absolute bottom-0 left-0 w-full transition-all duration-200 '>Add To Cart</p>
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
              <p className='font-primary font-medium mt-4'>{product.name}</p>
              <p className='font-primary font-medium text-primary py-2'>{product.price} <del className='font-primary font-medium text-[#808080] ml-3'>$360</del></p>
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
                <div className='w-[270px] group py-[52px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
              <img src={product.image} alt="" />
              <p className='bg-black hidden group-hover:block text-white py-2 text-center absolute bottom-0 left-0 w-full transition-all duration-200 '>Add To Cart</p>
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
              <p className='font-primary font-medium mt-4'>{product.name}</p>
              <p className='font-primary font-medium text-primary py-2'>{product.price} <del className='font-primary font-medium text-[#808080] ml-3'>$360</del></p>
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
                <div className='w-[270px] group py-[52px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
              <img src={product.image} alt="" />
              <p className='bg-black hidden group-hover:block text-white py-2 text-center absolute bottom-0 left-0 w-full transition-all duration-200 '>Add To Cart</p>
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
              <p className='font-primary font-medium mt-4'>{product.name}</p>
              <p className='font-primary font-medium text-primary py-2'>{product.price} <del className='font-primary font-medium text-[#808080] ml-3'>$360</del></p>
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
                <div className='w-[270px] group py-[52px] mt-[60px] rounded bg-[#F5F5F5] flex flex-col justify-center items-center '>
              <img src={product.image} alt="" />
              <p className='bg-black hidden group-hover:block text-white py-2 text-center absolute bottom-0 left-0 w-full transition-all duration-200 '>Add To Cart</p>
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
              <p className='font-primary font-medium mt-4'>{product.name}</p>
              <p className='font-primary font-medium text-primary py-2'>{product.price} <del className='font-primary font-medium text-[#808080] ml-3'>$360</del></p>
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
            ))
          }
          <div className='text-center mt-[60px]'>
            <button  onClick={handleLoadData} className='py-4 px-[48px] rounded bg-primary text-white font-primary font-medium'>Show More Products</button>
          </div>
        </Container> 
        </section>
  )
}

export default OurProducts
