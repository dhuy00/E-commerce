import React from 'react'
import Nav from './../landing-page/components/Nav'
import Header from '../landing-page/components/Header'
import order from './../../../assets/order.png'
import customerAvatar from './../../../assets/avt_user.png'

const ProductItem = () => {
  return (
    <div className='border-2 px-2 py-2 rounded-md bg-[#ECEBEB] justify-between items-center flex flex-row border-gray-border'>
      <div className='flex flex-row gap-2 items-center'>
        {/* Image */}
        <img src={customerAvatar} alt='customer-avt' className='w-[50px] h-[50px] rounded-md' />
        {/* Product Info */}
        <div className='flex flex-col gap-[3px] leading-none'>
          {/* Product Name */}
          <p className='font-outfit font-medium text-sm'>Long T-shirt</p>
          {/* Shop name */}
          <p className='font-poppins text-[10px] font-light text-gray-400'>EasyShop</p>
          {/* Price */}
          <p className='font-outfit font-medium text-[14px]'>$25.20</p>
        </div>
      </div>
      {/* Quantity */}
      <p className='font-outfit font-semibold text-sm mr-4'>2</p>
    </div>
  )
}

const InputField = ({ inputName }) => {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <label className='text-gray-light font-semibold'>
        {inputName}
      </label>
      <input
        className='h-9 text-gray-medium border-2 border-gray-medium outline-none w-80 px-2 rounded-md'
        type='text' />
    </div>
  )
}

const OrderReview = () => {
  return (
    <div className>
      <Header />
      <Nav />
      {/* Title */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Review & Pay</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Category -&gt; Product Name</p>
        <img className='absolute right-[34%] opacity-70 top-0 w-32' src={order} alt='img-box' />
      </div>
      {/* Main */}
      <div className='flex flex-row gap-4 px-8 py-8'>
        {/* Shipping Detail */}
        <div className='w-1/2 bg-[#F2F4F6] rounded-lg px-8 py-6 font-inter flex flex-col gap-4'>
          {/* Form */}
          <p className='font-medium'>Please fill in your shipping infomation</p>
          <form action="" className='flex flex-col gap-2'>
            <div className='flex flex-row gap-4'>
              <InputField inputName="First name" />
              <InputField inputName="Last name" />
            </div>
            <div className='flex flex-row gap-4'>
              <InputField inputName="Address" />
              <InputField inputName="Phone number" />
            </div>
          </form>
          {/* Map */}
          <div className='w-full h-full rounded-sm bg-blue-300'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15715.552601339801!2d106.614994!3d10.026087949999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1725872614956!5m2!1svi!2s" 
            width="660" 
            height="450" 
            style={{border: "0"}} 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">

            </iframe>
          </div>
        </div>
        {/* Order Summary */}
        <div className='w-1/2 bg-[#F2F4F6] rounded-lg px-8 py-4 flex flex-col gap-4'>
          {/* Title */}
          <p className='font-inter font-medium'>Order Summary</p>
          {/* Product List */}
          <div className='bg-white flex flex-col gap-4 px-3 py-3 rounded-md h-3/5'>
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
          {/* Discount */}
          <div className='flex flex-row gap-3 items-center'>
            <p className='text-sm font-inter font-medium'>Discount code</p>
            <input type='text' className='border-2 border-gray-300 h-8 rounded-md w-1/2' />
            <button className='font-outfit text-white bg-blue-medium font-medium 
            px-4 rounded-[3px] py-1 text-sm'>
              Select
            </button>
          </div>
          {/* Price Calculation */}
          <div className='flex flex-col gap-2'>
            {/* Sub total */}
            <div className='flex flex-row justify-between font-medium'>
              <p className='text-gray-600'>Sub total</p>
              <p className='text-[#184363] '>$312</p>
            </div>
            {/* Shipping fee */}
            <div className='flex flex-row justify-between font-medium'>
              <p className='text-gray-600'>Shipping fee</p>
              <p className='text-[#184363]'>$312</p>
            </div>
            {/* Discount */}
            <div className='flex flex-row justify-between font-medium'>
              <p className='text-gray-600'>Discount</p>
              <p className='text-[#184363] '>$312</p>
            </div>
            {/* Total */}
            <div className='flex flex-row justify-between font-medium'>
              <p className='text-gray-600 text-lg'>Total</p>
              <p className='text-[#184363] font-bold text-lg' >$312</p>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <div className='flex flex-row justify-end px-8 pb-8 gap-4 font-inter text-[0.95rem]'>
        <button className='bg-[#D9D9D9] text-[#606060] px-4 py-2 rounded-md'>
          Cancel Order
        </button>
        <button className='bg-blue-medium text-white px-4 py-2 rounded-md'>
          Payment
        </button>
      </div>
    </div>
  )
}

export default OrderReview
