import React from "react";
import "./footer.scss";
import logo from "../../../../assets/images/logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialTwitter } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="top">
          <div className="footer-left">
            <img src={logo} alt="" />

            <p>
              Zealworkers is a digital marketplace set to enhance the way we
              interact with digital marketplace and enable a more swift and
              scalable transaction system by enabling Blockchain integration
              into the zealworker ecosystem.
            </p>

            <div className="socials">
              <FaFacebook className="facebook" />
              <FaLinkedinIn className="linkedin" />
              <SlSocialTwitter className="twitter" />
            </div>
          </div>
          <div className="footer-right">
            <ul>
              <h3>Company</h3>
              <li>About us</li>
              <li>Contact us</li>
              <li>FAQs</li>
              <li>How it works</li>
            </ul>

            <ul>
              <h3>product</h3>
              <li>Affilate program</li>
              <li>Zealworker Token</li>
              <li>FAQs</li>
            </ul>

            <ul>
              <h3>Legal</h3>
              <li>Term of Service</li>
              <li>Privacy policy</li>
            </ul>

            <ul>
              <IoIosArrowUp className="arrow" />
            </ul>
          </div>
        </div>
      

        <div className="down">
          <div className="underlines"></div>
           <div className="company-info">
            <p>&copy;2024 Zealworkers</p>
            <select name="language" id="language" className="language">
              <option value="English"></option>
              <option value="Spanish"></option>
              <option value="Arabic"></option>
            </select>
           </div>
        </div>

      </footer>
    </>
  );
};

export default Footer;
