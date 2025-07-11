import React from 'react'
import logo from '../../assets/logo.png'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaOpencart } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import Container from '../Layout/Container';
const Navbar = () => {
  return (
    <nav className='pt-[42px] pb-[14px] border-b border-[#D9D9D9]'>
      <Container>
       <div className='flex items-center'>
         <div className='w-[20%]'>
          <img src={logo} alt="#logo" />
         </div>
        <div className='w-[40%] ml-[30px]'>
          <ul className='flex gap-x-[48px]'>
            <li><a href="" className='font-primary'>Home</a></li>
            <li><a href="" className='font-primary'>Contact</a></li>
            <li><a href="" className='font-primary'>About</a></li>
            <li><a href="" className='font-primary'>Sign Up</a></li>
          </ul>
        </div>
        <div className='w-[40%] flex justify-end items-center gap-x-[16px]'>
          <div className='w-[243px] rounded  bg-[#F5F5F5] relative'>
            <input className='w-full outline-0 py-[7px] pl-[20px] pr-[30px] placeholder:font-primary placeholder:text-sm ' type="text" placeholder='What are you looking for?' />
            <CiSearch className='absolute top-[10px] right-[12px]' size={18}/>
          </div>
          <CiHeart size={24} />
          <FaOpencart size={24} />
          <GoPerson size={24} />
        </div>
       </div>
      </Container>
    </nav>
  )
}

export default Navbar
