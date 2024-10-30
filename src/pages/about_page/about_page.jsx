import React from "react";
import "./about_page.scss";
import Hero from "./layout/hero_section/hero";
import Main from "./layout/main_section/main";
import Footer from "./layout/footer_section/footer";


const AboutPage = () => {
  return (
    <>
    <main className="app">
 <Hero />
  <Main  />
  <Footer />
    </main>
  
    </>
  );
};

export default AboutPage;
