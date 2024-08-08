import React from 'react'
import sellerAvatar from './../../assets/avt_admin.jpg'
import { BsShop } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaCamera } from "react-icons/fa";
import { FaAddressBook } from "react-icons/fa";


const InputField = ({ inputName }) => {
  return (
    <div className='flex flex-col gap-2 text-sm'>
      <label className='text-gray-light font-semibold'>
        {inputName}
      </label>
      <input
        className='h-9 text-gray-medium border-2 border-gray-medium outline-none w-80 px-2 rounded-md'
        type='text' />
    </div>
  )
}

const Profile = () => {
  return (
    <div className='flex w-full px-24 pt-16 h-[700px] '>
      <div className='bg-white h-[560px] rounded-[15px] flex-row flex'>
        {/* Profile */}
        <div className='pl-8 pr-20 pt-8 border-r-2 h-full border-gray-light flex flex-col items-center'>
          {/* Avatar */}
          <div className='relative'>
            <img src={sellerAvatar} alt='seller-avt' className=' w-28 h-28 rounded-full object-cover drop-shadow-around' />
            <div className='absolute top-0 bg-black opacity-50 w-full h-full rounded-full flex justify-center items-center'>
              <FaCamera style={{color: "white"}}/>
            </div>
          </div>
          {/* User Profile */}
          <div className='flex flex-col items-center'>
            {/* User name and status */}
            <div className='flex flex-row gap-4  items-center relative'>
              <span className='font-manrope text-[1.25rem] text-[#263377] font-bold'>
                Robert Patinson
              </span>
              <span className='font-poppins absolute right-[-80px] bg-white border-2 border-[#0DA06A] text-[0.75rem] rounded-[5px] px-4 py-[2px] text-[#0DA06A]'>
                Active
              </span>
            </div>
            {/* User Shop */}
            <div className='flex flex-row gap-2 items-center font-manrope font-bold text-md'>
              <BsShop style={{ color: "#FB2E86" }} />
              <span className='text-[#FB2E86]'>
                EasyShop
              </span>
            </div>
            {/* User Email */}
            <div className='flex flex-row text-gray-light items-center gap-1 text-[12px] font-normal'>
              <IoMdMail />
              <span>
                dummymail23@gmail.com
              </span>
            </div>
            {/* User Address */}
            <div className='flex flex-row text-gray-light items-center gap-1 text-[12px] font-normal'>
              <FaAddressBook />
              <span>
                188 Bach Dang, Binh Thanh, TP Ho Chi Minh
              </span>
            </div>
            {/* Change Profile */}
            <div className='flex flex-col gap-3 mt-4 justify-center items-center'>
              <InputField inputName="Username" />
              <InputField inputName="Shop name" />
              <InputField inputName="Address" />
              <div className='flex justify-center items-center mt-4'>
                <button className='bg-blue-medium text-white px-4 py-2 rounded-md font-poppins font-semibold text-sm'>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Password Change */}
        <div className='px-8 py-4 flex flex-col gap-2 font-inter'>
          <p className='text-md text-blue-dark font-bold'>Change Password</p>
          <InputField inputName="Current Password" />
          <InputField inputName="New Password" />
          <div className='flex justify-center items-center mt-4'>
            <button className='bg-blue-medium text-white px-4 py-2 rounded-md font-poppins font-semibold text-sm'>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
