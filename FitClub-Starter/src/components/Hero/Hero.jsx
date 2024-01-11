import React from "react";
import "./Hero.css";
import Header from "../Header/Header";

function Hero() {
  return (
    <div>
      <div className="hero">
        <div className="left-h">
          <Header />
          <div className="the-best-ad">
            <div></div>
            <span>the best fitness club in the town</span>
          </div>
        </div>
        <div className="right-h">right side</div>
      </div>
    </div>
  );
}

export default Hero;
