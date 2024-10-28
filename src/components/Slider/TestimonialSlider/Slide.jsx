import React from "react";

import { FaQuoteRight } from "react-icons/fa";
import TestimonialApi from "../../../Pages/Home/Components/Testimonials/TestimonialApi";

const Slide = ({
  id,
  image,
  design,
  name,
  offcer,
  post,
  desc,
  date,
  valueIndex,
  index,
}) => {
  let position = "nextSlide";
  if (valueIndex === index) {
    position = "activeSlide";
  }

  if (
    valueIndex === index - 1 ||
    (index === 0 && valueIndex === TestimonialApi.length - 1)
  ) {
    position = "lastSlide";
  }
  return (
    <article id="Main_slide" className={`d_flex  ${position}`} key={id}>
      <div className="Testimonial-left box_shadow-2 ">
        <div>
          <img src={image} alt="" />
        </div>

        <div className="slide_details  mtop">
          <span>{design}</span>
          <h2>{name}</h2>
          <label>{offcer}</label>
        </div>
      </div>

      <div className="Testimonial-right  ">
        <div className="slide_icon">
          <div className="slide_quota">
            <FaQuoteRight />
          </div>
        </div>

        <div className="slide_content box_shadow-2 mtop">
          <h1>{post}</h1>
          <h3>{date}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </article>
  );
};

export default Slide;
