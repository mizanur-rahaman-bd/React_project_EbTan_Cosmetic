import React from 'react'
import { IoIosStar } from "react-icons/io";

const CommonReview = () => {
  return (
    <>
    <div className='flex justify-evenly'>
      <div className='w-[441px]'>
        <ul className='flex gap-[25px]'>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
        </ul>
        <p className='font-pt_serif font-normal text-[20px] text-[#C51605] my-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <h2 className='font-pt_serif font-normal text-[36px] text-[#333333]'>Ebrahim Ahmed</h2>
        <h3 className='font-pt_serif font-normal text-[20px] text-[#F2994A]'>actor</h3>
      </div>
      <div className='w-[441px]'>
        <ul className='flex gap-[25px]'>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
            <li><IoIosStar className='text-4xl text-[#F2994A]' /></li>
        </ul>
        <p className='font-pt_serif font-normal text-[20px] text-[#C51605] my-[13px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <h2 className='font-pt_serif font-normal text-[36px] text-[#333333]'>Ebrahim Ahmed</h2>
        <h3 className='font-pt_serif font-normal text-[20px] text-[#F2994A]'>actor</h3>
      </div>


    </div>
      
    </>
  )
}

export default CommonReview