import React from 'react'
import { FaRegSquare } from "react-icons/fa";
import { FaSquare } from "react-icons/fa";

const Banner = () => {
  return (
    <div className='bg-violet-light mt-[82px] w-full h-[590px] z-0 pl-28 relative'>
      <div className='flex h-full justify-center flex-col gap-2'>
        <h3 className='font-roboto text-pink-main font-semibold text-xl'>
          The Best Shopping Experience...
        </h3>
        <h1 className='font-mplus text-[2rem] font-semibold w-[500px] text-blue-darker'>
          Find Your Perfect Fit! Shop Our Spring Sale Now
        </h1>
        <p className='font-roboto text-[#848484] font-normal w-[700px] text-justify'>
          Revamp your style with our curated collection of the latest trends and timeless classics. From statement pieces to wardrobe essentials, find everything you need to elevate your look and express your unique personality.
        </p>
        <button className='text-white font-outfit px-4 w-32 rounded-lg py-[5px] bg-gradient-to-r from-[#3378FF] to-[#9442FE]'>
          Shop now
        </button>
      </div>
      <div className='text-pink-main absolute flex flex-row gap-4 left-1/2 bottom-6'>
        {
          [1, 2, 3].map((index) => (
            index !== 1 ? (
              <FaRegSquare className='rotate-45 text-[10px] cursor-pointer' />
            ) : (
              <FaSquare className='rotate-45 text-[10px] cursor-pointer' />
            )
          ))
        }
      </div>
    </div>
  )
}

export default Banner
