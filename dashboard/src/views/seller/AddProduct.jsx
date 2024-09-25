import React, { useState } from 'react'
import { FaChartLine } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import { BsBoxSeam } from "react-icons/bs";
import { FaRegClock } from "react-icons/fa";
import { FaRegImage } from 'react-icons/fa6';
import { useEffect } from 'react';


const InputField = ({ labelName, inputValue, inputType, inputName, handleInput }) => {
  return (
    <div className={`flex flex-col gap-1 w-[48%]`}>
      <label className='text-gray-light text-sm'>{labelName}</label>
      <input onChange={(e) => handleInput(e)} value={inputValue} id='input-field' name={inputName} type={inputType} className={`border-2 border-gray-medium rounded-md px-2 py-1 text-lg outline-none focus:border-blue-medium`} />
    </div>
  )
}

const SelectField = ({ labelName, inputValue, inputName, handleInput }) => {
  const optionList = ["Option1", "Option2", "Option3", "Option4", "Option5"]
  return (
    <div className={`flex flex-col gap-1 w-[48%]`}>
      <label className='text-gray-light text-sm'>{labelName}</label>
      <select value={inputValue} name={inputName} onChange={(e) => handleInput(e)} className={`border-2 border-gray-medium rounded-md px-2 py-1 text-lg outline-none focus:border-blue-medium ${!inputValue ? 'text-[1rem]' : ''}`}>
        <option value="" selected disabled hidden>Choose here</option>
        {
          optionList.map((value, index) => (
            <option value={value} className='text-[1rem]'>
              {value}
            </option>
          ))
        }
      </select>
    </div>
  )
}

