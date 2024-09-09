import React from 'react'
import { FaStar } from 'react-icons/fa'
import { BiReceipt } from 'react-icons/bi'
import perfume from './../../../../assets/perfume.jpg';

const ProductCard = ({ name, price, rating, sold }) => {
  return (
    <div className='border-2 border-gray-border overflow-hidden w-[600px] h-48 rounded-[1rem]
    flex flex-row gap-4'>
      {/* Image */}
      <img className='w-[30%] h-full object-cover' src={perfume} alt='temp-img' />
      {/* Content */}
      <div className='flex flex-col gap-2 py-2 font-outfit'>
        {/* Name */}
        <p className='font-medium fond-outfit text-xl text-[#184363]'>{name}</p>
        {/* Rating */}
        <div className='flex flex-row gap-2 text-yellow-500'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        {/* Introduction */}
        <p>Never have to waking up late in the morning</p>
        {/* Sold */}
        <div className='flex flex-row gap-2 items-center text-md font-medium text-gray-400'>
          <BiReceipt /> <span>{sold}</span>
        </div>
        {/* Price */}
        <p className='text-2xl font-semibold text-blue-dark'>${price}</p>
      </div>
    </div>
  )
}

export default ProductCard
