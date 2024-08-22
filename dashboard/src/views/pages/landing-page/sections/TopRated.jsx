import React from 'react'
import phone from './../../../../assets/categories/phone.jpg'
import user from './../../../../assets/avt_user.png'

const ProductCard = () => {
  return (
    <div className='flex flex-col gap-4'>
      {/* Product Info */}
      <div className='w-64 hover:-translate-y-2 transition-all cursor-pointer h-[25rem] gap-3 flex flex-col px-4 py-4 border-2 border-gray-200 rounded-md shadow-md'>
        {/* Image */}
        <img className='rounded-md h-72 object-cover' src={phone} alt='phone-img' />
        {/* Description */}
        <div className='flex flex-col gap-1 font-outfit justify-center items-center
       text-blue-darker'>
          <p className='font-medium text-lg'>iPhone 15 Promax</p>
          <p className='text-3xl font-semibold'>$1500</p>
        </div>
      </div>
      {/* Comment */}
      <div className='flex flex-row gap-4 w-64 bg-[#F8F8F8] px-2 py-2 justify-center 
      items-center shadow-lg rounded-lg'>
        <img className='w-16 h-10  object-cover rounded-full' src={user} alt='img-user'/>
        <div className='flex flex-col text-sm font-outfit'>
          <p className='font-semibold'>Ashley Daniel</p>
          <p className='text-[10px] font-medium text-gray-400 leading-normal'>"Saved me tons of time - never going back to grocery shopping!"</p>
        </div>
      </div>
    </div>
  )
}

const TopRated = () => {
  return (
    <div className='mb-16'>
      {/* Title */}
      <div className='flex flex-col mb-8 items-center justify-center font-outfit 
      font-semibold text-lg tracking-wide'>
        <h2 className='text-blue-darker'>Top Rated Products</h2>
        <span className='w-24 h-[2.5px] bg-blue-darker'>
        </span>
      </div>
      {/* Product List */}
      <div className='flex flex-row justify-center items-center gap-28'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default TopRated
