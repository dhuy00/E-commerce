import React, { useEffect, useState } from 'react'
import illustration from '../../assets/online-shopping.svg'
import { useNavigate } from 'react-router-dom'
import { startTransition } from 'react'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { loaderStyle } from '../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { BeatLoader } from 'react-spinners'
import { clearMessage, seller_login } from '../../store/Reducers/authReducer'
import toast from 'react-hot-toast'



const InputField = ({ type, placeholder, label, name, value, handleInputChange }) => {
  return (
    <div className='flex flex-col gap-1'>
      <label>{label}</label>
      <input
        placeholder={placeholder}
        className='h-12 w-full rounded-[8px] px-6 font-medium text-sm text-violet-dark placeholder:text-violet-medium placeholder:font-normal bg-violet-light  outline-none focus:border-violet-dark focus:border-2 focus:border-solid'
        type={type}
        name={name}
        value={value}
        onChange={(e) => handleInputChange(e)} />
    </div>
  )
}

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loader, errorMessage, successMessage } = useSelector(state => state.auth);

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
    dispatch(seller_login(loginInfo));
  }

  const handleRegisterNavigate = () => {
    startTransition(() => {
      navigate("/register")
    })
  }

  useEffect(() => {
    if(errorMessage) {
      toast.error(errorMessage);
      dispatch(clearMessage());
    }

    if(successMessage){
      toast.success(successMessage);
      dispatch(clearMessage());
      setTimeout(() => {
        navigate('/');
      }, 1000);
    }
  }, [errorMessage, successMessage])

  return (
    <div className='h-full flex flex-row'>
      <div className='w-1/2'>
        <h1 className='font-semibold text-3xl font-poppins mb-8 ml-12 mt-16'>
          Welcome back!
        </h1>
        <img className='w-full' src={illustration} alt='resgister-illu' />
      </div>
      <div className=" w-1/2 flex justify-center items-center">
        <form className='drop-shadow-sm mt-8 w-4/6 border-solid rounded-lg 
        border-[#8D88EA] border-[1px] flex flex-col gap-6 text-base font-poppins 
        font-normal py-8 px-8'>
          <h1 className='font-medium text-3xl'>Sign in</h1>
          <InputField
            label="User name"
            placeholder="Enter your user name"
            type="text"
            name="username"
            value={loginInfo.username}
            handleInputChange={handleInputChange} />
          <InputField
            label="Password"
            placeholder="Enter your password"
            type="password"
            name="password"
            value={loginInfo.password}
            handleInputChange={handleInputChange} />
          <p className='text-sm text-[#4D4D4D] flex justify-end'>Forgot Password?</p>
          <button disabled={loader? true : false} onClick={handleSubmit} className='drop-shadow-dark font-poppins 
          font-semibold text-white text-base bg-violet-dark h-14 rounded-[8px] mt-2'>
            {loader
              ? <BeatLoader color="#FFFFFF" size="10px" cssOverride={loaderStyle} />
              : "Login"
            }
          </button>
          <p className='items-center flex justify-center font-light text-[#7D7D7D]'>
            Don't have an account?&nbsp;
            <span
              onClick={handleRegisterNavigate}
              className='font-bold text-black cursor-pointer hover:underline'>
              Register
            </span>
          </p>
          <div className='flex flex-col gap-3 justify-center items-center'>
            <span className='bg-gray-300 h-[1.6px]  w-1/2'></span>
            <span className='font-semibold text-gray-500'>OR</span>
          </div>
          <div className='flex flex-row gap-4 justify-center'>
            <button className='bg-[#FAFAFA] border-solid border-[#EEEEEE] 
            border-2 h-14 w-52 rounded-full flex flex-row gap-2 justify-center 
            items-center'>
              <FontAwesomeIcon icon={faGoogle} className='text-lg' />
              Login with Google
            </button>
            <button className='bg-[#FAFAFA] border-solid border-[#EEEEEE] 
            border-2 h-14 w-52 rounded-full flex flex-row gap-2 justify-center 
            items-center'>
              <FontAwesomeIcon icon={faGithub} className='text-lg' />
              Login with Github
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
