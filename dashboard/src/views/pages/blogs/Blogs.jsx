import React from 'react'
import Header from '../landing-page/components/Header'
import Nav from '../landing-page/components/Nav'
import box from './../../../assets/box.png'
import blog from './../../../assets/blogs.jpg'
import Footer from '../landing-page/components/Footer'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'

const BlogCard = ({}) => {
  return (
    <Link to='/blogs/2'>
    <div className='hover:-translate-y-3 transition-all shadow-md rounded-sm 
    cursor-pointer'>
      <img
        src={blog}
        alt='blog-img'
        className='rounded-t-sm w-[300px] h-[200px] object-cover' />
      <p className='font-outfit font-medium text-center w-[300px] py-3 px-2 text-sm'>
        How to Choose the Perfect Product for Your Needs
      </p>
    </div>
    </Link>
  )
}

const Blogs = () => {
  return (
    <div>
      <Header />
      <Nav />
      {/* Page name */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col 
      items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Blogs</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Blogs</p>
        <img className='absolute right-[35%] top-0 w-40' src={box} alt='img-box' />
      </div>
      {/* Image */}
      <div className='flex justify-center pt-12'>
        <img
          src={blog}
          alt='blog-img'
          className='w-[1450px]'
        />
      </div>
      {/* Title */}
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-patua-one text-[2.75rem] w-[1500px] mt-4 text-center'>
          "Discover insights, tips, and trends to enhance your shopping experience."
        </h1>
        <span className='w-[300px] h-[4px] rounded-sm bg-black'>
        </span>
      </div>
      {/* Blogs */}
      <div className='flex flex-col items-center mt-8 mb-16 gap-4'>
        <h1 className='text-blue-darker font-outfit font-medium text-2xl'>
          Latest Blogs
        </h1>
        {/* List */}
        <div className='grid grid-cols-3 gap-8'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs
