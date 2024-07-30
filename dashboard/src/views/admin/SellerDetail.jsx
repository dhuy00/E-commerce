import React from 'react'
import sellerAvatar from './../../assets/avt_admin.jpg'
import { BsShop } from "react-icons/bs";
import { IoMdAdd, IoMdMail } from "react-icons/io";
import { FaBox } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoCloudOffline } from "react-icons/io5";

const ShopData = ({color, icon, number, description}) => {
  return (
    <div className='bg-white gap-8 border-2 flex flex-row justify-center items-center px-4 py-2 rounded-lg' style={{borderColor: color}}> 
      {icon}
      <div className='flex flex-col' style={{color: color}}>
        <span className='text-[2rem] font-poppins'>{number}</span>
        <span className='font-poppins text-[0.5rem]'>{description}</span>
      </div>
    </div>
  )
}

const SellerDetail = () => {
  return (
    <div className='flex w-full h-full px-24 pt-32'>

      <div className='bg-white flex-col h-[500px] gap-12 w-full rounded-[15px] relative flex justify-center'>
        {/* Avatar */}
        <img src={sellerAvatar} alt='seller-avt' className=' absolute left-[41%] top-[-90px] w-52 h-52 rounded-full object-cover drop-shadow-around' />
        {/* User Profile */}
        <div className='flex flex-col mt-12'>
          {/* User name and status */}
          <div className='flex justify-center flex-row gap-4  items-center relative'>
            <span className='font-manrope text-[2rem] text-[#263377] font-bold'>
              Robert Patinson
            </span>
            <span className='font-poppins absolute left-[62%] bg-white border-2 border-[#0DA06A] text-[0.75rem] rounded-[5px] px-4 py-[2px] text-[#0DA06A]'>
              Active
            </span>
          </div>
          {/* User Shop */}
          <div className='flex flex-row gap-4 items-center justify-center font-manrope font-bold text-lg'>
            <BsShop style={{ color: "#FB2E86" }} />
            <span className='text-[#FB2E86]'>
              EasyShop
            </span>
          </div>
          {/* User Email */}
          <div className='flex flex-row text-[#606060] items-center gap-1 justify-center'>
            <IoMdMail />
            <span>
              dummymail23@gmail.com
            </span>
          </div>
        </div>
        {/* User shop info */}
        <div className='flex flex-row gap-4 justify-center items-center'>
          <ShopData color="#A7A3FF" number="31" icon={<FaBox style={{color: "A7A3FF", fontSize: "3rem"}}/>} description="Products"/>
          <ShopData color="#7DB3DB" number="256" icon={<RiBillLine style={{color: "7DB3DB", fontSize: "3rem"}}/>} description="Orders"/>
          <ShopData color="#0DA06A" number="$3245" icon={<FaRegMoneyBillAlt style={{color: "0DA06A", fontSize: "3rem"}}/>} description="Avg revenue"/>
        </div>
        {/* Button */}
        <div className='flex flex-row gap-4 justify-center items-center'>
          <button className='border-2 border-blue-medium text-blue-medium px-8 font-bold py-1 rounded-md'>
            Back
          </button>
          <button className='rounded-md flex flex-row font-bold text-white bg-blue-medium px-4 py-1 items-center gap-2'>
            Deactive
            <span>
              <IoCloudOffline/>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SellerDetail
