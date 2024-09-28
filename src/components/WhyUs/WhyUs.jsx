import React from 'react'
import { IoIosStar } from "react-icons/io";
import { BiSolidInjection } from "react-icons/bi";
import { FaCheckCircle } from "react-icons/fa";

const WhyUs = () => {
  return (
    <>
    <section className='whyus px-[10px] lg:px-0'>
      <div className="container">
        <div className="whyus_row mb-[40px] lg:mb-[121px]">
          <div className="whyus_description">
            
            <div className='flex justify-center'>
            <h2 className='text-center w-[318px] font-pt_serif font-normal text-[40px] lg:text-[48px] text-heading_color'>Why <span className='text-[#C51605]'>choose </span> us</h2>
            </div>
            
            <div className='text-center mx-auto w-[280px] lg:w-[526px]'>
            <p className='mt-[8px] lg:mt-[21px] mb-[30px] lg:mb-[60px] font-inter font-medium text-[12px] lg:text-[18px] text-[#A0A79A]'>SLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
            </div>
            

          </div>
          <div className="whyus_cards flex flex-wrap gap-[20px]">

            <div className="single_card w-[290px] lg:w-[380px] bg-[#F0EFEA] pt-[32px] pl-[26px] pr-[41px] pb-[41px]">
              <div className="single_card_content">
                <div className="Single_card_icon w-[58px] h-[58px] bg-[#CDD5CA] text-[#C51605] rounded-[50px] flex justify-center items-center">
                <IoIosStar className='w-[25px] lg:w-[35px]h-[25px] lg:h-[35px]' />
                
                </div>
                <div className="single_card_text">
                  <h3 className='font-inter font-bold text-[18px] lg:text-[22px] text-heading_color mt-[20px] mb-[11px]'>Dermatologist Tested</h3>
                  <p className='font-inter font-medium text-[14px] lg:text-[18px] text-[#A0A79A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    
                </div>

              </div>
              
            </div>

            <div className="single_card w-[290px] lg:w-[380px] bg-[#F0EFEA] pt-[32px] pl-[26px] pr-[41px] pb-[41px]">
              <div className="single_card_content">
                <div className="Single_card_icon w-[58px] h-[58px] bg-[#CDD5CA] text-[#C51605] rounded-[50px] flex justify-center items-center">
                <BiSolidInjection className='w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]' />
                
                </div>
                <div className="single_card_text">
                  <h3 className='font-inter font-bold text-[18px] lg:text-[22px] text-heading_color mt-[20px] mb-[11px]'>Allergy tested</h3>
                  <p className='font-inter font-medium text-[14px] lg:text-[18px] text-[#A0A79A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    
                </div>

              </div>
              
            </div>

            <div className="single_card w-[290px] lg:w-[380px] bg-[#F0EFEA] pt-[32px] pl-[26px] pr-[41px] pb-[41px]">
              <div className="single_card_content">
                <div className="Single_card_icon w-[58px] h-[58px] bg-[#CDD5CA] text-[#C51605] rounded-[50px] flex justify-center items-center">
                <FaCheckCircle className='w-[25px] lg:w-[35px] h-[25px] lg:h-[35px]' />
                
                </div>
                <div className="single_card_text">
                  <h3 className='font-inter font-bold text-[18px] lg:text-[22px] text-heading_color mt-[20px] mb-[11px]'>Non-comedogenic</h3>
                  <p className='font-inter font-medium text-[14px] lg:text-[18px] text-[#A0A79A]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    
                </div>

              </div>
              
            </div>

          </div>
        </div>
      </div>

    </section>
    
    </>
  )
}

export default WhyUs