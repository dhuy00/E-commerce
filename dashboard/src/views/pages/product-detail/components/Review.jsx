import React from 'react'
import { FaStar } from 'react-icons/fa';
import tempImg from './../../../../assets/admin_bg.png'

const Review = () => {
  const imageStyle = 'w-16 h-16 object-cover rounded-lg';
  return (
    <div className='font-outfit flex flex-col justify-center leading-none gap-2 mr-12
    border-2 border-gray-300 px-4 py-4 rounded-[20px] text-gray-light'>
      {/* Name */}
      <p className='text-lg font-medium text-black'>Duc Huy</p>
      {/* Star and Date */}
      <div className='flex flex-row justify-between'>
        {/* Star */}
        <div className='flex flex-row gap-2 text-yellow-500'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        {/* Date */}
        <span className='font-medium'>12 October 2024</span>
      </div>
      {/* Content */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla condimentum sem neque, vel mollis turpis tempor faucibus. Vivamus a.
      </p>
      {/* Images */}
      <div className='flex flex-row gap-2'>
        <img className={imageStyle} src={tempImg} alt='cmt-img' />
        <img className={imageStyle} src={tempImg} alt='cmt-img' />
        <img className={imageStyle} src={tempImg} alt='cmt-img' />
      </div>
    </div>
  )
}

export default Review
