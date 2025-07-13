import React from 'react'

const RenderedTime = ({ days, hours, minutes, seconds}) => {
  return (
    <div className='flex gap-x-6'>
      <div className='flex flex-col justify-center py-[14px] px-[15px] items-center w-[62px] h-[62px] rounded-full bg-white '>
        <p className='font-primary font-semibold'>{days}</p>
        <p className='font-primary text-[11px]'>days</p>
      </div>
      <div className='flex flex-col justify-center py-[14px] px-[15px] items-center w-[62px] h-[62px] rounded-full bg-white '>
        <p className='font-primary font-semibold'>{hours}</p>
        <p className='font-primary text-[11px]'>hours</p>
      </div>
      <div className='flex flex-col justify-center py-[14px] px-[15px] items-center w-[62px] h-[62px] rounded-full bg-white '>
        <p className='font-primary font-semibold'>{minutes}</p>
        <p className='font-primary text-[11px]'>minutes</p>
      </div>
      <div className='flex flex-col justify-center py-[14px] px-[15px] items-center w-[62px] h-[62px] rounded-full bg-white '>
        <p className='font-primary font-semibold'>{seconds}</p>
        <p className='font-primary text-[11px]'>seconds</p>
      </div>
    </div>
  )
}

export default RenderedTime
