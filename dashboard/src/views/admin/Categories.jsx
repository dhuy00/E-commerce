import React, { useState } from 'react'
import sneaker from './../../assets/sneaker.jpg'
import necklace from './../../assets/necklace.jpg'
import figure from './../../assets/figure.webp'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { FaRegImage } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { BeatLoader } from 'react-spinners'
import { loaderStyle } from '../../utils/utils';
import { category_add } from '../../store/Reducers/categoryReducer';


const CategoryCard = ({ group, categoryName, textColor, bgColor, bgImage }) => {
  return (
    <div>
      <div className='flex flex-col w-48 h-[12.2rem] rounded-[20px] px-6 pt-6 gap-0 leading-[0]' style={{ backgroundColor: bgColor }}>
        <h1 style={{ color: textColor }} className='text-[12px] font-montserrat font-medium mb-1'>{group}</h1>
        <h1 className='font-extrabold text-xl font-montserrat text-[#7B8488] mb-2'>{categoryName}</h1>
        <img src={bgImage} alt='category-img' className='w-full h-28 object-cover' />
      </div>
      <div className='flex flex-row justify-center gap-4 mt-2'>
        <BiEditAlt style={{ color: "#1E6EE5", fontSize: "1.3rem" }} />
        <RiDeleteBin6Line style={{ color: "#EA1414", fontSize: "1.3rem" }} />
      </div>
    </div>

  )
}

