import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Sidebar from './Sidebar'

const MainLayout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  
  return (
    <div className=' w-full h-screen'>
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar}/>
      <div className={`bg-[#dfe3e9] ${!showSidebar ? 'ml-[67px]' : 'ml-56 '} mt-16 h-fit transition-all`}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout