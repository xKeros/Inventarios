// eslint-disable-next-line no-unused-vars
import React from "react";
import Layout from "./Pages/Layout";
import { BrowserRouter, Router, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Router>
          <Route path="/" component={Layout} />
        </Router>
      </BrowserRouter>
    </div>
  );
};

export default App;
