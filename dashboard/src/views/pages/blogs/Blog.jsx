import React from 'react'
import Header from '../landing-page/components/Header'
import Nav from '../landing-page/components/Nav'
import box from './../../../assets/box.png'
import blog from './../../../assets/blogs.jpg'
import Footer from '../landing-page/components/Footer'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Blog = () => {
  
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Header />
      <Nav />
      {/* Page name */}
      <div className='mt-20 w-full bg-violet-light py-8 justify-center flex flex-col items-center tracking-wider relative'>
        <h1 className='text-[1.85rem] font-mplus font-bold'>Blogs</h1>
        <p className='font-outfit  text-pink-main text-[12px] font-medium'>Home -&gt; Blogs</p>
        <img className='absolute right-[35%] top-0 w-40' src={box} alt='img-box' />
      </div>
      {/* Image */}
      <div className='flex justify-center pt-12'>
        <img
          src={blog}
          alt='blog-img'
          className='w-[1450px]'
        />
      </div>
      {/* Title */}
      <div className='flex justify-center items-center flex-col'>
        <h1 className='font-patua-one text-[2.75rem] w-[1500px] mt-4 text-center'>
          "Discover insights, tips, and trends to enhance your shopping experience."
        </h1>
        <span className='w-[300px] h-[4px] rounded-sm bg-black'>
        </span>
      </div>
      {/* Blogs */}
      <div className='flex flex-col items-center mt-8 mb-16 gap-6 px-16'>
        <p className='text-[#7D7D7D] font-outfit font-medium text-md  text-justify'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type
          specimen book.  It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.<br /><br />
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College in
          Virginia, looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in classical
          literature, discovered the undoubtable source. Lorem Ipsum comes from
          sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
          treatise on the theory of ethics, very popular during the Renaissance.
          The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a
          line in section 1.10.32.
        </p>
        <button
          className='bg-blue-medium text-white font-outfit text-md px-6 font-medium rounded-sm self-end py-1'
          onClick={() => {
            window.scrollTo(0, 0);  
            navigate("/blogs");      
          }}
        >
          Back
        </button>

      </div>
      <Footer />
    </div>
  )
}

export default Blog
