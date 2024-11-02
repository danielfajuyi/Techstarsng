import React from "react";
import "./main.scss";
import main02 from "../../../../assets/images/main02.png";

const Main = () => {
  return (
    <>
      <main>
        <div className="main-01">
          <h4>For Clients</h4>
          <h2>Hire Professional Talents</h2>
          <p>
            Collaborate with an extensive community of skilled freelancers to
            accomplish tasks—whether it's fast-paced projects or substantial
            transformations.
          </p>

          <button> Hire Talents </button>
        </div>
        <div className="main-02">
          <img src={main02} alt="" />
        </div>
      </main>
    </>
  );
};

export default Main;