const Card = ({ title, value, icon, bgColor, iconColor }) => {
  return (
    <div className={`flex flex-row justify-between items-center w-72 shadow-sm h-24 rounded-[20px] bg-white px-6 py-2`}>
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

const AddProduct = () => {
  const [productInfo, setProductInfo] = useState({
    name: "",
    brand: "",
    price: "",
    discount: "",
    type: "",
    category: "",
    stock: "",
    startDiscount: "",
    endDiscount: "",
  });
  const [images, setImages] = useState([]);

  const handleInputChange = (e) => {
    setProductInfo({
      ...productInfo,
      [e.target.name]: e.target.value
    })
  }

  const handleImage = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      const imageData = {
        id: e.target.id,
        url: imageUrl,
      }
      console.log("TEST", imageData);

      setImages([...images, imageData]);
    }
  }

  useEffect(() => {
    console.log("Images updated", images);
  }, [images]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("product Info", productInfo)
  }

  const handleDeleteImage = (deleteID) => {
    setImages(images.filter(image => image.id !== deleteID))
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
      <div className='flex flex-col gap-4 mx-8 px-8 py-8 mr-16 mb-8 bg-white 
      rounded-[20px]'>
        <h1 className='block font-medium font-inter text-lg text-blue-dark'>Add a new product</h1>
        <div className='flex flex-col w-full h-fit gap-4'>
          {/* Form Content */}
          <div className='w-full flex flex-row gap-6'>
            <div className=' w-[60%] h-full'>
              {/* Input Field */}
              <div className='flex flex-row w-full flex-wrap justify-between gap-x-6 gap-y-4'>
                <InputField labelName="Product name" inputType="text" inputValue={productInfo.name} inputName="name" handleInput={handleInputChange} />
                <SelectField labelName="Type" inputValue={productInfo.type} inputName="type" handleInput={handleInputChange} />
                <InputField labelName="Brand" inputType="text" inputValue={productInfo.brand} inputName="brand" handleInput={handleInputChange} />
                <SelectField labelName="Category" inputValue={productInfo.category} inputName="category" handleInput={handleInputChange} />
                <InputField labelName="Price" inputType="text" inputValue={productInfo.price} inputName="price" handleInput={handleInputChange} />
                <InputField labelName="Stock" inputType="text" inputValue={productInfo.stock} inputName="stock" handleInput={handleInputChange} />
                <InputField labelName="Discount" inputType="text" inputValue={productInfo.discount} inputName="discount" handleInput={handleInputChange} />
                <InputField labelName="Start Discount" inputType="date" inputValue={productInfo.startDiscount} inputName="startDiscount" handleInput={handleInputChange} />
                <InputField labelName="End Discount" inputType="date" inputValue={productInfo.endDiscount} inputName="endDiscount" handleInput={handleInputChange} />
              </div>
            </div>
            {/* Image Input */}
            <div className='w-[40%] h-96 relative'>
              <label htmlFor="img-1" className=' cursor-pointer h-full border-2 border-dashed border-[#1E6EE5] flex justify-center items-center flex-col'>
                <img
                  src={images.length > 0 ? images.find(image => image.id === 'img-1')?.url : ''}
                  alt='img-test'
                  className={`w-full ${images.find(image => image.id === 'img-1') ? "" : "hidden"} 
                h-[380px] object-cover`} />
                <FaRegImage className={`${images.find(image => image.id === 'img-1') ? "hidden" : ""}`} style={{ fontSize: "2.5rem", color: "#606060" }} />
                <span className={`font-outfit ${images.find(image => image.id === 'img-1') ? "hidden" : ""} 
                font-medium text-lg text-[#606060]`}>
                  Select Image
                </span>
              </label>
              {/* Delete Image */}
              <span
                onClick={() => handleDeleteImage("img-1")}
                className={`bg-black cursor-pointer ${images.find(image => image.id === 'img-1') ? "" : "hidden"} opacity-80 absolute top-[-12px] right-[-10px] flex justify-center items-center text-white self-center w-8 h-8 rounded-full`}>
                <span>
                  X
                </span>
              </span>
              <input disabled={images.find(image => image.id === 'img-1') ? 'true' : ''} type='file' onChange={(e) => handleImage(e)} className='hidden' name='image' id='img-1' />
            </div>
          </div>
          {/* Description */}
          <div className='flex flex-row items-center gap-6'>
            <div className={`w-[60%] flex flex-col gap-1`}>
              <label className='text-gray-light text-sm'>Description</label>
              <textarea type="text" className={`border-2 border-gray-medium 
                  rounded-md px-2 py-1 text-lg outline-none focus:border-blue-medium 
                  w-full h-36`} />
            </div>
            {/* Additional Image */}
            <div className='w-[40%] mt-6 flex flex-row gap-2'>
              <div className='w-[33%] h-36 relative'>
                <label htmlFor="img-2" className=' cursor-pointer h-full border-2 border-dashed border-[#1E6EE5] flex justify-center items-center flex-col'>
                  <img
                    src={images.length > 0 ? images.find(image => image.id === 'img-2')?.url : ''}
                    alt='img-test'
                    className={`w-full ${images.find(image => image.id === 'img-2') ? "" : "hidden"} 
                    h-[140px] object-cover`} />
                  <FaRegImage className={`${images.find(image => image.id === 'img-2') ? "hidden" : ""}`} style={{ fontSize: "2.5rem", color: "#606060" }} />
                  <span className={`font-outfit ${images.find(image => image.id === 'img-2') ? "hidden" : ""} 
                        font-medium text-lg text-[#606060]`}>
                    Select Image
                  </span>
                </label>
                {/* Delete Image */}
                <span
                  onClick={() => handleDeleteImage("img-2")}
                  className={`bg-black cursor-pointer ${images.find(image => image.id === 'img-2') ? "" : "hidden"} 
                opacity-80 absolute top-[-10px] right-[-5px] flex justify-center items-center 
                text-white self-center w-6 h-6 rounded-full`}>
                  <span>
                    x
                  </span>
                </span>
                <input disabled={images.find(image => image.id === 'img-2') ? 'true' : ''} type='file' onChange={(e) => handleImage(e)} className='hidden' name='image' id='img-2' />
              </div>
              <div className='w-[33%] h-36 relative'>
                <label htmlFor="img-3" className=' cursor-pointer h-full border-2 border-dashed border-[#1E6EE5] flex justify-center items-center flex-col'>
                  <img
                    src={images.length > 0 ? images.find(image => image.id === 'img-3')?.url : ''}
                    alt='img-test'
                    className={`w-full ${images.find(image => image.id === 'img-3') ? "" : "hidden"} 
                    h-[140px] object-cover`} />
                  <FaRegImage className={`${images.find(image => image.id === 'img-3') ? "hidden" : ""}`} style={{ fontSize: "2.5rem", color: "#606060" }} />
                  <span className={`font-outfit ${images.find(image => image.id === 'img-3') ? "hidden" : ""} 
                        font-medium text-lg text-[#606060]`}>
                    Select Image
                  </span>
                </label>
                {/* Delete Image */}
                <span
                  onClick={() => handleDeleteImage("img-3")}
                  className={`bg-black cursor-pointer ${images.find(image => image.id === 'img-3') ? "" : "hidden"} 
                opacity-80 absolute top-[-10px] right-[-5px] flex justify-center items-center 
                text-white self-center w-6 h-6 rounded-full`}>
                  <span>
                    x
                  </span>
                </span>
                <input disabled={images.find(image => image.id === 'img-3') ? 'true' : ''} type='file' onChange={(e) => handleImage(e)} className='hidden' name='image' id='img-3' />
              </div>
              <div className='w-[33%] h-36 relative'>
                <label htmlFor="img-4" className=' cursor-pointer h-full border-2 border-dashed border-[#1E6EE5] flex justify-center items-center flex-col'>
                  <img
                    src={images.length > 0 ? images.find(image => image.id === 'img-4')?.url : ''}
                    alt='img-test'
                    className={`w-full ${images.find(image => image.id === 'img-4') ? "" : "hidden"} 
                    h-[140px] object-cover`} />
                  <FaRegImage className={`${images.find(image => image.id === 'img-4') ? "hidden" : ""}`} style={{ fontSize: "2.5rem", color: "#606060" }} />
                  <span className={`font-outfit ${images.find(image => image.id === 'img-4') ? "hidden" : ""} 
                        font-medium text-lg text-[#606060]`}>
                    Select Image
                  </span>
                </label>
                {/* Delete Image */}
                <span
                  onClick={() => handleDeleteImage("img-4")}
                  className={`bg-black cursor-pointer ${images.find(image => image.id === 'img-4') ? "" : "hidden"} 
                opacity-80 absolute top-[-10px] right-[-5px] flex justify-center items-center 
                text-white self-center w-6 h-6 rounded-full`}>
                  <span>
                    x
                  </span>
                </span>
                <input disabled={images.find(image => image.id === 'img-4') ? 'true' : ''} type='file' onChange={(e) => handleImage(e)} className='hidden' name='image' id='img-4' />
              </div>
            </div>
          </div>
          {/* Button */}
          <div className='flex gap-6 flex-row justify-end text-outfit'>
            <button className='border-[3px] rounded border-blue-medium 
            text-blue-medium font-semibold px-6 py-1'>
              Cancel
            </button>
            <button onClick={(e) => handleSubmit(e)} className='bg-blue-medium 
            font-semibold text-white px-6 py-1 rounded'>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default AddProduct
