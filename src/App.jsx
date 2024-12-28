import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage"

function App() {
  const [showOrderPage, setShowOrderPage] = useState(false);

  return (
    <div>
      {!showOrderPage ? (
        <HomePage onButtonClick={() => setShowOrderPage(true)} />
      ) : (
        <OrderPage onBack={() => setShowOrderPage(false)} />
      )}
    </div>
  );
}

export default App;
