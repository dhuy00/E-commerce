import React from 'react'
import { MdEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import vietnamese from './../../../../assets/vietnam.png'
import { MdExpandMore } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className='fixed z-10 top-0 w-screen text-[0.75rem] font-manrope justify-between px-20 text-white gap-4 flex flex-row bg-violet-main py-1 items-center'>
      {/* Mail and Phone*/}
      <div className='flex flex-row items-center gap-2'>
        <div className='flex flex-row font-medium items-center gap-1'>
          <MdEmail style={{ fontSize: '1rem' }} />
          <span>huyv3451@gmail.com</span>
        </div>
        <span className='w-[2px] h-4 bg-white'>
        </span>
        {/* Phone Number */}
        <div>
          (+84) 836 492 167
        </div>
      </div>

      {/* Social Link */}
      <div className='flex flex-row items-center gap-2'>
        <div className='flex flex-row gap-4 text-[0.9rem]'>
          <AiFillInstagram />
          <FaSquareTwitter />
          <FaGithub />
          <FaFacebookSquare />
        </div>
        <span className='w-[2px] h-4 bg-white'>
        </span>
        <div className='flex items-center flex-row gap-1'>
          <img className='w-6 h-4' src={vietnamese} alt='language-vietnamese-img' />
          <MdExpandMore className='text-xl' />
        </div>
        <span className='w-[1px] h-4 bg-white'>
        </span>
        <div className='flex flex-row gap-1 items-center'>
          <FaUserCircle className='text-[15px]' />
          <span className='text-[0.8rem]'>dhuy0</span>
          <MdExpandMore className='text-xl' />
        </div>
      </div>

    </div>
  )
}

export default Header
