import React, { createContext } from "react";
import { hero } from "../../assets/data/data.js";
import "./hero_slider.scss";
import SliderCard from "./slidercard.jsx";
export const HeroContext = createContext();
export const HeroSlider = () => {
  return (
    <HeroContext.Provider value={{ hero }}>
      <SliderCard />
    </HeroContext.Provider>
  );
};

export default HeroSlider;
