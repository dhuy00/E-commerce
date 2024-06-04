import React, { useState } from 'react'
import illustration from '../../assets/online-shopping.svg'
import hideIcon from '../../assets/hidden.png'
import showIcon from '../../assets/showPasswordIcon.png'
import { useNavigate } from 'react-router-dom'
import { startTransition } from 'react'

const InputField = ({ type, placeholder, label, name, value, handleInputChange }) => {
  const [inputType, setInputType] = useState(type);

  const togglePasswordVisibility = () => {
    setInputType(inputType === "password" ? "text" : "password")
  }

  return (
    <div className='flex flex-col px-8 gap-1'>
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

const Register = () => {
  const navigate = useNavigate();

  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    username: "",
    password: "",
    passwordConfirm: "",
  })

  const handleInputChange = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerInfo);
  }

  const handleLoginNavigate = () => {
    startTransition(() => {
      navigate("/login")
    })
  }
  return (
    <div className='h-full flex flex-row'>
      <div className='w-1/2'>
        <h1 className='font-semibold text-3xl font-poppins mb-8 ml-12 mt-16'>
          Create a new account!
        </h1>
        <img className='w-full' src={illustration} alt='resgister-illu' />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form className='drop-shadow-sm mt-8 w-4/6 border-solid rounded-lg border-[#8D88EA] border-[1px] flex flex-col gap-6 text-base font-poppins font-normal py-8 '>
          <h1 className='font-medium text-3xl px-8'>Sign up</h1>
          <InputField label="Email" placeholder="Enter your email" type="email" name="email" value={registerInfo.email} handleInputChange={handleInputChange}/>
          <InputField label="User name" placeholder="Enter your user name" type="text" name="username" value={registerInfo.username} handleInputChange={handleInputChange}/>
          <InputField label="Password" placeholder="Enter your password" type="password" name="password" value={registerInfo.password} handleInputChange={handleInputChange}/>
          <InputField label="Confirm Password" placeholder="Confirm your password" type="password" name="passwordConfirm" value={registerInfo.passwordConfirm} handleInputChange={handleInputChange}/>
          <button onClick={handleSubmit} className='drop-shadow-dark font-poppins font-semibold text-white text-base bg-violet-dark h-14 rounded-[8px] mx-8 mt-2'>
            Sign up
          </button>
          <p className='items-center flex justify-center font-light text-[#7D7D7D]'>Already have an account?&nbsp; <span onClick={handleLoginNavigate} className='font-bold text-black cursor-pointer'>Login</span> </p>
        </form>
      </div>
    </div>
  )
}

export default Register
