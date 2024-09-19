import React from 'react'
import Nav from '../landing-page/components/Nav'
import box from './../../../assets/box.png'
import Footer from '../landing-page/components/Footer'
import { FaStar } from 'react-icons/fa'
import { PiTriangleFill } from "react-icons/pi";
import Header from '../landing-page/components/Header'
import { MdOutlineFilterAltOff } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import chair1 from './../../../assets/chair/1.jpg'

const Rating = ({ ratingScore }) => {
  return (
    <div className='flex flex-row gap-4 text-yellow-500'>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
    </div>
  )
}

const ProductCard = ({ }) => {
  return (
    <div className='w-64 border-2 border-gray-300 rounded-lg cursor-pointer transition-transform hover:-translate-y-2'>
      <img src={chair1} className='object-cover w-64 h-60 rounded-lg' alt='img-product' />
      <div className='px-4 py-4 flex flex-row justify-between items-center'>
        <div>
          {/* Product name */}
          <p className='font-inter font-medium text-sm'>iPhone 12 Promax</p>
          {/* Rating */}
          <div className='flex flex-row gap-2 text-yellow-500 text-sm'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        {/* Price */}
        <div className='font-semibold text-blue-darker font-poppins'>
          $213
        </div>
      </div>
    </div>
  )
}


const Products = () => {
  const currentPage = 2;

  return (
    <div>
      <Header />
      <Nav />
      {/* Title */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Products</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Products -&gt; All Products</p>
        <img className='absolute right-[32%] top-0 w-40' src={box} alt='img-box' />
      </div>
      {/* Main Body */}
      <div className='flex flex-row h-full w-full px-12 py-8 '>
        {/* Left Section */}
        <div className='h-full w-1/5 flex flex-col gap-4 border-r-2 border-gray-200 border-solid'>
          {/* Category */}
          <div>
            <h1 className='font-poppins font-semibold text-violet-700 mb-2'>
              CATEGORY
            </h1>
            <ul className='font-inter gap-4  ml-4 text-gray-600 font-medium flex flex-col'>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Sofa
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Fashion
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Laptop
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Mobile
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Speaker
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Foot Wear
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Sneaker
              </li>
              <li className='hover-item cursor-pointer hover:text-[#8741E2]'>
                <span className='icon'><PiTriangleFill /></span> Home Decoration
              </li>
            </ul>
          </div>
          {/* Price */}
          <div className=''>
            <h1 className='font-poppins font-semibold text-violet-700 mb-2'>
              PRICE
            </h1>
            <div className='flex flex-row items-center gap-2'>
              <input
                type='text'
                className='border-2 border-violet-400 outline-none w-28'
              />
              <span
                className='bg-violet-400 w-3 h-[1px]'>
              </span>
              <input
                type='text'
                className='border-2 border-violet-400 outline-none w-28'
              />
            </div>
            <button className='bg-violet-medium hover:bg-violet-dark w-[15.75rem] mt-2 py-1 font-semibold text-white'>Apply</button>
          </div>
          {/* Rating */}
          <div>
            <h1 className='font-poppins font-semibold text-violet-700 mb-2'>
              RATING
            </h1>
            <div className='flex flex-col gap-4'>

              <Rating />
              <Rating />
              <Rating />
              <Rating />
              <Rating />
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className='h-full w-4/5 px-8 flex flex-col gap-8'>
          {/* Filter And Search */}
          <div className='flex flex-row gap-8'>
            {/* Filter */}
            <div className='flex flex-row justify-center items-center gap-1 font-poppins font-medium'>
              <MdOutlineFilterAltOff />
              <span>Filter</span>
            </div>
            {/* Search Bar */}
            <div className='flex flex-row justify-center'>
              <input
                type='text'
                className='outline-none border-violet-medium border-2 w-64'
              />
              <button className='bg-violet-medium px-2 text-white'>
                <IoMdSearch />
              </button>
            </div>
            {/* Sort By */}
            <select className='ml-auto'>
              <option disabled >Sort by</option>
              <option>Sort by</option>
              <option>Sort by</option>
              <option>Sort by</option>
              <option>Sort by</option>
            </select>
          </div>
          {/* Product List */}
          <div className='grid grid-cols-4 gap-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          {/* Page Number */}
          <div className='flex flex-row justify-end gap-2 font-outfit font-medium'>
              {
                [1, 2, 3, 4, 5, 6].map((value, index) => (
                  <p className={`bg-gray-300 px-2 py-1  cursor-pointer text-sm ${currentPage == value ? "bg-violet-medium" : ""}`}>{value}</p>
                ))
              }
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Products
