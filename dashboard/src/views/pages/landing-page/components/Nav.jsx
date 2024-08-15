import React from 'react'
import logo from './../../../../assets/shop_logo.png'
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";

const Nav = () => {
  return (
    <div className='fixed bg-white z-10 w-full top-[28px] shadow-sm font-manrope flex flex-row items-center py-1 justify-between px-12'>
      {/* Shop Logo */}
      <div>
        <img className='w-32' src={logo} alt='logo-img' />
      </div>
      {/* Link */}
      <div className=''>
        <ul className='flex flex-row gap-24 items-center text-blue-darker font-medium'>
          <li className='text-pink-main'>Home</li>
          <li>Products</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
      </div>
      {/* Button */}
      <div className='flex flex-row items-center gap-4'>
        <button className='text-white font-outfit px-4 rounded-full py-[5px] bg-gradient-to-r from-[#3378FF] to-[#9442FE]'>
          Shop now
        </button>
        <div className='text-lg flex flex-row gap-4'>
          <CiHeart />
          <FaShoppingCart />
        </div>
      </div>
    </div>
  )
}

export default Nav
