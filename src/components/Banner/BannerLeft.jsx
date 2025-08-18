import React from 'react'

const BannerLeft = () => {
  const categoriesData = [
    {
      name: "Woman’s Fashion"
    },
    {
      name: "Men’s Fashion"
    },
    {
      name: "Electronics"
    },
    {
      name: "Home & Lifestyle"
    },
    {
      name: "Medicine"
    },
    {
      name: "Sports & Outdoor"
    },
    {
      name: "Baby’s & Toys"
    },
    {
      name: "Groceries & Pets"
    },
    {
      name: "Health & Beauty"
    },
  ]
  return (
    <div className='w-[20%] relative after:absolute after:content-[""] after:top-[-40px] after:right-0 after:w-[1px] after:h-[384px] after:bg-black/30'>
     {
      categoriesData.map((category)=>(
        <p className='font-primary mb-4'>{category.name}</p>
      ))
     }
    </div>
  )
}

export default BannerLeft
