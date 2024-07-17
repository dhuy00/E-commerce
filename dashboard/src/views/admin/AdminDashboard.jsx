import React from 'react'
import { FaChartLine } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { Link } from 'react-router-dom'
import Chart from "react-apexcharts"

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

const AdminDashboard = () => {

  const state = {
    series: [{
      name: 'Sales',
      data: [31, 40, 28, 51, 42, 109, 100]
    }, {
      name: 'Products',
      data: [11, 32, 45, 32, 24, 52, 41]
    },],
    options: {
      chart: {
        height: 400,
        type: 'area',
        dataLabels: {
          enable: false,
        },
        stroke: {
          curve: 'smooth',
        },
      },
      xaxis: {
        type: 'category',
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        labels: {
          style: {
            fontSize: '14px',
            fontWeight: 500,
            colors: '#8693a7',
            fontFamily: "Poppins"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            fontSize: '14px',
            fontWeight: 500,
            colors: '#8693a7',
            fontFamily: "Poppins"
          }
        }
      },
      title: {
        text: "Summary Sales",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: "Poppins",
          colors: '#263377'
        },
      },
      legend: {
        fontSize: "14px",
        fontFamily: "Poppins",
        fontWeight: 500,
        labels: {
          colors: "#526581"
        }
      }
    }
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
      <div className='bg-white ml-8 mr-16 px-8 pt-8 pb-4 rounded-[20px] transition-all'>
        <Chart options={state.options} series={state.series} type='area' height={430} />
      </div>
      <div className='flex flex-col gap-4 mx-8 px-8 py-8 mr-16 mb-8 bg-white rounded-[20px]'>
        <div className='flex flex-row justify-between items-center border-solid border-b-2 pb-1'>
          <p className='text-lg font-semibold text-[#0F4577]'>Recent Orders</p>
          <Link className='text-blue-500 hover:underline'>
            View all
          </Link>
        </div>
        <div className=' w-full'>
          <table className='w-full font-medium text-[#526581]'>
            <thead className='w-full'>
              <tr className='flex justify-between w-full'>
                <th className='flex-1 text-left'>ORDER ID</th>
                <th className='flex-1 text-left'>PRICE</th>
                <th className='flex-1 text-left'>PAYMENT STATUS</th>
                <th className='flex-1 text-left'>ORDER STATUS</th>
                <th className='flex-1 text-left'>ACTIVE</th>
              </tr>
            </thead>
            <tbody className='w-full'>
              {
                [1,2,3,4,5].map((d, i) => <tr key={i} className='flex justify-between w-full py-3 cursor-pointer hover:bg-gray-200 rounded-md'>
                  <td className='flex-1 text-left'>#27623</td>
                  <td className='flex-1 text-left'>$1625</td>
                  <td className='flex-1 text-left'>Pending</td>
                  <td className='flex-1 text-left'>Pending</td>
                  <td className='flex-1 text-left hover:underline'>View</td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>

  )
}

export default AdminDashboard
