import React from "react";
import "./hero.scss";
import HeroSlider from "../../../../components/sliders/hero_slider";

const Hero = () => {
  return (
    <>
      <header className="hero-section">
        <HeroSlider />
      </header>
    </>
  );
};

export default Hero;
