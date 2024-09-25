import React from 'react'
import Header from '../landing-page/components/Header'
import Nav from '../landing-page/components/Nav'
import box from './../../../assets/box.png'
import blog from './../../../assets/blogs.jpg'
import frog from './../../../assets/about.jpg'
import { RiCustomerServiceFill } from "react-icons/ri";
import Footer from './../landing-page/components/Footer'

const Card = ({ }) => {
  return (
    <div className='bg-[#B4E2D1] w-[320px] px-8 py-6 rounded-lg'>
      <div className='flex flex-row gap-4 justify-center items-center'>
        <p className='font-medium text-2xl font-outfit'>Customer-Centric</p>
        <RiCustomerServiceFill style={{ fontSize: "1.75rem" }} />
      </div>
      <div className='flex flex-col gap-2 text-justify font-outfit font-normal mt-4'>
        <p>
          Everything we do revolves around our customers. We work hard to ensure you have an
          amazing experience from start to finish.
        </p>
        <p>
          From easy navigation and personalized recommendations to secure checkout and fast delivery,
          we are committed to making your shopping journey smooth and enjoyable
        </p>
        <p>
          Your feedback is invaluable to us, and we continuously improve our platform based on your needs and preferences, because your satisfaction is our top priority.
        </p>
      </div>
    </div>
  )
}

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Nav />
      {/* Page name */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Blogs</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Blogs</p>
        <img className='absolute right-[35%] top-0 w-40' src={box} alt='img-box' />
      </div>
      {/* Banner */}
      <div className='flex flex-col items-center gap-8'>
        {/* Image */}
        <div className='flex justify-center pt-12 relative'>
          <img
            src={blog}
            alt='blog-img'
            className='w-[1450px]'
          />
          {/* Overlay */}
          <div className='absolute bg-black opacity-60 inset-0 mt-12 w-[1450px]'>
          </div>
          {/* Introduction */}
          <div className='absolute text-white left-[5%] top-[40%] leading-tight'>
            {/* Title */}
            <h1 className='font-patua-one text-[3rem] w-[1000px]'>
              "Discover the Marketplace Where Passion Meets Innovation"
            </h1>
            {/* Text */}
            <div className='font-montserrat text-lg w-[850px] leading-tight text-justify mt-2'>
              At [Your E-commerce Store Name], we believe that shopping should be an enjoyable,
              seamless experience—whether you're a customer looking to discover unique products or
              a seller showcasing your amazing creations. We’re not just an online store; we’re a
              vibrant community of passionate people.
            </div>
          </div>
        </div>
        <span className='w-[350px] h-[3px] rounded-sm bg-black'>
        </span>
      </div>
      {/* Who we are */}
      <div className='font-outfit mt-8 flex flex-col gap-2 px-8'>
        <h1 className='flex flex-col text-3xl font-medium'>
          Who we are?
        </h1>
        <div className='flex flex-row gap-8 items-center'>
          <img src={frog} alt='img-frog' className='w-[450px] h-[270px] object-cover' />
          <p className='text-lg text-justify w-[800px] font-normal text-gray-600'>
            Founded by a group of innovators and dreamers, [Your E-commerce Store Name]
            was built with one mission in mind: to bridge the gap between sellers and
            customers through technology. Our platform empowers sellers to reach new markets
            while providing customers with a diverse selection of high-quality products.
            Whether you're here to shop or sell, we’re here to help you thrive.<br /> <br />
            Whether you’re an entrepreneur looking to scale your business, or a savvy shopper in search of the best products available, [Your E-commerce Store Name] is dedicated to fostering a marketplace where everyone can thrive. We believe in the power of connection, innovation, and customer satisfaction, and we work tirelessly to ensure that every transaction is smooth, secure, and rewarding.
          </p>
        </div>
      </div>
      <div className='flex justify-center pt-8'>
        <span className='w-[350px] h-[3px] rounded-sm bg-black'>
        </span>
      </div>
      {/* What we offer? */}
      <div className='flex flex-col gap-4 justify-center items-center mt-8 mb-16'>
        <h1 className='font-outfit text-2xl font-medium'>
          What we offer?
        </h1>
        {/* List */}
        <div className='flex flex-row gap-8'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default AboutUs
