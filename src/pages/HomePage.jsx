import React, { useState } from "react";
import "./HomePage.css";
import logo from "../../images/iteration-1-images/logo.svg";
import HomeButton from "../components/Home/HomeButton";
import HeaderNavs from "../components/Home/HeaderNavs";
import MainCard from "../components/Home/MainCard";
import SuggestionCards from "../components/Home/SuggestionCards";
import foodCategories, { expressMenuCategories } from "../FoodCategories";
import ExpressCards from "../components/Home/ExpressCards";
import Footer from "../components/Footer/Footer";
import expressMenuProducts from "../HomeSuggestionData";

function HomePage({ onButtonClick, isShrink }) {
  const [expressMenu, setExpressMenu] = useState("pizza");
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleExpressMenuClick(category) {
    setExpressMenu(category);
  }

  function handleProductClick(product) {
    setSelectedProduct(product);
  }

  return (
    <div className="header">
      <header className={`header-text ${isShrink ? 'shrink' : ''}`}>
        <img src={logo} alt="Logo" />
        <h4>KOD ACIKTIRIR PİZZA, DOYURUR</h4>
        <HomeButton onClick={onButtonClick} data-cy="home-button" />
      </header>
      <nav className="header-navbar">
        <HeaderNavs item={expressMenuCategories} onNavClick={handleExpressMenuClick} />
      </nav>
      <main>
        <MainCard />
        <SuggestionCards />
        <p>en çok paketlenen menüler</p>
        <h5>Acıktıran Kodlara Doyuran Lezzetler</h5>
        <ExpressCards
          items={expressMenuProducts[expressMenu]}
          onProductClick={handleProductClick}
        />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
