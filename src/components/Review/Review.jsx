import React from "react";
import CommonReview from "../Common/CommonReview";

const Review = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="review_row">
            <div className="Review_Description">
              <div className="flex justify-center">
                <h2 className="text-center w-[318px] font-pt_serif font-normal text-[40px] lg:text-[48px] text-[#C51605]">
                  Review
                </h2>
              </div>

              <div className="text-center mx-auto w-[280px] lg:w-[526px]">
                <p className="mt-[8px] lg:mt-[21px] mb-[30px] lg:mb-[60px] font-inter font-medium text-[12px] lg:text-[18px] text-[#A0A79A]">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </p>
              </div>
            </div>
            <CommonReview />
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
