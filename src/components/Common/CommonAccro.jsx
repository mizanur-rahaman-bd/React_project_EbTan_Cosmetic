import React, { useState } from 'react'
import { TiArrowSortedDown } from "react-icons/ti";

const CommonAccro = ({accrohead}) => {
    const [show , setShow] = useState(false)


  return (
    <>
    <div className="accroHead">
        <h2 onClick={()=> setShow(!show)} className='font-inter font-semibold text-[22px] text-heading_color flex gap-[5px] items-center'> <TiArrowSortedDown className='text-3xl' /> {accrohead}</h2>
        {
            show&&
                 <p className='w-[300px] lg:w-[500px] p-5 rounded-[10px] mt-2 bg-[#F0EFEA] font-inter font-medium text-[18px] text-[#A0A79A]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum nemo eaque optio ipsam quidem aliquam, debitis sed blanditiis in.</p>


        }
        
    </div>
    
    </>
  )
}

export default CommonAccro