const Categories = () => {

  const dispatch = useDispatch();

  const { loader, errorMessage, successMessage } = useSelector(state => state.category);

  const [formData, setFormData] = useState({
    textColor: "#A7A3FF",
    bgColor: "#EBD937",
    cateName: "",
    groupName: "",
    previewImage: null,
  })

  const handleFormChange = (e) => {
    console.log("HANDLE FORM CHANGE", formData);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleImageChange = (e) => {
    const files = e.target.files;
    const length = files.length;
    if (length > 0) {
      const imageUrl = URL.createObjectURL(files[0]);
      console.log("Test Image", imageUrl);
      setFormData({
        ...formData,
        previewImage: imageUrl,
      })
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(category_add(formData));
  }


  return (
    <div className='w-full  px-10 py-8 flex gap-8 flex-col'>
      {/* All Category */}
      <div className='w-full bg-white h-full rounded-[10px] px-12 pt-12 p-6 relative flex flex-row flex-wrap gap-x-8 gap-y-6'>
        <h2 className='font-inter font-bold text-gray-medium text-sm absolute left-6 top-3'>
          ALL CATEGORIES
        </h2>
        <span className='absolute right-6 top-[48%] rounded-full bg-[#E9F0FC]'>
          <MdNavigateNext style={{ fontSize: "1.65rem", color: "#1E6EE5" }} />
        </span>
        <span className='absolute left-4 top-[48%] rounded-full bg-[#E9F0FC]'>
          <MdNavigateBefore style={{ fontSize: "1.65rem", color: "#1E6EE5" }} />
        </span>

        <CategoryCard
          group="Clothing and Shoes"
          categoryName="SNEAKER"
          textColor="#0A73A1"
          bgColor="#D4EDF8"
          bgImage={sneaker} />
        <CategoryCard
          group="Jewery"
          categoryName="NECKLACE"
          textColor="#E65E75"
          bgColor="#F4D8D9"
          bgImage={necklace} />
        <CategoryCard
          group="Toys & Games"
          categoryName="FIGURES"
          textColor="#D4B100"
          bgColor="#FEF9C4"
          bgImage={figure} />
        <CategoryCard
          group="Clothing and Shoes"
          categoryName="SNEAKER"
          textColor="#0A73A1"
          bgColor="#D4EDF8"
          bgImage={sneaker} />
        <CategoryCard
          group="Jewery"
          categoryName="NECKLACE"
          textColor="#E65E75"
          bgColor="#F4D8D9"
          bgImage={necklace} />
        <CategoryCard
          group="Toys & Games"
          categoryName="FIGURES"
          textColor="#D4B100"
          bgColor="#FEF9C4"
          bgImage={figure} />
        <CategoryCard
          group="Clothing and Shoes"
          categoryName="SNEAKER"
          textColor="#0A73A1"
          bgColor="#D4EDF8"
          bgImage={sneaker} />
        <CategoryCard
          group="Jewery"
          categoryName="NECKLACE"
          textColor="#E65E75"
          bgColor="#F4D8D9"
          bgImage={necklace} />
        <CategoryCard
          group="Toys & Games"
          categoryName="FIGURES"
          textColor="#D4B100"
          bgColor="#FEF9C4"
          bgImage={figure} />
        <CategoryCard
          group="Clothing and Shoes"
          categoryName="SNEAKER"
          textColor="#0A73A1"
          bgColor="#D4EDF8"
          bgImage={sneaker} />
      </div>
      {/* Add a new Category */}
      <div className='w-full h-[30rem] rounded-[10px] gap-4 flex flex-col'>
        <div className=' w-full h-[90%] flex gap-8'>
          <div className='bg-white h-full flex flex-row w-2/3 rounded-[10px]'>
            <div className='w-[55%] h-full py-4 px-8 flex flex-col gap-4 font-inter'>
              <div className='flex justify-center'>
                <h1 className='text-blue-medium  font-bold mb-2'>ADD A NEW CATEGORY</h1>
              </div>
              {/* Category Name */}
              <div className='flex flex-col gap-2'>
                <label className='text-blue-dark font-semibold'>
                  Category name
                </label>
                <input
                  onChange={(e) => { handleFormChange(e) }}
                  className='h-9 text-blue-medium border-2 border-blue-medium outline-none px-2 rounded-md'
                  name='cateName'
                  type='text' />
              </div>
              {/* Group Name */}
              <div className='flex flex-col gap-2'>
                <label className='text-blue-dark font-semibold '>
                  Group
                </label>
                <input
                  onChange={(e) => { handleFormChange(e) }}
                  className='h-9 text-blue-medium border-2 border-blue-medium outline-none px-2 rounded-md'
                  name="groupName"
                  type='text' />
              </div>
              {/* Text Color */}
              <div className='flex flex-col gap-2'>
                <label className='text-blue-dark font-semibold '>
                  Text color
                </label>
                <div className='flex flex-row items-center gap-4 border-2 rounded-md w-fit px-2'>
                  <input
                    onChange={(e) => { handleFormChange(e) }}
                    className='h-8 w-7 appearance-none bg-transparent p-0' value={formData.textColor}
                    type='color'
                    name='textColor' />
                  <span className='font-inter font-semibold text-[#606060]'>{formData.textColor}</span>
                </div>
              </div>
              {/* Background Color */}
              <div className='flex flex-col gap-2'>
                <label className='text-blue-dark font-semibold '>
                  Background color
                </label>
                <div className='flex flex-row items-center gap-4 border-2 rounded-md w-fit px-2'>
                  <input
                    onChange={(e) => { handleFormChange(e) }}
                    className='h-8 w-7 appearance-none bg-transparent p-0' value={formData.bgColor}
                    type='color'
                    name='bgColor' />
                  <span className='font-inter font-semibold text-[#606060]'>{formData.bgColor}</span>
                </div>
              </div>
            </div>
            {/* Add Image */}
            <div className='w-[45%] h-full relative'>
              <label htmlFor="image" className=' cursor-pointer h-full border-2 border-dashed border-[#1E6EE5] flex justify-center items-center flex-col'>
                <FaRegImage style={{ fontSize: "2.5rem", color: "#606060" }} />
                <span className='font-outfit font-medium text-lg text-[#606060]'>Select Image</span>
              </label>
              <input
                type='file'
                className='hidden'
                name='previewImage'
                id='image'
                onChange={(e) => handleImageChange(e)}
              />
              <span className='bg-black w-8 h-8 top-[-12px] right-[-10px] opacity-80 
                flex justify-center items-center text-white rounded-full absolute cursor-pointer'>
                <span>
                  X
                </span>
              </span>
            </div>
          </div>
          {/* Preview Category Card */}
          <div className='bg-white leading-none h-full w-1/3 rounded-[20px] px-8 py-6' style={{ backgroundColor: formData.bgColor }}>
            <h1 className='text-3xl' style={{ color: formData.textColor }}>{formData.groupName}</h1>
            <h1 className='text-[#7B8488] mb-5 font-extrabold text-[2.5rem]'>{formData.cateName.toUpperCase()}</h1>
            <img className='w-full h-[16.5rem] object-cover' src={formData.previewImage} alt='figure-img' />
          </div>
        </div>
        <div className='flex justify-end h-[8%]'>
          <button
            disabled={loader ? true : false}
            className='border-2 bg-white transition-all rounded-md hover:bg-blue-200
           text-blue-medium font-semibold border-blue-medium w-fit px-8'>
            {loader 
              ? <BeatLoader color="#FFFFFF" size="10px" cssOverride={loaderStyle} />
              : "Confirm"
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
