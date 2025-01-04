import React from "react";
import { useHistory } from "react-router-dom";
import "../css/HomePage.css";
import HomeButton from "../components/HomeButton";
import "../../images/iteration-1-images/logo.svg";

function HomePage() {
  const history = useHistory();

  const navigateToOrder = () => {
    history.push("/order");
  };

  return (
    <div className="homepage">
      <div className="homepage-text">
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton onClick={navigateToOrder} data-cy="home-button" />
      </div>
    </div>
  );
}

export default HomePage;
