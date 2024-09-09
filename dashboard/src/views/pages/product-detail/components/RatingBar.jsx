import React from 'react'
import { FaStar } from 'react-icons/fa';

const RatingBar = ({ star, ratingScore }) => {
  const percentage = (ratingScore / 5) * 100;

  return (
    <div className='flex flex-row items-center gap-2'>
      <FaStar className='text-yellow-500' />
      <span>{star}</span>
      <span className='w-48 h-2 relative rounded-md bg-gray-200'>
        <span
          className='h-2 absolute rounded-md bg-black'
          style={{ width: `${percentage}%` }} // Set width dynamically
        ></span>
      </span>
    </div>
  );
}

export default RatingBar
