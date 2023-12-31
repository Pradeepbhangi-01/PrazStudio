import React from "react";
import "./Hero.scss";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="hero">
      <div className="hero-content center">
        <h1 className="heading">Exclsive Print and ArtWork</h1>
        <p className="subheading">
          Exclusive Art Places, for the Exclusive You.
        </p>
        <button
          className="cta btn-primary"
          onClick={() => navigate("/category")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
}

export default Hero;
