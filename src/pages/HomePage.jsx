import React from "react";
import "../css/HomePage.css";
import HomeButton from "../components/HomeButton";
import "../../images/iteration-1-images/logo.svg"

function HomePage({ onButtonClick }) {
  return (
    <div className="homepage">
      <div className="homepage-text">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton onClick={onButtonClick} data-cy="home-button" />
      </div>

    </div>
  );
}

export default HomePage;
