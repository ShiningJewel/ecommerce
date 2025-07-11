import React from 'react'

const BannerLeft = () => {
  const CetegoriesData = [
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
    }
  ]
  return (
    <div className='w-[20%]'>
      {
        CetegoriesData.map((cetegory) => (
          <p className='mb-4 font-primary'>{cetegory.name}</p>
        ))
      }
    </div>
  )
}

export default BannerLeft
