import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "ui/organisms";
import Home from "ui/pages/home";

import "styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
