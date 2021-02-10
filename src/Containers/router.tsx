import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Details from "./Details";
import Home from "./Home";


function AppRouter() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route

        path="/individual/:pokemonName"
        component={Details} />
    </Router>
  );
}
export default AppRouter;
