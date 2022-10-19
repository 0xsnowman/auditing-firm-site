import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Header, Footer } from "ui/organisms";
import {
  Audit,
  Smart,
  DApp,
  NFT,
  Ethereum,
  BNB,
  Avalanche,
  Polygon,
  Tron,
  Company,
  Disclaimer,
  Privacy,
  Terms
} from "ui/pages";
import "styles/index.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Audit />} />
        <Route path="/security-audit" element={<Smart />} />
        <Route path="/dapp-audit" element={<DApp />} />
        <Route path="/nft-audit" element={<NFT />} />
        <Route path="/ethereum" element={<Ethereum />} />
        <Route path="/bnb" element={<BNB />} />
        <Route path="/avalanche" element={<Avalanche />} />
        <Route path="/polygon" element={<Polygon />} />
        <Route path="/tron" element={<Tron />} />
        <Route path="/company" element={<Company />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
