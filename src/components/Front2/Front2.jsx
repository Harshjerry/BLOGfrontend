import React from "react";
import "./Front2.css";
import backgroundImage from "../../images/blog2.png";
import backgroundImage2 from "../../images/blm2.png";

const Front = () => {
  return (
    <div className="front-container">
      <img src={backgroundImage} alt="Ad Background" className="background-img" />
      <img src={backgroundImage2} alt="Ad Background" className="background-img2" />
      <div className="front-head-box">
        <h1 className="front-head">BLOG</h1>
      </div>
      <div className="front-caption-box">
        <h1 className="front-caption">Where Words Create Worlds: Welcome to our Blogging Haven</h1>
      </div>
    </div>
  );
};

export default Front;
