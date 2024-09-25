import React from 'react'
import phone from './../../../../assets/categories/phone.jpg'
import furniture from './../../../../assets/categories/furniture.jpg'
import shoes from './../../../../assets/categories/shoes.jpg'
import skincare from './../../../../assets/categories/skincare.jpg'
import watch from './../../../../assets/categories/watch.jpg'
import notebook from './../../../../assets/categories/notebook.jpg'
import figure from './../../../../assets/categories/figure.jpg'
import decoration from './../../../../assets/categories/decoration.jpg'
import medical from './../../../../assets/categories/medical.jpg'
import { Link } from 'react-router-dom'


const CategoryCard = ({ name, image }) => {
  return (
    <Link to='/products'>
      <div className='hover:-translate-y-2 transition-all flex flex-col justify-center items-center cursor-pointer'>
        <div className='w-24 h-24 border-violet-400 border-2  rounded-[15px] overflow-hidden'>
          <img src={image} className=' object-cover w-24 h-24' alt='category-img' />
        </div>
        <span className='font-outfit font-normal text-blue-darker flex justify-center'>
          {name}
        </span>
      </div>
    </Link>
  )
}

const Category = () => {
  return (
    <div className='flex flex-row py-4 justify-center items-center w-full gap-8'>
      <CategoryCard name="Phone" image={phone} />
      <CategoryCard name="Furniture" image={furniture} />
      <CategoryCard name="Shoes" image={shoes} />
      <CategoryCard name="Figure" image={figure} />
      <CategoryCard name="Skincare" image={skincare} />
      <CategoryCard name="Notebook" image={notebook} />
      <CategoryCard name="Watches" image={watch} />
      <CategoryCard name="Decoration" image={decoration} />
      <CategoryCard name="Medical Supplies" image={medical} />

    </div>
  )
}

export default Category
