import React from 'react'
import CommonHead from '../Common/CommonHead'
import CommonAccro from '../Common/CommonAccro'
import CommonButton from '../Common/CommonButton'

const LipBalm = () => {
  return (
    
    <>

     <section className='mb-[50px] lg:mb-[142px]'>
     <div className="container">
            <div className="lipbalm_row px-[10px] lg:px-0 flex flex-wrap gap-[40px] lg:gap-[150px]">
                  <div className="lipbalm_info_col">
                    <CommonHead CommonHeadText={'Only skins types'} />
                    <h2 className='w-[300px] lg:w-[479px] my-[15px] lg:my-[30px] font-pt_serif font-normal text-[48px] text-[#333333]'>Men's lip balm lasting 
                    (25 gr)</h2>
                    <CommonAccro accrohead={'How to use'} />
                    <CommonAccro accrohead={'Ingredients'} />
                    <CommonAccro accrohead={'Benefits'} />
                    <div className='mt-[18px] lg:mt-[37px] flex gap-[27px] items-center'>
                        <CommonButton commonbottontext={'Add to cart'} commonbuttoneffect={'active:scale-110 hover:bg-[#399918] hover:text-black'} />
                        <p className='font-pt_serif font-normal text-[30px] text-[#C51605]'>৳ 300</p>
                    </div>

                  </div>
                <div className="lipbalm_img_col">
                    <img src="images/lb.png" alt="Lip_balm" />
                </div>
            </div>
        </div>

     </section>

   
        


   

     
        


     
    
    
    
    </>
  )
}

export default LipBalm