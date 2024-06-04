import React, { useState } from 'react'
import illustration from '../../assets/online-shopping.svg'
import hideIcon from '../../assets/hidden.png'
import showIcon from '../../assets/showPasswordIcon.png'
import { useNavigate } from 'react-router-dom'
import { startTransition } from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const InputField = ({ type, placeholder, label, name, value, handleInputChange }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  return (
    <div className='flex flex-col gap-1'>
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

const Login = () => {
  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    username: "",
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
    console.log(loginInfo);
  }

  const handleRegisterNavigate = () => {
    startTransition(() => {
      navigate("/register")
    })
  }
  return (
    <div className='h-full flex flex-row'>
      <div className='w-1/2'>
        <h1 className='font-semibold text-3xl font-poppins mb-8 ml-12 mt-16'>
          Welcome back!
        </h1>
        <img className='w-full' src={illustration} alt='resgister-illu' />
      </div>
      <div className=" w-1/2 flex justify-center items-center">
        <form className='drop-shadow-sm mt-8 w-4/6 border-solid rounded-lg border-[#8D88EA] border-[1px] flex flex-col gap-6 text-base font-poppins font-normal py-8 px-8'>
          <h1 className='font-medium text-3xl'>Sign in</h1>
          <InputField label="User name" placeholder="Enter your user name" type="text" name="username" value={loginInfo.username} handleInputChange={handleInputChange}/>
          <InputField label="Password" placeholder="Enter your password" type="password" name="password" value={loginInfo.password} handleInputChange={handleInputChange} />
          <p className='text-sm text-[#4D4D4D] flex justify-end'>Forgot Password?</p>
          <button onClick={handleSubmit} className='drop-shadow-dark font-poppins font-semibold text-white text-base bg-violet-dark h-14 rounded-[8px] mt-2'>
            Login
          </button>
          <p className='items-center flex justify-center font-light text-[#7D7D7D]'>Don't have an account?&nbsp; <span onClick={handleRegisterNavigate} className='font-bold text-black cursor-pointer'>Register</span> </p>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <span className='bg-gray-300 h-[1.6px]  w-1/2'></span>
            <span className='font-semibold text-gray-500'>OR</span>
          </div>
          <div className='flex flex-row gap-4 justify-center'>
            <button className='bg-[#FAFAFA] border-solid border-[#EEEEEE] border-2 h-14 w-52 rounded-full flex flex-row gap-2 justify-center items-center'>
              <FontAwesomeIcon icon={faGoogle} className='text-lg'/>
              Login with Google
            </button>
            <button className='bg-[#FAFAFA] border-solid border-[#EEEEEE] border-2 h-14 w-52 rounded-full flex flex-row gap-2 justify-center items-center'>
              <FontAwesomeIcon icon={faGithub} className='text-lg'/>
              Login with Github
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
