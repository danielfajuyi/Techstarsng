import React, { createContext } from "react";
import { team } from "../../../data";
import SliderCard from "./SliderCard";
import "./Slider.scss";
export const TeamContext = createContext();
export const ImageSlider = () => {
  return (
    <TeamContext.Provider value={{ team }}>
      <SliderCard />
    </TeamContext.Provider>
  );
};
