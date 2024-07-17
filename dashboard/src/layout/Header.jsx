import React from 'react'
import { IoSearch } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { FaListUl } from "react-icons/fa6";

const Header = ({showSidebar, setShowSidebar}) => {
  return (
    <div className={` bg-white text-gray-medium z-10 fixed ${!showSidebar ? 'left-[67px]' : 'left-56'} h-16 top-0 right-0 flex flex-row justify-between px-8 items-center transition-all border-solid border-b-[2px] border-[#d7dde6]`}>
      <div className='font-poppins font-semibold text-2xl '>
        Dashboard
      </div>
      <div className='flex flex-row gap-4 font-inter items-center'>
        <div className='relative flex flex-row'>
          <input type="text" className='bg-[#E2EAF5] h-10 w-72 px-4 rounded-full border-none outline-gray-medium' placeholder='Search' />
          <div className='absolute top-3 right-4'>
            <IoSearch />
          </div>
        </div>

        <div className='flex flex-row gap-1 items-center text-lg'>
          <FaUserCircle />
          dhuy
        </div>

        <div onClick={() => {setShowSidebar(!showSidebar)}} className='w-32 flex lg:hidden'>
          <span><FaListUl /></span>
        </div>
      </div>
    </div>
  )
}

export default Header
