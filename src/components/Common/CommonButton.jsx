import React from 'react'
import { IoMdCart } from "react-icons/io";

const CommonButton = ({commonbottontext , commonbuttoneffect}) => {
  return (
    <>
    <button className={`common_button flex items-center gap-[16px] py-[10px] lg:py-[13px] px-[15px] lg:px-[35px] bg-brand_color rounded-[5px] font-inter font-medium text-[18] text-[#FFFFFF] ${commonbuttoneffect}`}><IoMdCart className='text-2xl' />{commonbottontext}</button>
    
    </>
  )
}

export default CommonButton