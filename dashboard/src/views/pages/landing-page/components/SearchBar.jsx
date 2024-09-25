import React, { useState } from 'react'
import { RiMenu2Line } from "react-icons/ri";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const CategoryTag = (() => {
  return (
    <div className='flex flex-row transition-all items-center h-10 cursor-pointer px-6 py-2 gap-2 text-sm
       bg-white transition-colors rounded-full w-fit font-outfit font-medium 
       text-blue-darker hover:border-[3px] border-violet-dark'>
      <RiMenu2Line />
      <span>Phone</span>
    </div>
  )
})

const SearchBar = () => {
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState();
  const [categoryShow, setCategoryShow] = useState(false);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  }

  const handleSearch = () => {
    setTimeout(() => {
      navigate('/products');
    }, 300)
  }

  return (
    <div className='flex flex-col bg-[#EBECFC] mt-4 w-full py-4 gap-4'>
      <div className=' items-center gap-8 font-outfit
     text-blue-darker font-medium flex flex-row px-8 justify-center'>
        {/* All Category */}
        <div className='flex flex-row items-center cursor-pointer px-6 py-2 gap-2 text-sm
       bg-white hover:bg-violet-medium transition-colors rounded-full'
          onClick={() => setCategoryShow(!categoryShow)}>
          <span className={`${categoryShow ? '-rotate-90' : ''} transition-transform`}>
            <RiMenu2Line />
          </span>
          <span>All Category</span>
        </div>
        {/* Search Bar */}
        <div className="flex flex-row justify-center relative w-4/5 items-center">
          <input
            className='px-4 h-9 rounded-full w-full outline-none text-sm 
        placeholder:text-blue-darker placeholder:opacity-80'
            type="text"
            placeholder='What are you looking for?'
            onChange={(e) => handleSearchTextChange(e)} />
          <button
            className='bg-violet-medium text-white text-[1.5rem] absolute 
            right-0 cursor-pointer rounded-e-full h-9 items-center transition-colors 
            flex w-12 border-none justify-center hover:bg-violet-dark'
            onClick={handleSearch}>
            <IoSearch />
          </button>
        </div>
      </div>
      {/* Category List */}
      <div className={`px-[5.4rem] transition-[max-height] ease-in-out grid grid-cols-10 overflow-hidden gap-4 ${categoryShow ? 'max-h-96' : 'hidden'} `}>
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(() => (
            <CategoryTag />
          ))
        }
      </div>
    </div>
  )
}

export default SearchBar
