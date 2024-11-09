import React from "react";
import { IoIosStar } from "react-icons/io";

const CommonReview = () => {
  return (
    <>
      <div className="lg:flex lg:justify-evenly mb-[60px] lg:mb-[120px]">
        <div className="w-[300px] lg:w-[441px] mb-8 lg:mb-0">
          <ul className="flex gap-[15px] lg:gap-[25px] justify-center">
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
          </ul>
          <p className="font-pt_serif font-normal text-[15px] lg:text-[20px] text-[#C51605] my-[13px] text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <h2 className="font-pt_serif font-normal text-[25px] lg:text-[36px] text-[#333333] text-center mx-auto">
            Ebrahim Ahmed
          </h2>
          <h3 className="font-pt_serif font-normal text-[15px] lg:text-[20px] text-[#F2994A] text-center mx-auto">
            actor
          </h3>
        </div>
        <div className="w-[300px] lg:w-[441px]">
          <ul className="flex gap-[15px] lg:gap-[25px] justify-center">
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
            <li>
              <IoIosStar className="text-2xl lg:text-4xl text-[#F2994A]" />
            </li>
          </ul>
          <p className="font-pt_serif font-normal text-[15px] lg:text-[20px] text-[#C51605] my-[13px] text-center mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
          <h2 className="font-pt_serif font-normal text-[25px] lg:text-[36px] text-[#333333] text-center mx-auto">
            Tanvir Shantoh
          </h2>
          <h3 className="font-pt_serif font-normal text-[15px] lg:text-[20px] text-[#F2994A] text-center mx-auto">
            actor
          </h3>
        </div>
      </div>
    </>
  );
};

export default CommonReview;
