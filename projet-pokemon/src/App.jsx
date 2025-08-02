import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";       
import PokemonDetails from "../src/assets/components/PokemonDetails";
import Footer from "./assets/components/Footer";               
import Home from "./assets/components/Home";                   

export default function App() {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>

      <Footer/>
    </Router>
  );
}
