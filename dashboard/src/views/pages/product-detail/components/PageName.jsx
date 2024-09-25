import React from 'react'
import box from './../../../../assets/box.png'

const PageName = ({name}) => {
  return (
    <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
      <h1 className='text-[1.85rem] font-mplus font-bold'>{name}</h1>
      <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Category -&gt; Product Name</p>
      <img className='absolute right-[32%] top-0 w-40' src={box} alt='img-box' />
    </div>
  )
}

export default PageName
