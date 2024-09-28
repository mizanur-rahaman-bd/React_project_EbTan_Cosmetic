import React from 'react'
import CommonHead from '../Common/CommonHead'
import CommonButton from '../Common/CommonButton'
import CommonCounter from '../Common/CommonCounter'
import { IoStar } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import CountUp from 'react-countup';

const Banner = () => {
  return (
    
    <>
    <section className='Banner pl-[10px] lg:pl-0 pt-[30px] lg:pt-[97px] mb-[40px] lg:mb-[188px]'>
        <div className="container">
            <div className="Banner_row flex flex-wrap gap-[10px] lg:gap-[72px] items-center justify-center">
                <div className="banner_img">
                    <img className='w-[270px] lg:w-[469px]' src="images/bannner_img.png" alt="Banner_image" />
                </div>
                <div className="banner_info">
                    <CommonHead CommonHeadText={'Normal to oily skin'} />
                    <h1 className='w-[280px] lg:w-[540px] mt-[10px] lg:mt-[20px] mb-[10px] lg:mb-[20] font-pt_serif font-normal text-[40px] lg:text-[72px] text-heading_color'>Men’s Sunscreen
                    hand & body</h1>
                    <p className='w-[280px] lg:w-[526px] mb-[25px] lg:mb-[64px] font-inter font-normal text-[14px] lg:text-[18px] text-[#A0A79A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                    <CommonButton commonbottontext={'Add to cart'} commonbuttoneffect={'active:scale-110 hover:bg-[#399918] hover:text-black'} />
                    <div className='flex flex-wrap gap-[25px] lg:gap-[49px]'>
                    <CommonCounter CountIcon={<IoStar className='pr-[6px]' />} CountNumber={4} CountComma={','} CountSix={6}            CountText={'Rating'} />
                    <CommonCounter CountIcon={<FaShoppingBag className='pr-[6px]' />} CountNumber={200} CountPlus={'+'} CountText={"Product solds"} />
                    <CommonCounter CountIcon={<FaSmile className='pr-[6px]' />} CountNumber={99} CountPlus={'+'} CountText={'Review'} />

                    </div>
                    
                    

                </div>
            </div>
        </div>
    </section>

       
    
    </>
  )
}

export default Banner