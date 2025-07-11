import React from 'react'

const BannerLeft = () => {
  const CategoriesData = [
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
    <div className='w-[20%] relative after:absolute after:bg-black/30 after:top-[-40px] after:right-0 after:h-[384px] after:w-[1px] '>
      {
        CategoriesData.map((category) => (
          <p className='mb-4 font-primary'>{category.name}</p>
        ))
      }
    </div>
  )
}

export default BannerLeft
