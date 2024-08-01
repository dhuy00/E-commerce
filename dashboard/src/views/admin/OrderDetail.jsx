import React from 'react'
import customerAvatar from './../../assets/avt_user.png'

const ProductItem = () => {
  return (
    <div className='border-2 px-2 py-2 rounded-md bg-white justify-between items-center flex flex-row border-gray-border'>
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
          <p  className='font-outfit font-medium text-[14px]'>$25.20</p>
        </div>
      </div>
      {/* Quantity */}
      <p className='font-outfit font-semibold text-sm mr-4'>2</p>
    </div>
  )
}

const OrderDetail = () => {
  return (
    <div className='flex justify-center pt-12'>
      <div className='bg-white flex flex-col px-6 py-4 gap-4 rounded-[20px]'>
        {/* Title */}
        <div className='flex flex-col'>
          <h1 className='font-lg text-blue-dark font-poppins font-medium text-lg'>
            Order Detail
          </h1>
          <span className='bg-blue-dark h-[1.6px] w-24'></span>
        </div>
        {/* Customer Info */}
        <div className='drop-shadow-around-light flex font-outfit flex-col gap-1 text-sm rounded-[10px] bg-white px-4 py-2'>
          {/* Order ID */}
          <p className='font-poppins font-medium text-md text-blue-darker'>#2541</p>
          {/* Name and avatar */}
          <div className='flex flex-row gap-2 items-center my-1'>
            <img src={customerAvatar} alt='avt-customer' className='w-12 h-12 rounded-md' />
            <p className='font-manrope font-semibold text-blue-darker text-xl'>John Snow</p>
          </div>
          {/* Order date */}
          <div>
            <p>Order Date: <span>4th December, 2024</span></p>
          </div>
          {/* Address */}
          <div>
            <p>Address: <span>123 Bach Dang, Binh Thanh, TP Ho Chi Minh</span></p>
          </div>
          {/* Payment status */}
          <div>
            <p>Payment status: <span>Completed</span></p>
          </div>
        </div>
        {/* Product List */}
        <div className='flex flex-col gap-2 drop-shadow-around-light px-4 py-4 rounded-[10px] bg-white'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
        {/* Price calculation */}
        <div className='flex flex-col font-outfit font-medium gap-2 text-sm'>
          {/* Total products */}
          <div className='flex flex-row justify-between'>
            <p>Total products</p>
            <p>$125.80</p>
          </div>
          {/* Discount */}
          <div className='flex flex-row justify-between'>
            <p>Discount</p>
            <p className='text-gray-600'>$25.80</p>
          </div>
          {/* Delivery fee*/}
          <div className='flex flex-row justify-between'>
            <p>Delivery fee</p>
            <p>$2.5</p>
          </div>
          <span className='w-full h-[2px] bg-black'></span>
          {/* Final Price */}
          <div className='flex justify-center'>
            <p>Total: <span className='text-lg'>$112.5</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
