import React from "react";
import Hero from "./layout/hero_section/hero";
import Main from "./layout/main_section/main";
import Footer from "./layout/footer_section/footer";
import "./homepage.scss";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Homepage;
