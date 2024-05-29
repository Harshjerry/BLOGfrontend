import React from "react";
import "./Front.css";
import SplineViewer from "../../spline";

const Front = () => {
  return (
    <div className="front-container">
      <SplineViewer  url="https://prod.spline.design/OfvkftoNK5hoKCwc/scene.splinecode" />
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
