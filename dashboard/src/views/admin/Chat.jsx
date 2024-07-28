import React from 'react'
import adminAvatar from './../../assets/avt_admin.jpg'
import userAvatar from './../../assets/avt_user.png'
import { IoIosMore } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

const ChatBox = () => {
  return (
    <div className='flex flex-row items-center w-full border-2 border-blue-medium px-2 py-2 rounded-md justify-between'>
      <div className='flex flex-row items-center gap-2 relative'>
        <img src={userAvatar} alt='avt-user' className='w-10 h-10 object-cover rounded-full' />
        <span className='absolute h-[8px] w-[8px] bg-green-500 rounded-full bottom-[2px] left-[30px]'></span>
        <div className='flex flex-col'>
          <span className='text-blue-dark font-medium text-lg leading-none'>Alexa</span>
          <span className='text-sm font-medium text-[#748EA1]'>I cant access</span>
        </div>
      </div>
      <div className='flex flex-row gap-2  items-center'>
        <div className='w-4 flex items-center justify-center h-4 rounded-full bg-blue-light text-white'>
          <span className='text-[10px] font-bold'>
            1
          </span>
        </div>
        <span className='text-[0.75rem] font-medium'>8:00 AM</span>
      </div>
    </div>
  )
}

const Chat = () => {
  return (
    <div className=' w-full px-12 h-[700px] py-10'>
      <div className=' w-full bg-white flex flex-row h-full rounded-[10px]'>
        {/* Left Side */}
        <div className=' w-1/4 flex flex-col py-4 items-center px-4 gap-4 border-r-2 border-gray-border'>
          {/* Admin Avatar and Info */}
          <div className='flex flex-row justify-between  w-full items-center'>
            <div className='flex flex-row items-center gap-2'>
              <img className='rounded-full w-10 h-10 object-cover' src={adminAvatar} alt='avt-admin' />
              <span className='font-inter font-medium text-gray-medium'>Vo Duc Huy</span>
            </div>
            <span>
              <IoIosMore style={{ color: "#526581", fontSize: "1.75rem" }} />
            </span>
          </div>
          {/* Search Bar */}
          <div className='flex flex-row w-full gap-2 items-center'>
            <input type='text' placeholder='Search' className='bg-[#D2E2FA] text-[#92A9CB] placeholder:text-[#92A9CB] w-[90%] outline-none px-2 py-2 rounded-md' />
            <IoSearch className='cursor-pointer' style={{ fontSize: "1.55rem", color: "#ADADAD" }} />
          </div>
          {/* User List */}
          <div className='flex flex-col w-full gap-2'>
            <ChatBox />
            <ChatBox />
            <ChatBox />
            <ChatBox />
            <ChatBox />
            <ChatBox />
          </div>
        </div>
        {/* Right Side */}
        <div className=' w-3/4 flex flex-col  '>
          {/* Header */}
          <div className='w-full flex flex-row px-4 pt-4 pb-2 justify-between items-center border-b-2 border-gray-border'>
            {/* Avatar and user info */}
            <div className='flex flex-row gap-2'>
              <img src={userAvatar} alt='avt-user' className='w-12 h-12 rounded-full'/>
              <div className='flex flex-col justify-center'>
                <span className='font-medium text-blue-dark text-lg leading-none'>Alexa</span>
                <span className='font-medium text-[#748EA1] text-sm'>Customer</span>
              </div>
            </div>
            {/* Icon */}
            <div>
              <IoIosInformationCircle style={{fontSize: "1.55rem", color: '#1E6EE5'}}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chat
