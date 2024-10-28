import React from "react";
import "./hero.scss";
import herobanner from "./herobanner.svg";

const Hero = () => {
  return (
    <>
      <header
        className="hero-container"
        style={{ backgroundImage: `url(${herobanner})` }}
      >
        <section className="hero-section container">
          <div className="hero-content">
            <h1 className="h1 section-title">
              The Best Program to <span className="span">Enroll</span> for Exchange
            </h1>

            <p className="hero-text">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui
              officia deserunt mollit.
            </p>

            <a href="#" className="btn has-before">
              <span class="span">Find courses</span>

              <ion-icon
                name="arrow-forward-outline"
                aria-hidden="true"
              ></ion-icon>
            </a>
          </div>

          <div className="hero-banner">
            <div class="img-holder one">
              <img
                src="./images/hero-image/hero-banner-1.jpg"
                width="270"
                height="300"
                alt="hero banner"
                class="img-cover"
              />
            </div>

            <div class="img-holder two">
              <img
                src="./images/hero-image/hero-banner-2.jpg"
                width="240"
                height="370"
                alt="hero banner"
                class="img-cover "
              />
            </div>

            <img
              src="./images/hero-image/hero-shape-1.svg"
              width="380"
              height="190"
              alt=""
              class="shape hero-shape-1"
            />

            <img
              src="./images/hero-image/hero-shape-2.png"
              width="622"
              height="551"
              alt=""
              class="shape hero-shape-2"
            />
          </div>
        </section>
      </header>
    </>
  );
};

export default Hero;
