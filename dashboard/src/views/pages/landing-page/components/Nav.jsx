import React, { useEffect, useState } from 'react'
import logo from './../../../../assets/shop_logo.png'
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { useLocation} from 'react-router-dom';
import { getNav } from '../../../../navigation';
import { Link } from 'react-router-dom';

const Nav = () => {
  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);


  useEffect(() => {
    const navs = getNav('customer');
    setAllNav(navs);
  }, []);


  return (
    <div className='fixed bg-white z-10 w-full top-[28px] shadow-sm font-manrope flex flex-row items-center py-1 justify-between px-12'>
      {/* Shop Logo */}
      <div>
        <Link to='/'>
          <img className='w-32' src={logo} alt='logo-img' />
        </Link>
      </div>
      {/* Link */}
      <div className=''>
        <ul className='flex flex-row gap-24 items-center cursor-pointer text-blue-darker font-medium'>
          {
            allNav.map((nav, i) => (
              <Link to={nav.path}>
                <li className={`transition-colors ${pathname === nav.path ? "text-pink-main" : "hover:text-pink-main"} `}>
                  <span>{nav.title}</span>
                </li>
              </Link>
            ))
          }
        </ul>
      </div>
      {/* Button */}
      <div className='flex flex-row items-center gap-4'>
        <Link to='/products'>
          <button className='text-white font-outfit px-4 rounded-full py-[5px] bg-gradient-to-r from-[#3378FF] to-[#9442FE] hover:from-[#295ad6] hover:to-[#7e38d1] transition-transform transform hover:scale-105'>
            Shop now
          </button>
        </Link>
        <div className='text-lg flex flex-row gap-4'>
          <FaHeart style={{ fontSize: "1.15rem" }} />
          <Link to='/shopping-cart/2'>
            <FaShoppingCart />
          </Link>
          <div className='w-[14px] h-[14px] justify-center items-center top-[12px] 
          right-[75px] flex rounded-full bg-violet-500 absolute text-white text-[10px]'>
            <span className=''>
              2
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
