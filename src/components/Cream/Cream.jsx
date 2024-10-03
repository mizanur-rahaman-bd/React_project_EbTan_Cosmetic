import React from 'react'
import CommonHead from '../Common/CommonHead'
import CommonAccro from '../Common/CommonAccro'
import CommonButton from '../Common/CommonButton'

const Cream = () => {
  return (
    <>
    <section className='mb-[60px] lg:mb-[155px]'>
        <div className="container">
            <div className="cream_row px-[10px] lg:px-0 flex flex-wrap gap-[30px] lg:gap-[120px]">
                <div className="img_col">

                    <img src="images/cream.png" alt="cream" />

                </div>
                <div className="info_col">
                    <CommonHead CommonHeadText={'All skins types'} />
                    <div className="common_head_text">
                        <h2 className='w-[215px] my-[15px] lg:my-[30px] font-pt_serif font-normal text-[48px] text-[#333333]'>Men’s day
                        cream</h2>
                    </div>
                    <CommonAccro accrohead={'How to use'} />
                    <CommonAccro accrohead={'Ingredients'} />
                    <CommonAccro accrohead={'Benefits'} />
                    <div className='mt-[18px] lg:mt-[37px] flex gap-[27px] items-center'>
                        <CommonButton commonbottontext={'Add to cart'} commonbuttoneffect={'active:scale-110 hover:bg-[#399918] hover:text-black'} />
                        <p className='font-pt_serif font-normal text-[30px] text-[#C51605]'>৳ 500</p>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Cream