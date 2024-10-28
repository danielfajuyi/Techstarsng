import React, { useContext } from "react";
import { TeamContext } from "./Slider";
import Slider from "react-slick";
import UilFacebook from "@iconscout/react-unicons/icons/uil-facebook";
import UilWhatsapp from "@iconscout/react-unicons/icons/uil-whatsapp";
import UilInstagram from "@iconscout/react-unicons/icons/uil-instagram";
import UilTwitter from "@iconscout/react-unicons/icons/uil-twitter";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderCard = () => {
  const { team } = useContext(TeamContext);
  const ptext = "hover or click to view profile";
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
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
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {team.map((item, id) => {
        return (
          <div className="slidercard-wrapper" key={id}>
            <div className="slidercard">
              <div className="slidercard-image overlay-2">
                <img
                  src={item.img}
                  alt={`${item.name}-${item.alt}`}
                  className="slider-img"
                />
                <div className="featured-model-text slider-overlay">
                  <h2>
                    {item.firstName}
                    <br />
                    {item.lastName}
                  </h2>

                 
                  <p>{ptext}</p>
                  <p>{ptext}</p>
                </div>
              </div>
              <ul className="slidersocial-icons">
                <li>
                  <a href={item.fblink === "" ? "/about" : item.fblink}>
                    <UilFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href={
                      item.whatsapplink === "" ? "/about" : item.whatsapplink
                    }
                  >
                    <UilWhatsapp />
                  </a>
                </li>
                <li>
                  <a href={item.instalink === "" ? "/about" : item.instalink}>
                    <UilInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href={item.twitterlink === "" ? "/about" : item.twitterlink}
                  >
                    <UilTwitter />
                  </a>
                </li>
              </ul>
              <div className="slider-details">
                <h2>
                  {`${item.firstName} ${item.lastName}`}
                  <span className="sliderjob-title">{item.title}</span>
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default SliderCard;
