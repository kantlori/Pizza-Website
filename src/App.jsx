import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OrderPage from "./pages/OrderPage";
import SuccessPage from "./pages/SuccessPage";

function App() {
  return (
    <Router>
      <div data-cy="app">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/order" component={OrderPage} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
