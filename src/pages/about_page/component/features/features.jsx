import React from "react";
import "./features.scss";
import { features } from "../../../../assets/data/data";

const Features = () => {
  return (
    <div className="container feature-box-wrapper">
      <div className="feature-box-row">
        {features.map((item, id) => {
          return (
            <div key={id} className="feature-box-column">
              <div className="feature-item">
                <div className="feature-item-head"></div>

                <div className="feature-item-main">
                  <h3>{item.headertext}</h3>
                  <p>{item.paragraphtext}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
