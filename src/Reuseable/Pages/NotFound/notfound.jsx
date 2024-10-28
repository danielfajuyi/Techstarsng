import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "./notfound.scss";

const NotFound = () => {
  let navigate = useNavigate();

  const previousNavigator = () => {
    navigate(-1);
  };

  const HomeNavigator = () => {
    navigate("/");
  };

  return (
    <div
      id="notfound"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>

        <h2>404 - Page not found</h2>
        <p>
          The page you are looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>
        <div className="toback-container">
          <button className="btn_shadow toback" onClick={HomeNavigator}>
            Go To Homepage
          </button>

          <button className="btn_shadow toback" onClick={previousNavigator}>
            Go To Previous Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
