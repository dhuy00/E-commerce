import React, { useState } from 'react'
import { FaChartLine } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const StatusBox = ({ status }) => {
  return (
    <div className={`text-sm border-[1px] font-normal  px-6 py-2 w-fit rounded-full ${status.toUpperCase() === "PENDING" ? "bg-[#FFF5EB] text-[#FB7E15] border-[#FB7E15]" : status.toUpperCase() === "COMPLETED" ? "bg-[#F0FFFA] text-[#0DA06A] border-[#0DA06A]" : "bg-[#FFF5F5] text-[#F34A7C] border-[#F34A7C]"}`}>
      {status}
    </div>
  )
}

const Card = ({ title, value, icon, bgColor, iconColor }) => {
  return (
    <div className='flex flex-row justify-between items-center w-72 shadow-sm h-24 rounded-[20px] bg-white px-6 py-2'>
      <div className='flex flex-col gap-1'>
        <span className='text-xs font-medium text-[#0F4577]'>{title}</span>
        <span className='text-xl font-medium'>{value}</span>
      </div>
      <div className={`${bgColor} px-2 py-2 rounded-[15px]`}>
        <span className={`text-2xl ${iconColor}`}>
          {icon}
        </span>
      </div>
    </div>
  )
}

const Orders = () => {
  const [row, setRow] = useState(5);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleRowChange = (e) => {
    setRow(e.target.value);
  }



  return (
    <div className='h-full font-poppins flex flex-col gap-6 pt-6 transition-all'>
      <div className='flex flex-row gap-4 px-8 pr-16 justify-between'>
        <Card
          title="Total sales"
          value="$45,000"
          icon={<FaChartLine />}
          bgColor="bg-[#C7E5DB]"
          iconColor="text-[#43C88B]"
        />
        <Card
          title="Total products"
          value="32"
          icon={<GrCart />}
          bgColor="bg-[#E5E1FF]"
          iconColor="text-[#9E92EE]"
        />
        <Card
          title="Total orders"
          value="10230"
          icon={<BsBoxSeam />}
          bgColor="bg-[#FFF4D6]"
          iconColor="text-[#DBBE71]"
        />
        <Card
          title="Total pending"
          value="3010"
          icon={<FaRegClock />}
          bgColor="bg-[#FFC5A5]"
          iconColor="text-[#E98047]"
        />
      </div>
      <div className='flex flex-col gap-4 mx-8 px-8 py-8 mr-16 mb-8 bg-white rounded-[20px]'>
        <div className='flex flex-row justify-between items-center border-solid border-b-2 pb-1'>
          <p className='text-lg font-semibold text-[#0F4577]'>Recent Orders</p>
          <div className='text-gray-medium text-sm'>
            <label>Rows per page: </label>
            <select name="rows" id="rows" value={row} onChange={(e) => handleRowChange(e)} className='w-8 outline-none focus:border-[2px] rounded-md focus:border-gray-medium'>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9].map((d, i) =>
                  <option value={i}>{i}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className=' w-full'>
          <table className='w-full font-medium text-[#526581]'>
            <thead className='w-full'>
              <tr className='flex w-full gap-2 justify-between'>
                <th className='flex-1 text-left'>ORDER ID</th>
                <th className='flex-1 text-left'>CUSTOMER</th>
                <th className='flex-1 text-left'>PRICE</th>
                <th className='flex-1 text-left'>STATUS</th>
                <th className='flex-1 text-left'>DETAIL</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {
                data.slice(0, row).map((d, i) => <tr key={i} className='border-b-2 flex gap-2 justify-between items-center w-full py-3 cursor-pointer hover:bg-gray-200'>
                  <td className='flex-1 text-left'>#27623</td>
                  <td className='flex-1 text-left'>Robert Patinson</td>
                  <td className='flex-1 text-left'>$125.70</td>
                  <td className='flex-1 text-left'><StatusBox status="Completed" /></td>
                  <td className='flex-1 text-left hover:underline text-blue-medium'>
                    <Link to="/seller/dashboard/orders/2">
                      <p>
                        View
                      </p>
                    </Link>
                  </td>
                </tr>)
              }
              <tr className='border-b-2 text-sm items-center h-12 flex justify-end'>
                <span>1 - {row} of {data.length}</span>
                <button className='mx-4'>
                  <FaLessThan />
                </button>
                <button>
                  <FaGreaterThan />
                </button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default Orders
