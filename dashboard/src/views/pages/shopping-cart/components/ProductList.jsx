import figure from './../../../../assets/figure.webp'
import productImg from './../../../../assets/product.jpg'
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaGreaterThan } from "react-icons/fa6";
import { FaLessThan } from "react-icons/fa6";
import { BiEditAlt } from "react-icons/bi";
import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';


const ProductList = () => {

  const [row, setRow] = useState(5);
  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div className='mb-4'>
      <div className='py-8 px-16 shadow-around-medium mt-12 mb-4 mx-12 rounded-2xl'>
        <table className='w-full font-medium text-[#526581]'>
          <thead className='w-full'>
            <tr className='flex w-full gap-4'>
              <th className='w-[5%] text-left'>NO</th>
              <th className='w-[20%] text-left'>NAME</th>
              <th className='w-[10%] text-left'>BRAND</th>
              <th className='w-[8%] text-left'>IMAGE</th>
              <th className='w-[5%] text-left'>PRICE</th>
              <th className='w-[15%] text-left'>QUANTITY</th>
              <th className='w-[15%] text-left'>SUBTOTAL</th>
              <th className='w-[5%] text-left'></th>
            </tr>
          </thead>
          <tbody className='w-full flex flex-col'>
            {
              data.slice(0, row).map((d, i) => <tr key={i} className='border-b-2 flex gap-4 items-center w-full py-3 cursor-pointer'>
                <td className='w-[5%] text-left'>#1</td>
                <td className='w-[20%] text-left'>EchoSound Bluetooth Speaker</td>
                <td className='w-[10%] text-left'>Sony</td>
                <td className='w-[8%] text-left'>
                  <img className='w-16 h-12 rounded-md' src={productImg} alt="product-img" />
                </td>
                <td className='w-[5%] text-left'>$32</td>
                <td className='w-[15%] text-left'>Electronic Device</td>
                <td className='w-[15%] text-left'>Speaker</td>
                <td className='w-[5%] text-center'>
                  <input type='checkbox' class='w-[12px] h-[12px] transform scale-150' />
                </td>
              </tr>)
            }
          </tbody>
        </table>
        <div className='text-end mr-4 mt-6 font-poppins font-medium text-md '>
          <p>Total: <span className='text-violet-dark text-xl'>$231</span></p>
        </div>
      </div>
      <div className='justify-end px-16 flex flex-row gap-2'>
        <Link to='/products'>
          <button className='px-4 bg-gray-500 py-[0.4rem] hover:bg-gray-600 transition-colors rounded-md text-white font-inter'>
            Return
          </button>
        </Link>
        <Link to='/order-review'>
          <button className='px-4 bg-blue-medium py-[0.4rem] hover:bg-blue-700 transition-colors rounded-md text-white font-inter'>
            Order Review
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ProductList
