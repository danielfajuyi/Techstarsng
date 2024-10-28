import React, { useState } from "react";
import "./navbar.scss";
import "../../assets/scss/style.css";
import logo from "../../assets/images/jivipay-logo/jivipay-logo.png";
import { FaBars, FaHome } from "react-icons/fa";
const Navbar = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 100);
  });
  // Toogle Menu
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        <header className="header d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div
            className="navlink"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/features">Features</a>
              </li>
              <li>
                <a href="faq">Faqs</a>
              </li>
              <li>
                <a href="/pricing">Pricing</a>
              </li>
              <li>
                <a href="/howitworks">How It Works </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <button className="home-btn">Login</button>
              </li>

              <li>
                <button className="home-btn">Register</button>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <FaHome className=" close home-btn" />
              ) : (
                <FaBars className=" open" />
              )}
            </button>
          </div>
        </header>
      </nav>
    </>
  );
};

export default Navbar;
