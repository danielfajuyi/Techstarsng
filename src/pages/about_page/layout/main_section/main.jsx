import React from "react";
import "./main.scss";
import Features from "../../component/features/features";
import data from "../../data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Main = () => {

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black", 
        position:"absolute", 
        top:"310px",
         right:"45%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        position: "absolute",
        top: "310px",
        left: "50%"
      }}
      onClick={onClick}
    />
  );
}

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
     nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <main className="main-section">
        <div className="stats-container">
          <h2 className="heading">Trust The Numbers</h2>

          <div className="stats-blog">
            <div className="stats-info first">
              <p>
                <span className="first-hundred">100k+</span>
              </p>
              <p className="client">
                <h3>Active Clients</h3>
              </p>
              <p className="offer">
                Join our platform to tap into this expansive network of clients
                actively seeking top-tier talent.
              </p>
            </div>

            <div className="stats-info second">
              <p>
                <span className="second-hundred">100k+</span>
              </p>
              <p className="client">
                <h3>Active talent</h3>
              </p>
              <p className="offer">
                With over 100,000 active talents, our platform connects you with
                a vibrant community of freelancers, ensuring you have the talent
                you need to bring your projects to life.
              </p>
            </div>

            <div className="stats-info third">
              <p className="ninety-five">95%</p>
              <p className="client">
                <h3>Success rate</h3>
              </p>
              <p className="offer">
                With a remarkable 95% success rate, our clients consistently
                find the right talent, complete projects with precision, and
                leave a trail of satisfied freelancers.
              </p>
            </div>
          </div>
        </div>

        <div className="attribute-container">
          <div className="mission">
            <h2>Our Mission</h2>
            <p className="text">
              Empowering individuals to thrive in the digital economy by
              providing a platform that fosters creativity, collaboration, and
              flexibility. Our mission is to connect freelancers with
              opportunities that enable them to showcase their skills, pursue
              their passions, and achieve financial independence.
            </p>
          </div>

          <div className="vision">
            <h2>Our Vision</h2>
            <p className="text">
              To create a borderless marketplace where freelancers have
              unrestricted access to opportunities, resources, and support,
              regardless of location or background. We envision a future where
              freelancers are not limited by traditional constraints but are
              free to pursue their passions, expand their horizons, and make a
              meaningful impact on the world.
            </p>
          </div>

          <div className="values">
            <h2>Our Values</h2>
            <p className="text">
              We measure our success not just by financial metrics but by the
              positive impact we have on the lives of freelancers around the
              world. We strive to create value not only for our stakeholders but
              also for society as a whole, making a difference through our
              actions, initiatives, and advocacy efforts
            </p>
          </div>
        </div>

        <div className="slider-container">
          <div>
            <Slider {...settings}>
              {data.map((d) => {
                const { preview, img, client,index } = d;
                return (
                  <section className="slides" key={index}>
                    <div className="preview">
                      <p>{preview}</p>
                    </div>
                    <div className="underline"></div>
                    <div className="profile">
                      <div className="thumbnail">
                        <img src={img} alt="thumbnail" />
                      </div>
                      <div className="client">
                        <h4>{client}</h4>
                      </div>
                    </div>
                  </section>
                );
              })}
            </Slider>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
