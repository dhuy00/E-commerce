import React from 'react'
import shoes from './../../../../assets/categories/shoes.jpg'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import sofa from './../../../../assets/categories/sofa.jpg'
import table from './../../../../assets/categories/table.jpg'
import pillow from './../../../../assets/categories/pillow.jpg'
import { MdOutlineNavigateNext } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";


const ProcductCard = ({ name, price, rating, image }) => {
  return (
    <div className='hover:-translate-y-2 transition-all px-6 py-6 rounded-md shadow-lg flex flex-col gap-2 justify-center items-center'>
      {/* Image */}
      <img className='object-cover w-48 h-56 rounded-md' src={image} alt='img-products' />
      {/*Rating*/}
      <div className='text-yellow-500 flex flex-row gap-2'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <CiStar />
      </div>
      {/* Name */}
      <h3 className='text-pink-main font-roboto font-medium'>{name}</h3>
      {/* Price */}
      <p className='font-outfit text-blue-darker font-semibold text-xl'>{price}</p>
      <div className='flex flex-col gap-2'>
        <button className='bg-[#6548DC] px-12 py-2 text-sm text-white font-manrope font-bold rounded-md'>
          Add to cart
        </button>
        <button className='bg-[#08D15F] px-12 py-2 text-sm text-white font-manrope font-bold rounded-md'>
          View detail
        </button>
      </div>
    </div>
  )
}


const FeatureProducts = () => {
  return (
    <div className='relative py-4'>
      {/* Title */}
      <div className='flex flex-col items-center justify-center font-outfit font-semibold text-lg tracking-wide'>
        <h2 className='text-blue-darker'>Feature Products</h2>
        <span className='w-32 h-[2.5px] bg-blue-darker'>
        </span>
      </div>
      {/* Product List */}
      <div className='flex flex-row gap-8 justify-center items-center mt-8'>
        <ProcductCard name="Nike Air Max 270" price="$231" rating="4.5" image={shoes} />
        <ProcductCard name="Ikea Ektorp Sofa" price="$205" rating="4" image={sofa} />
        <ProcductCard name="Conference Room Table" price="$212" rating="4.5" image={table} />
        <ProcductCard name="TEMPUR-Cloud Pillow" price="$50" rating="5" image={pillow} />
      </div>
      <div>
        <button className='absolute top-1/2 right-8 bg-[#6548DC] text-white w-6 flex justify-center text-3xl h-10 items-center'>
          <MdOutlineNavigateNext />
        </button>
        <button className='absolute top-1/2 left-8 bg-[#6548DC] text-white w-6 flex justify-center text-3xl h-10 items-center'>
          <IoIosArrowBack />
        </button>
      </div>
      <div className='absolute mt-8 left-[45%]'>
        {
          [1, 2, 3, 4].map((index) => (
            <span
              key={index}
              className={`absolute transform cursor-pointer -translate-x-1/2 w-6 rounded-md h-[3px] bg-pink-main ${index === 1 ? "" : "opacity-45"}`}
              style={{ left: `${index * 30}px` }}  // Adjust top base`d on index
            ></span>
          ))
        }
      </div>

    </div>
  )
}

export default FeatureProducts
