import React from 'react'
import Header from '../landing-page/components/Header'
import Nav from '../landing-page/components/Nav'
import box from './../../../assets/box.png'
import chair1 from './../../../assets/chair/1.jpg'
import chair2 from './../../../assets/chair/2.jpg'
import chair3 from './../../../assets/chair/3.jpg'
import chair4 from './../../../assets/chair/4.jpg'
import { FaStar } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { CiHeart, CiStar } from "react-icons/ci";
import { MdOutlineFileUpload, MdOutlineNavigateNext } from "react-icons/md";
import Footer from '../landing-page/components/Footer'
import { IoIosArrowBack } from "react-icons/io";
import RatingBar from './components/RatingBar'
import Review from './components/Review'
import ProductCard from './components/ProductCard'
import RelatedProductCard from './components/RelatedProductCard'

const ProductDetail = () => {

  const imageStyle = 'w-36 h-36 object-cover';
  const currentPage = 2;

  return (
    <div>
      <Header />
      <Nav />
      {/* Title */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Product Detail</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Category -&gt; Product Name</p>
        <img className='absolute right-[32%] top-0 w-40' src={box} alt='img-box' />
      </div>
      {/* Product Info */}
      <div className='px-16 mt-16 flex flex-row gap-12'>
        {/* Images */}
        <div className='flex flex-row rounded-sm drop-shadow-around-light 
          bg-[#FDFDFD] w-[50rem] px-4 py-4 gap-4'>
          <div className='flex flex-col gap-4'>
            <img className={imageStyle} src={chair2} alt='img-chair-2' />
            <img className={imageStyle} src={chair3} alt='img-chair-3' />
            <img className={imageStyle} src={chair4} alt='img-chair-4' />
          </div>
          <div>
            <img className='w-[38rem] object-cover h-[29rem]' src={chair1} alt='img-chair-1' />
          </div>
        </div>
        {/* Desciption */}
        <div className='flex flex-col w-fit gap-1 font-outfit'>
          {/* Name */}
          <p className='font-medium text-[2rem] text-blue-darker'>Playwood Arm Chair</p>
          {/* Rating */}
          <div className='flex flex-row gap-3 text-yellow-400 items-center'>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <span className='text-blue-darker font-medium'>(23)</span>
          </div>
          {/* Price */}
          <div className='text-pink-main text-2xl font-medium tracking-wide'>
            $1900
          </div>
          {/* describe */}
          <p className='w-[38rem] text-justify text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry
            . Lorem Ipsum has  the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged.
          </p>
          {/* Action */}
          <div className='flex flex-row gap-4 items-center mt-4 mb-12'>
            {/* Quantity */}
            <div className='border-2 border-gray-800 w-28 flex flex-row justify-between 
            rounded-[4px] text-lg font-medium text-blue-darker mr-8'>
              <span className='cursor-pointer hover:bg-blue-100 w-[38px] text-center'>-</span>
              <span className='border-x-2 border-gray-400 w-[38px] text-center'>3</span>
              <span className='cursor-pointer hover:bg-blue-100 w-[38px] text-center'>+</span>
            </div>
            {/* Add to Cart */}
            <button className='border-[2.5px] hover:bg-blue-100 text-blue-darker border-blue-darker rounded-full font-medium px-8 py-1'>
              Add to cart
            </button>
            {/* Add favourite */}
            <div className='text-3xl '>
              <CiHeart />
            </div>
          </div>
          <span className='h-[1.5px] bg-gray-400 w-full'>
          </span>
          {/* Available */}
          <div className='flex flex-col gap-3 mt-2'>
            <p className='font-medium text-[#263377]'>Availability: <span className='ml-4 font-normal 
            text-gray-500'>In stock(5) </span></p>
            <div className='flex flex-row gap-4'>
              <p className='font-medium text-[#263377]'>
                Share on:
              </p>
              <p className='flex flex-row gap-4 text-2xl'>
                <FaSquareInstagram className='text-[#B761FA] cursor-pointer' />
                <FaTwitterSquare className='text-[#24B0FF] cursor-pointer' />
                <FaFacebookSquare className='text-[#335BEA] cursor-pointer' />
                <FaGithub className='text-[#B761FA] cursor-pointer' />
              </p>
            </div>
          </div>
          {/* Button */}
          <div className='flex flex-row gap-4 mt-6'>
            <button className='px-12 py-1 bg-[#6D66FF] font-mulish text-md font-semibold rounded-[5px] 
            text-white'>
              Buy
            </button>
            <button className='bg-violet-light border-2 border-violet-medium 
            text-violet-medium px-4 py-1 rounded-[5px]'>
              Chat with seller
            </button>
          </div>
        </div>
      </div>
      {/* Rating and reviews */}
      <div>
        <div className='font-outfit relative text-blue-darker flex flex-row gap-36 font-medium mt-12 ml-16'>
          <p className='rating-title z-10'>Rating and review</p>
          <p className=''>Description</p>
          <span className='w-screen z-0 left-[-5rem] absolute bottom-[-3.5px] h-[2px] bg-gray-400'></span>
        </div>
        <div className='px-12 py-6 flex flex-row w-full'>
          {/* Left Section */}
          <div className='flex flex-col gap-8 w-1/2'>
            <div className='flex flex-row gap-20'>
              {/* Rating */}
              <p className='font-outfit font-medium'>
                <span className='text-[5rem] text-black'>
                  4,9
                </span>
                <span className='text-gray-500 text-3xl'>
                  /5
                </span>
              </p>
              {/* Star */}
              <div className='flex flex-col gap-1'>
                <RatingBar star="5" ratingScore="2.3" />
                <RatingBar star="4" ratingScore="1.3" />
                <RatingBar star="3" ratingScore="3.5" />
                <RatingBar star="2" ratingScore="1" />
                <RatingBar star="1" ratingScore="0.5" />
              </div>
            </div>
            <div className='pl-56'>
              <p className='font-outfit text-lg text-blue-darker font-medium bg-[#F2F1FF] w-fit px-6 py-1 
              rounded-full border-2 border-violet-main'>
                Review
              </p>
            </div>
            {/* Comment */}
            <div className='flex flex-col gap-8'>
              <Review />
              <Review />
              <Review />
              <Review />
            </div>
            {/* Page Number */}
            <div className='flex flex-row justify-end mr-12 gap-2 font-outfit font-medium'>
              {
                [1, 2, 3, 4, 5, 6].map((value, index) => (
                  <p className={`bg-gray-300 px-2 py-1  cursor-pointer text-sm ${currentPage == value ? "bg-violet-medium" : ""}`}>{value}</p>
                ))
              }
            </div>
            {/* Add Comment */}
            <div className='flex flex-col gap-4 mr-12 font-outfit font-medium text-blue-darker'>
              {/* Title */}
              <p className='text-xl'>Add a comment</p>
              {/* Rating and image upload */}
              <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-row gap-2 text-xl text-yellow-500'>
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                  <CiStar />
                </div>
                <button className='flex flex-row items-center gap-2 border-2 border-blue-darker 
                rounded-full px-4 py-1'>
                  <p>Upload image</p>
                  <span>
                    <MdOutlineFileUpload />
                  </span>
                </button>
              </div>
              {/* Text Input */}
              <textarea placeholder='Your text here...' className='bg-gray-200 px-4 py-2 
              rounded-lg h-36 outline-none'>
              </textarea>
              {/* Submit Button */}
              <div>
                <button className='bg-[#6D66FF] text-white px-6 py-1 rounded-lg'>
                  Submit
                </button>
              </div>
            </div>
          </div>
          {/* Right Section */}
          <div className=' w-1/2 flex flex-row gap-12'>
            {/* Separate Line */}
            <span className='bg-gray-300 w-[2.5px] h-[85%] self-end'>
            </span>
            {/*Top Comment and same shop Products*/}
            <div>
              {/* Top Comment */}
              <div>
                <Review />
              </div>
              {/* same shop products */}
              <div className='flex flex-col items-center py-8'>
                {/* Title */}
                <p className='font-outfit text-lg text-blue-darker font-medium bg-[#F2F1FF] w-fit px-6 py-1 
              rounded-full border-2 border-violet-main'>
                  From ShopEase
                </p>
                {/* Product List */}
                <div className='flex flex-col gap-6 jusitfy-center pt-8'>
                  <ProductCard name="Alarm Clock" rating="4.2" sold="412" price="23" />
                  <ProductCard name="Alarm Clock" rating="4.2" sold="412" price="23" />
                  <ProductCard name="Alarm Clock" rating="4.2" sold="412" price="23" />
                  <ProductCard name="Alarm Clock" rating="4.2" sold="412" price="23" />
                  <ProductCard name="Alarm Clock" rating="4.2" sold="412" price="23" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products */}
      <div className='flex flex-col mb-16 relative'>
        {/* Title */}
        <p className='font-outfit self-center mb-8 text-xl tracking-wide
         text-blue-darker font-semibold'>Related Products</p>
        {/* Product List */}
        <div className='flex flex-row gap-8 justify-center'>
          <RelatedProductCard/>
          <RelatedProductCard/>
          <RelatedProductCard/>
          <RelatedProductCard/>
        </div>
        <div>
        <button className='absolute top-1/2 right-8 bg-[#6548DC] text-white w-6 flex justify-center text-3xl h-10 items-center'>
          <MdOutlineNavigateNext />
        </button>
        <button className='absolute top-1/2 left-8 bg-[#6548DC] text-white w-6 flex justify-center text-3xl h-10 items-center'>
          <IoIosArrowBack />
        </button>
      </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default ProductDetail
