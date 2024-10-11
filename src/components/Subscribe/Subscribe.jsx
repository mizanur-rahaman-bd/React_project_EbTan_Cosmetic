import React from 'react'

const Subscribe = () => {
  return (
    
    <>
    <section className='subscribe py-[50px] lg:pt-[80px] lg:pb-[77px] bg-[#ECEBE6]'>
        <div className="container">
            <div className="subscribe_row flex flex-wrap justify-between items-center">
                <div className="subscribe_text w-[356px]">
                <h2 className='font-pt_serif font-normal text-heading_color text-[48px]'>Subscribe to the 
                daily <span className='font-pt_serif font-normal text-[#C51605] text-[48px]'>updates</span></h2>

                </div>
                <div className="subscribe_input flex justify-between items-center w-full lg:w-[700px] h-[92px] border-[#A0A79A] border-[1px] rounded-[50px] p-5">
                    <input className='lg:w-[400px] bg-transparent outline-none font-inter font-medium text-[18px]' type="text" placeholder='Enter your email address' />
                    <button className='px-[35px] py-[13px] bg-[#E52525] rounded-[50px] text-white text-[18px] font-inter font-medium'>Subscribe now</button>
                    
                </div>
            </div>
        </div>

    </section>
    
    </>
  )
}

export default Subscribe