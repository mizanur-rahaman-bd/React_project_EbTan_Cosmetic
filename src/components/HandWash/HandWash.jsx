import React from 'react'
import CommonHead from '../Common/CommonHead'
import CommonCounter from '../Common/CommonCounter'
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FaFaceSmile } from "react-icons/fa6";
import CommonButton from '../Common/CommonButton';

const HandWash = () => {
  return (
    <>
    <section className='hand_wash bg-[#ECEBE6] px-[10px] lg:px-0 pt-[40px] lg:pt-[110px] pb-[50px] lg:pb-[149px] mb-[50px] lg:mb-[110px]'>
        <div className="container">
            <div className="hand_wash_row flex flex-wrap items-center justify-center gap-[60px] lg:gap-[120px]">
              <div className="text_col">
                <div className="common_head">
                    <CommonHead CommonHeadText={"All skins types"} />
                </div>
                <div className="common_counter flex flex-wrap gap-[25px] lg:gap-[80px] mb-[25px] lg:mb-[40px]">
                    <CommonCounter CountIcon={<GiCardboardBoxClosed className='pr-[6px]' />} CountNumber={48} CountText={'Products'} />
                    <CommonCounter CountIcon={<FaShoppingBag className='pr-[6px]' />} CountNumber={200} CountPlus={'+'} CountText={'Product solds'} />
                    <CommonCounter CountIcon={<FaFaceSmile className='pr-[6px]' />} CountNumber={99} CountPlus={'+'} CountText={'Review'} />
                </div>
                <div className="hand_wash_head_text mb-[30px]">
                    <h2 className='font-pt_serif font-normal text-[25px] lg:text-[36px] text-[#C51605]'>Men’s Hand wash  lorem</h2>
                </div>
                <div className="hand_Wash_button_row flex gap-[20px] items-center">
                    <div className="hand_wash_button">
                        <CommonButton commonbottontext={'Add to cart'} commonbuttoneffect={'active:scale-110 hover:bg-[#399918] hover:text-black'} />

                    </div>
                    <div className="hand_wash_price">
                        <p className='font-pt_serif font-normal text-[30px] text-[#C51605]'>৳ 700</p>

                    </div>

                </div>

              </div>
              <div className="img_col">
                <img src="images/hadn_wash.png" alt="Hand_wash" />

              </div>

            </div>
           
        </div>

    </section>
    </>
  )
}

export default HandWash