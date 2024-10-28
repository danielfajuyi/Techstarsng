import React, { useContext } from "react";
import { HeroContext } from "./hero_slider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./hero_slider.scss";
import UilArrowRight from "@iconscout/react-unicons/icons/uil-arrow-right";
import UilArrowLeft from "@iconscout/react-unicons/icons/uil-arrow-left";
const SliderCard = () => {
  const { hero } = useContext(HeroContext);
  const PrevArrow = ({ onClick }) => {
    return (
      <>
        <button className="  s-arrow s-arrow-left" onClick={onClick}>
          <UilArrowLeft />
        </button>
      </>
    );
  };

  const NextArrow = ({ onClick }) => {
    return (
      <>
        <button className="  s-arrow s-arrow-right" onClick={onClick}>
          <UilArrowRight />
        </button>
      </>
    );
  };
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },

      {
        breakpoint: 920,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {hero.map((item, id) => {
        return (
          <div className="hero-slider-wrapper" key={id}>
            <div className="hero-slider">
              <div
                className="hero-slider-item"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="hero-content-wrapper">
                  <h1>{item.headertext}</h1>
                  <p>{item.paragraphtext}</p>
                  <a>{item.buttontext}</a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderCard;
