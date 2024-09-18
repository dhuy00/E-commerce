import React from 'react'
import Nav from './../landing-page/components/Nav'
import Header from './../landing-page/components/Header'
import order from './../../../assets/order.png'

const CustomerOrderDetail = () => {
  return (
    <div>
      <Header />
      <Nav />
      {/* Title */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Order Detail</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Category -&gt; Product Name</p>
        <img className='absolute right-[34%] opacity-70 top-0 w-32' src={order} alt='img-box' />
      </div>
    </div>
  )
}

export default CustomerOrderDetail
