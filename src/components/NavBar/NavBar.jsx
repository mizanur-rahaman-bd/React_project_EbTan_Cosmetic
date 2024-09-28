import React, { useState } from 'react'
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from 'react-router-dom';


const NavBar = () => {

  const [show, setShow] = useState(false)

  // function part
  // toggle menu

   const handleshow = ()=>{

    setShow(!show)
   }

  return (
    <>
      
      <nav className='main_menu px-[10px] lg:px-0 pt-[20px] lg:pt-[33px]'>
        <div className="container">
            <div className="menu_row flex items-center justify-between">
              <div className="menu_logo">
                <img src="images/logo.png" alt="LOgo" />
              </div>
              <div className="menu_bar relative">
              <HiOutlineMenuAlt2 onClick={handleshow} className='text-3xl rotate-180 active:text-brand_color' />
              {
                show&&
                 
                <ul className='w-[100px] lg:w-[180px] bg-brand_color rounded-[15px] flex flex-col items-center gap-[10px] lg:gap-[15px] py-4 absolute right-0'>
                 <li><Link className='text-[12px] lg:text-[18px] font-medium text-[#FFFFFF] font-inter' to={'#'}>Home</Link></li>
                 <li><Link className='text-[12px] lg:text-[18px] font-medium text-[#FFFFFF] font-inter' to={'#'}>About us</Link></li>
                 <li><Link className='text-[12px] lg:text-[18px] font-medium text-[#FFFFFF] font-inter' to={'#'}>Product</Link></li>
                 <li><Link className='text-[12px] lg:text-[18px] font-medium text-[#FFFFFF] font-inter' to={'#'}>Contact</Link></li>
               </ul>

               
              }
              
              </div>

            </div>
        </div>


      </nav>
    
    
    </>
  )
}

export default NavBar