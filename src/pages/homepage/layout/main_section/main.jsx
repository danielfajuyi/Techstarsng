import React from "react";
import "./main.scss";
import { features } from "../../../../assets/data/data";
import earnings01 from "../../../../assets/images/earnings01.png";
import earnings02 from "../../../../assets/images/earnings02.png";
const Main = () => {
  return (
    <>
      <main>
        {features.map((item, id) => {
          return (
            <div>
              <div className="main-01">
                <h4>{item.mainDesc}</h4>
                <h2>{item.mainText}</h2>
                <p>{item.paragraphText}</p>

                <button> {item.buttonText}</button>
              </div>
              <div className="main-02">
                <img src={item.mainImg} alt="" />
              </div>
            </div>
          );
        })}

        <div>
          <h2>
            Recommend Zealworkers, <br></br>
            Earn Commissions.
          </h2>

          <p>
            As Zealworkers affiliate you can bring value to your community by
            sharing in our mission to esteem employer and freelancer to create
            economy opportunities for all.
          </p>
          <button>Start Earning</button>
          <div>
            <img src={earnings01} alt="" />
          </div>
          <div>
            <img src={earnings02} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
