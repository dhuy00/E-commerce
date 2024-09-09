import React from 'react'
import { FaStar } from 'react-icons/fa'
import chair1 from './../../../../assets/chair/1.jpg'

const RelatedProductCard = () => {
  return (
    <div className='shadow-around-light w-[18rem] h-[30rem] flex flex-col gap-2 
    leading-none font-outfit font-medium text items-center text-blue-darker'>
      <img className='h-3/4 w-full object-cover' src={chair1} alt='img-chair'/>
      <div className='flex flex-row mt-2 text-yellow-500 text-md gap-4'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
      <p className='text-xl  leading-none'>Wooden Chair</p>
      <p className='text-2xl font-semibold'>$1500</p>
    </div>
  )
}

export default RelatedProductCard
