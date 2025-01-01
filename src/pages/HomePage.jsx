import React, { useState } from "react";
import "./HomePage.css";
import "../../images/iteration-1-images/logo.svg";
import HomeButton from "../components/Home/HomeButton";
import HeaderNavs from "../components/Home/HeaderNavs";
import MainCard from "../components/Home/MainCard";
import SuggestionCards from "../components/Home/SuggestionCards";
import foodCategories, { expressMenuCategories } from "../FoodCategories";
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
        <img src="../../images/iteration-1-images/logo.svg" alt="" />
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton onClick={onButtonClick} data-cy="home-button" />
      </header>
      <nav className="header-navbar">
        <HeaderNavs item={foodCategories} onNavClick={handleExpressMenuClick} />
      </nav>
      <article className="sug-cards">
        <MainCard />
        <SuggestionCards />
      </article>
      <article className="express-menu">
        <h3>En çok paketlenen menüler</h3>
        <p>Acıktıran Kodlara Doyuran Lezzetler</p>
        <nav>
          <HeaderNavs item={expressMenuCategories} onNavClick={handleExpressMenuClick} />
        </nav>
        <div className="express-menu-cards">
          <ExpressCards item={expressMenuProducts[expressMenu]} />
        </div>
      </article>
      <Footer />
    </div>
  );
}

export default HomePage;
