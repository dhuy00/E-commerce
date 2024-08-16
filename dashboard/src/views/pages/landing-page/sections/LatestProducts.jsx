import React from 'react'
import perfume from './../../../../assets/perfume.jpg'
import shampoo from './../../../../assets/shampoo.jpg'
import { RiShoppingCartLine } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const ProductCard = ({ image, name, price, description }) => {
  return (
    <div className='flex flex-row border-2 border-[#EAEAEA] rounded-lg 
    overflow-hidden w-[500px] h-72'>
      {/* Product Image */}
      <img src={image} alt='product-img' className='w-60 object-cover' />
      {/* Product Info */}
      <div className='flex flex-col pl-12 pt-8 pb-4 gap-2'>
        {/* Name */}
        <h3 className='text-[1.35rem] font-semibold text-pink-main'>
          {name}
        </h3>
        {/* Price */}
        <p className='text-lg font-semibold'>
          {price}
        </p>
        {/* List */}
        <ul className='flex flex-col justify-center items-justify gap-2 text-[1rem]'>
          <li className='flex flex-row items-center gap-1'>
            <TiTick style={{ color: "39CB74" }} />
            <span>Long Lasting</span>
          </li>
          <li className='flex flex-row items-center gap-1'>
            <TiTick style={{ color: "39CB74" }} />
            <span>Affordable Price</span>
          </li>
          <li className='flex flex-row items-center gap-1'>
            <TiTick style={{ color: "39CB74" }} />
            <span>Best Perfume</span>
          </li>
        </ul>
        {/* Button */}
        <div>
          <button className='flex flex-row gap-2 justify-center items-center 
          bg-[#DAD4FF] px-8 mt-2 py-2 rounded-full'>
            <RiShoppingCartLine style={{ color: "blue-darker", fontSize: "1.25rem" }} />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

const LatestProducts = () => {
  return (
    <div className='mt-12 mb-8'>
      {/* Title */}
      <div className='flex flex-col items-center justify-center font-outfit font-semibold text-lg tracking-wide'>
        <h2 className='text-blue-darker'>Latest Products</h2>
        <span className='w-24 h-[2.5px] bg-blue-darker'>
        </span>
      </div>
      {/* Products */}
      <div className='flex flex-row gap-8 font-outfit text-blue-darker justify-center items-center
       font-medium mt-8'>
        <ProductCard image={perfume} name="Dior Sauvage" price="$12.00"/>
        <ProductCard image={shampoo} name="Coconut Shampoo" price="$12.00"/>
      </div>
    </div>
  )
}

export default LatestProducts
