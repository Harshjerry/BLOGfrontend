import React from "react";
import "./newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">

      <div className="newsletter-wrapper">
      
        <div className="newsletter-item">
          <div className="newsletter-caption-box">
            <h3 className="newsletter-caption">
              Sign-up for the HarshBlog, get latest updates on new destinations, new experiences, inspiration stories into your mailbox
            </h3>
          </div>
        </div>
        <div className="newsletter-item">
          <input className="newsletter-input" placeholder="Enter your email" />
        </div>
        <div className="newsletter-item">
          <button className="newsletter-button">Subscribe</button>
        </div>

      </div>
    </div>

  );
};

export default Newsletter;
