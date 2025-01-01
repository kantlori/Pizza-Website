import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../images/iteration-1-images/logo.svg";
import HomeButton from "../components/Home/HomeButton";
import HeaderNavs from "../components/Home/HeaderNavs";
import MainCard from "../components/Home/MainCard";
import SuggestionCards from "../components/Home/SuggestionCards";
import foodCategories from "../FoodCategories";
import ExpressCards from "../components/Home/ExpressCards";
import { expressMenuProducts } from "../HomeSuggestionData";
import Footer from "../components/Footer/Footer";

function HomePage({ onButtonClick, isShrink }) {
  const [expressMenu, setExpressMenu] = useState("pizza");

  function handleExpressMenuClick(category) {
    setExpressMenu(category);
  }

  return (
    <div className="header">
      <header className={`header-text ${isShrink ? 'shrink' : ''}`}>
        <img src={logo} alt="Logo" />
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton onClick={onButtonClick} data-cy="home-button" />
      </header>
      <nav className="header-navbar">
        <HeaderNavs item={foodCategories} onNavClick={handleExpressMenuClick} />
      </nav>
      <main>
        <MainCard />
        <SuggestionCards />
        <ExpressCards items={expressMenuProducts[expressMenu]} />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
