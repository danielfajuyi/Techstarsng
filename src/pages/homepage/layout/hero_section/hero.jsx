import React from "react";
import "./hero.scss";
import icon from "../../../../assets/images/header-icon.png";
import image from "../../../../assets/images/header-img1.png";

const Hero = () => {
  return (
    <>
      <header className="hero-section">
        <div>
          <div className="header-text">
            <h1>Unlock Your Potential: Find Exceptional Freelance Services</h1>
            <p></p>
            <button>Get Started</button>
            <img src={icon} alt="" />
          </div>

          <div className="image-frame-header">
            <img src={image} alt="" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
