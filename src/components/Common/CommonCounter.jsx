import React from 'react'
import { IoStar } from "react-icons/io5";
import CountUp from 'react-countup';

const CommonCounter = ({CountIcon , CountNumber , CountText , CountComma , CountSix , CountPlus}) => {
  return (
    <>
    <div className="common_counter_row mt-[42px]">
        <div className="single_common_counter">
            <div className="single_common_count flex items-center gap-y-[6px]">
                <div className='text-3xl text-[#F2994A]'>
                    {CountIcon}

                </div>
            
            
            <CountUp className='font-inter font-bold text-[20px] lg:text-[32px] text-heading_color' end={CountNumber} duration={10} />
            <p className='font-inter font-bold text-[20px] lg:text-[32px] text-heading_color'>{CountComma}</p>
            
            <p className='font-inter font-bold text-[20px] lg:text-[32px] text-heading_color'>{CountPlus}</p>
            <p className='font-inter font-bold text-[20px] lg:text-[32px] text-heading_color'>{CountSix}</p>

            </div>
            <p className='font-inter font-normal text-[12px] lg:text-[18px] text-[#A0A79A] pl-[5px] lg:pl-[38px]'>{CountText}</p>

            

        </div>
    </div>
    </>
  )
}

export default CommonCounter