import React from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='mt-4 bg-[#EBECFC] w-full py-4 items-center gap-8 font-outfit
     text-blue-darker font-medium flex flex-row px-8 justify-center'>
      {/* All Category */}
      <div className='flex flex-row items-center px-6 py-2 gap-2 text-sm bg-white rounded-full'>
        <RiMenu2Line/> 
        <span>All Category</span>
      </div>
      {/* Search Bar */}
      <div className="flex flex-row justify-center relative w-4/5 items-center">
        <input 
        className='px-4 h-9 rounded-full w-full outline-none text-sm 
        placeholder:text-blue-darker placeholder:opacity-80' 
        type="text" 
        placeholder='What are you looking for?'/>
        <div className='bg-violet-medium text-white text-[1.5rem] absolute right-0 
        rounded-e-full h-9 items-center flex w-12 border-none justify-center'>
          <IoSearch/>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
