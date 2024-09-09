import React, { useState } from 'react'
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Nav from './../landing-page/components/Nav'
import Header from '../landing-page/components/Header'
import order from './../../../assets/order.png'

const StatusBox = ({ status }) => {
  return (
    <div className={`text-sm border-[1px] font-normal  px-6 py-2 w-fit rounded-full ${status.toUpperCase() === "PENDING" ? "bg-[#FFF5EB] text-[#FB7E15] border-[#FB7E15]" : status.toUpperCase() === "COMPLETED" ? "bg-[#F0FFFA] text-[#0DA06A] border-[#0DA06A]" : "bg-[#FFF5F5] text-[#F34A7C] border-[#F34A7C]"}`}>
      {status}
    </div>
  )
}

const CustomerOrders = () => {
  const [row, setRow] = useState(5);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  const handleRowChange = (e) => {
    setRow(e.target.value);
  }

  return (
    <div>
      <Header/>
      <Nav/>
      {/* Title */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Review & Pay</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Category -&gt; Product Name</p>
        <img className='absolute right-[34%] opacity-70 top-0 w-32' src={order} alt='img-box' />
      </div>
      {/* Order List */}
      <div className='h-full font-poppins flex flex-col gap-6 transition-all'>
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
                  <th className='flex-1 text-left'>SHOP</th>
                  <th className='flex-1 text-left'>DATE</th>
                  <th className='flex-1 text-left'>PRICE</th>
                  <th className='flex-1 text-left'>STATUS</th>
                  <th className='flex-1 text-left'>DETAIL</th>
                </tr>
              </thead>
              <tbody className='w-full'>
                {
                  data.slice(0, row).map((d, i) => <tr key={i} className='border-b-2 flex gap-2 justify-between items-center w-full py-3 cursor-pointer hover:bg-gray-200'>
                    <td className='flex-1 text-left'>#27623</td>
                    <td className='flex-1 text-left'>Shopaa</td>
                    <td className='flex-1 text-left'>23-10-2024</td>
                    <td className='flex-1 text-left'>$125.70</td>
                    <td className='flex-1 text-left'><StatusBox status="Completed" /></td>
                    <td className='flex-1 text-left hover:underline text-blue-medium'>
                      <Link to="/customer-orders/2">
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
    </div>

  )
}

export default CustomerOrders
