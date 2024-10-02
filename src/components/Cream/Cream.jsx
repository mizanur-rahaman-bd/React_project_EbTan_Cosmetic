import React from 'react'
import CommonHead from '../Common/CommonHead'
import CommonAccro from '../Common/CommonAccro'

const Cream = () => {
  return (
    <>
    <section>
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

                </div>
            </div>
        </div>
    </section>
    
    </>
  )
}

export default Cream