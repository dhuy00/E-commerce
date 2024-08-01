import React, { useEffect, useState } from 'react';
import { RiMenu2Line } from "react-icons/ri";
import { FaListUl } from "react-icons/fa6";
import { FaShopware } from "react-icons/fa";
import { ImExit } from "react-icons/im";
import { getNav } from '../navigation';
import { Link, useLocation } from 'react-router-dom'

const Sidebar = ({showSidebar, setShowSidebar}) => {
  const {pathname} = useLocation();
  const [allNav, setAllNav] = useState([]);

  useEffect(() => {
    const navs = getNav('seller');
    setAllNav(navs);

  }, [])


  const navStyle = 'items-center flex flex-row gap-2 font-medium font-inter px-2 h-10 hover:cursor-pointer hover:text-white rounded-lg hover:bg-[#007AFF] duration-[60ms] transition-all'
  return (
    <div className={`fixed h-screen border-solid border-r-[2px] drop-shadow-sm border-[#d7dde6] w-56 ${!showSidebar ? 'w-[67px]' : ''} top-0 flex flex-col font-poppins text-gray-medium px-4 gap-4 transition-all`}>
      <div className='flex flex-row justify-between items-center mt-5 font-semibold text-lg mb-4'>
        <div className={`flex items-center gap-2 flex-row ${!showSidebar ? 'hidden' : ''} `}>
          <span>
            <FaShopware color='#263377' />
          </span>
          <span className='text-[#263377]'>ShopEase</span>
        </div>
        <div className={`text-[#263377] text-xl ${!showSidebar ? 'ml-1' : ''} font-bold cursor-pointer`} onClick={() => {setShowSidebar(!showSidebar)}}>
        <FaListUl />
        </div>
      </div>
      <ul className='flex flex-col gap-4'>
        {
          allNav.map((nav, i) =>
            <li key={i} className={`${pathname === nav.path ? 'bg-[#007AFF] text-white rounded-lg transition duration-500' : 'duration-500 transition'}`}>
              <Link to={nav.path} className={navStyle} >
                <span>{nav.icon}</span>
                <span className={`${!showSidebar ? 'hidden' : ''}`}>{nav.title}</span>
              </Link>
            </li>
          )
        }
      </ul>
      <div className='absolute bottom-0 left-0 bg-[#f2f4f6] w-full h-14 justify-between flex flex-row items-center gap-4 font-semibold px-6 hover:cursor-pointer hover:bg-gray-300 duration-[120ms] transition-all'>
        <span className={`text-[#09244B] ${!showSidebar ? 'hidden' : ''}`}>Duc Huy</span>
        <span className=''><ImExit /></span>
      </div>
    </div>
  )
}

export default Sidebar
