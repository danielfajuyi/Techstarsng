import React from "react";
import "./main.scss";
import Features from "../../component/features/features";

const Main = () => {
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
      </main>
    </>
  );
};

export default Main;
