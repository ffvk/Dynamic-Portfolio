// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioPage from "./page/PortfolioPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<PortfolioPage />} />
      </Routes>
    </Router>
  );
};

export default App;
