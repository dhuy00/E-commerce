import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  const listItemStyle = 'hover:text-pink-main cursor-pointer transition-all'
  return (
    <div className='bg-[#EEEFFB] w-full h-80 flex flex-col justify-between pt-10 pb-4'>
      <div className=' flex flex-row justify-between 
    items-center px-24 font-inter'>
        {/* Shop Info */}
        <div className='flex flex-col gap-3  text-sm text-gray-500'>
          <h1 className='font-mplus text-2xl font-bold text-gray-900'>EasyShop</h1>
          <p>Address: 203/40B Truong Chinh, P.24. Thu Duc, TP HCM</p>
          <p>Phone: (+84) 813 584 5180</p>
          <p>Email: huyv3451@gmail.com</p>
        </div>
        {/* Categories and Contact */}
        <div className='flex flex-row gap-12'>
          {/* Categories */}
          <div className='text-sm flex flex-col gap-3 text-gray-500 '>
            <p className='font-outfit font-semibold text-lg text-black'>
              Categories
            </p>
            <ul className='flex flex-col gap-2'>
              <Link to='/products'>
                <li className={listItemStyle}>Laptop & Computer</li>
              </Link>
              <Link to='/products'>
                <li className={listItemStyle}>Camera and Photography</li>
              </Link>
              <Link to='/products'>
                <li className={listItemStyle}>Smartphones % Tablets</li>
              </Link>
              <Link to='/products'>
                <li className={listItemStyle}>Video Games & Consoles</li>
              </Link>
            </ul>
          </div>
          {/* Contact Info */}
          <div className='text-sm flex flex-col gap-4 text-gray-500 w-80'>
            <p className='font-outfit font-semibold text-lg text-black'>
              Join Us
            </p>
            <p>Get email updates about our latest products and special offers</p>
            <div className='flex flex-row'>
              <input className=' px-4 rounded-sm py-2 bg-white placeholder:text-[12px]' placeholder='Enter your email' />
              <button className='bg-pink-main hover:bg-[#E8307F] transition-all text-white font-semibold px-2 font-outfit'>SUBSCRIBE</button>
            </div>
            <div className='flex flex-row gap-3 text-2xl cursor-pointer'>
              <FaTwitterSquare className='hover:text-blue-500 transition-all' />
              <FaFacebookSquare className='hover:text-blue-600 transition-all' />
              <FaGithub className='hover:text-black transition-all' />
              <FaSquareInstagram className='hover:text-pink-600 transition-all' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2 px-8 items-center'>
        <span className='w-full h-[1px] bg-gray-300'>
        </span>
        <p className='text-sm font-normal font-outfit text-gray-400'>Copyright @2024 Allrights reserved</p>
      </div>
    </div>
  )
}

export default Footer
