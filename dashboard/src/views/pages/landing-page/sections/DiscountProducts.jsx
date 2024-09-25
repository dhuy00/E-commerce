import React from 'react'
import frige from './../../../../assets/fridges.jpg'
import user from './../../../../assets/avt_user.png'
import { Link } from 'react-router-dom'

const ProductCard = () => {
  return (
    <Link to='product-detail/2'>
      <div className='flex flex-col gap-2'>
        {/* Product Info */}
        <div className='w-80 hover:-translate-y-2 transition-all h-[25rem] gap-3 flex flex-col py-4 border-2 border-gray-200 rounded-md shadow-md'>
          {/* Image */}
          <img className='rounded-md h-[25rem] object-cover' src={frige} alt='phone-img' />
        </div>
        {/* Name and Price */}
        <div className='font-outfit font-medium flex flex-row justify-between'>
          <p className='text-blue-darker'>Samsung refrigerator</p>
          <div className='flex flex-row gap-2'>
            <p className='text-pink-main'>$1800</p>
            <p className='text-blue-darker relative'>$2000 <span className='absolute top-3 w-12 left-0 h-[3px] bg-blue-darker'></span></p>
          </div>
        </div>
      </div>
    </Link>
  )
}

const DiscountProducts = () => {
  return (
    <div className='mb-24'>
      {/* Title */}
      <div className='flex flex-col mb-8 items-center justify-center font-outfit 
      font-semibold text-lg tracking-wide'>
        <h2 className='text-blue-darker'>Discount Products</h2>
        <span className='w-24 h-[2.5px] bg-blue-darker'>
        </span>
      </div>
      {/* Product List */}
      <div className='flex flex-row justify-center items-center gap-20'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  )
}

export default DiscountProducts
