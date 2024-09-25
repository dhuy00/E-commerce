import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import LandingPage from './pages/landing-page/LandingPage';

const Home = () => {
  const navigate = useNavigate();
  const role = useSelector(state => state.auth.role);

  useEffect(() => {
    if (role === "admin") {
      navigate("/admin/dashboard/sellers");
    }
    else if(role === "seller") {
      navigate("/seller/dashboard");
    }
  }, [role])


  return (
    <div>
      <LandingPage/>
    </div>
  )
}

export default Home
