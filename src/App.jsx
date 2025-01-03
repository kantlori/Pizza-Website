import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showSuccessPage, setShowSuccessPage] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div data-cy="app">
      {!showOrderPage && !showSuccessPage && (
        <HomePage onButtonClick={() => setShowOrderPage(true)} selectedProduct={selectedProduct} />
      )}
      {showOrderPage && !showSuccessPage && (
        <OrderPage
          onBack={() => setShowOrderPage(false)}
          onSuccess={() => {
            setShowOrderPage(false);
            setShowSuccessPage(true);
          }}
          selectedProduct={selectedProduct}
        />
      )}
      {showSuccessPage && (
        <SuccessPage onBack={() => { setShowSuccessPage(false); setShowOrderPage(false); }} />
      )}
    </div>
  );
}

export default App;
