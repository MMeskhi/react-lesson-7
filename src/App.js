import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProductSearch from "./components/ProductSearch";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={ProductSearch} />
      <Route path="/product/:keyword" component={ProductDetails} />
    </Router>
  );
};

export default App;
