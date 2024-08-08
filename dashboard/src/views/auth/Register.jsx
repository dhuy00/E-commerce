import React, { useEffect, useState } from 'react'
import illustration from '../../assets/online-shopping.svg'
import hideIcon from '../../assets/hidden.png'
import showIcon from '../../assets/showPasswordIcon.png'
import { useNavigate } from 'react-router-dom'
import { startTransition } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { loaderStyle } from '../../utils/utils'
import { clearMessage, seller_register } from '../../store/Reducers/authReducer'
import toast from 'react-hot-toast'

const InputField = ({ type, placeholder, label, name, value, handleInputChange }) => {
  return (
    <div className='flex flex-col px-8 gap-1'>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className='h-12 w-full rounded-[8px] px-6 font-medium text-sm text-violet-dark placeholder:text-violet-medium placeholder:font-normal bg-violet-light  outline-none focus:border-violet-dark focus:border-2 focus:border-solid'
        type={type}
        name={name}
        value={value}
        required
        onChange={(e) => handleInputChange(e)} />
    </div>
  )
}

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(state => state.auth)

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

  const passwordMatchCheck = () => {
    return registerInfo.password === registerInfo.passwordConfirm;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkPassword = passwordMatchCheck();
  
    const form = e.target.closest('form');
    if (form.checkValidity()) {
      if(checkPassword) {
         dispatch(seller_register(registerInfo));
      }
      else {
        toast.error("Password does not match!")
      }
    } else {
      // If the form is not valid, this will trigger the browser's default validation UI
      form.reportValidity();
    }
  }
  

  const handleLoginNavigate = () => {
    startTransition(() => {
      navigate("/login")
    })
  }

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }

    if (successMessage) {
      toast.success(successMessage);
      dispatch(clearMessage());
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
  }, [errorMessage, successMessage])

  return (
    <div className='h-full flex flex-row'>
      <div className='w-1/2'>
        <h1 className='font-semibold text-3xl font-poppins mb-8 ml-12 mt-16'>
          Create a new account!
        </h1>
        <img className='w-full' src={illustration} alt='resgister-illu' />
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <form className='drop-shadow-sm mt-8 w-4/6 border-solid rounded-lg 
        border-[#8D88EA] border-[1px] flex flex-col gap-6 text-base font-poppins 
        font-normal py-8 '>
          <h1 className='font-medium text-3xl px-8'>Sign up</h1>
          <InputField
            label="Email"
            placeholder="Enter your email"
            type="email"
            name="email"
            value={registerInfo.email}
            handleInputChange={handleInputChange} />
          <InputField
            label="User name"
            placeholder="Enter your user name"
            type="text"
            name="username"
            value={registerInfo.username}
            handleInputChange={handleInputChange} />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={registerInfo.password}
            handleInputChange={handleInputChange} />
          <InputField
            label="Confirm Password"
            placeholder="Confirm your password"
            type="password"
            name="passwordConfirm"
            value={registerInfo.passwordConfirm}
            handleInputChange={handleInputChange} />
          <button type='submit' onClick={handleSubmit} className='drop-shadow-dark font-poppins 
          font-semibold text-white text-base bg-violet-dark h-14 rounded-[8px] 
          mx-8 mt-2'>
            {loader
              ? <BeatLoader color="#FFFFFF" size="10px" cssOverride={loaderStyle} />
              : 'Register'}
          </button>
          <p className='items-center flex justify-center font-light text-[#7D7D7D]'>
            Already have an account?&nbsp;
            <span onClick={handleLoginNavigate} className='font-bold text-black 
            cursor-pointer'>Login
            </span>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
