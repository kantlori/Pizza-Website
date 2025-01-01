import React, { useEffect, useState } from "react";
import { debounce } from 'lodash';
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [isShrink, setIsShrink] = useState(false);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.scrollY > 1) {
        setIsShrink(true);
      } else {
        setIsShrink(false);
      }
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-cy="app">
      {!showOrderPage && !showSuccessPage && (
        <HomePage onButtonClick={() => setShowOrderPage(true)} isShrink={isShrink} />
      )}
      {showOrderPage && !showSuccessPage && (
        <OrderPage
          onBack={() => setShowOrderPage(false)}
          onSuccess={() => {
            setShowOrderPage(false);
            setShowSuccessPage(true);
          }}
          isShrink={isShrink}
        />
      )}
      {showSuccessPage && (
        <SuccessPage onBack={() => {
          setShowSuccessPage(false);
          setShowOrderPage(false);
        }} />
      )}
    </div>
  );
}

export default App;
