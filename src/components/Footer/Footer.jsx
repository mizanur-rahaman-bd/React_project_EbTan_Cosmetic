import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="pt-[30px] lg:pt-[64px] pb-[30px] lg:pb-[66px] bg-[#C51605]">
        <div className="footer_head mt-[30px] lg:mt-[64px] mb-[28px] lg:mb-[43px]">
          <h2 className="text-center font-inter font-black text-[25px] lg:text-[34px] text-white">
            EbTan Cosmetics
          </h2>
        </div>
        <div className="footer_menu">
          <ul>
            <li>
              <Link to={"#"}>Home</Link>
            </li>
            <li>
              <Link to={"#"}>About us</Link>
            </li>
            <li>
              <Link to={"#"}>Product</Link>
            </li>
            <li>
              <Link to={"#"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer_icon">
          <ul>
            <li>
              <img src="images/insta.png" alt="insta" />
            </li>
            <li>
              <img src="images/tg.png" alt="tg" />
            </li>
            <li>
              <img src="images/fb.png" alt="fb" />
            </li>
          </ul>
        </div>
        <div className="footer_text">
          <p>© 2024 All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
