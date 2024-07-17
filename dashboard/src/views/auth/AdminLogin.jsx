import React, { useEffect } from 'react';
import { useState } from 'react';
import hideIcon from '../../assets/hidden.png';
import showIcon from '../../assets/showPasswordIcon.png';
import adminBg from '../../assets/admin_bg.png';
import toast from 'react-hot-toast';
import { admin_login, clearMessage } from '../../store/Reducers/authReducer';
import {useDispatch, useSelector} from 'react-redux';
import {BeatLoader} from 'react-spinners'
import { useNavigate } from 'react-router-dom';

const InputField = ({ type, placeholder, label, name, value, handleInputChange }) => {

  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  return (
    <div className='flex flex-col gap-1' >
      <label>{label}</label>
      <div className='relative flex flex-col'>
        <input
          placeholder={placeholder}
          className='h-12 w-full rounded-[8px] pl-6 font-medium text-sm text-violet-dark placeholder:text-violet-medium placeholder:font-normal bg-violet-light  outline-none focus:border-violet-dark focus:border-2 focus:border-solid'
          type={inputType}
          name={name}
          value={value}
          onChange={(e) => handleInputChange(e)} />
        <img className={`absolute top-3 right-3 w-6 ${inputType === "password" ? "" : "hidden"}`}
          src={hideIcon}
          alt='hide_img'
          onClick={togglePasswordVisibility} />
        <img className={`absolute top-3 right-3 w-6 ${inputType === "text" && type === "password" ? "" : "hidden"}`}
          src={showIcon}
          alt='show_img'
          onClick={togglePasswordVisibility} />
      </div>

    </div>
  )
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {loader, errorMessage, successMessage} = useSelector(state=>state.auth)

  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  })

  const handleInputChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(admin_login(loginInfo));
    // console.log(loginInfo);
  }

  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  useEffect(() => {
    if(errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }

    if(successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      navigate('/');
    }
  }, [errorMessage, successMessage])



  return (
    <div className='flex justify-center items-center h-screen bg-cover' style={{ backgroundImage: `url(${adminBg})` }}>
      <form onSubmit={handleSubmit} className='backdrop-blur-lg mt-24 shadow-xl border-solid rounded-[8px] border-[1px] border-[#8D88EA] h-4/6 w-[430px] top-1/3 flex flex-col gap-4 font-poppins px-6 pt-16'>
        <h1 className='font-medium text-3xl'>Welcome back!</h1>
        <InputField type="text" placeholder="Enter your username" label="Email" name="email" value={loginInfo.email} handleInputChange={handleInputChange}/>
        <InputField type="password" placeholder="Enter your password" label="Password" name="password" value={loginInfo.password} handleInputChange={handleInputChange}/>
        <p className='flex justify-end text-sm text-[#4D4D4D]'>Forgot Password?</p>
        <button disabled={loader ? true : false} className='tracking-widest bg-violet-dark h-14 rounded-[8px] text-white font-semibold drop-shadow-dark'>
          
          { loader ? <BeatLoader color="#FFFFFF" size="10px" cssOverride={loaderStyle}/> : 'Login' }
        </button>
      </form>
    </div>
  )
}

export default AdminLogin
