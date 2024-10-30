import React from "react";
import "./hero.scss";
import blogImage from "../../../../assets/images/blogImage.jpg";

const Hero = () => {
  return (
    <>
     <main className="container">
       <header className="hero-section">
        <h2>About <span className="u">u</span>s</h2>
      </header>

      <div className="blog-container">
        <div className="image-container">
          <img src={blogImage} className="blog-image" alt="blogimage" />
        </div>
        <div className="text">
          <p>Zealworkers is a freelancing marketplace established in the year 2019, with the aim of bridging the gap between freelancers and potential client in need of skillful and resourceful zealous worker.
Zealworkers set itself aside from the traditional market place by solving the issue of cross border transaction in digital marketplace and complexity in the user experience by integrating Blockchain technology and simple user interface.
</p>
        </div>
      </div>
     
 </main>


    </>
  );
};

export default Hero;
