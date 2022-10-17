import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "ui/organisms";
import { Home, Audit, Smart } from "ui/pages";
import "styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/audit" element={<Audit />} />
        <Route path="/smart" element={<Smart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
