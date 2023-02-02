import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Menu from "./components/Menu";
import "./style.css"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/AddRecipe" element={<AddRecipe />} />
        <Route path="/AllRecipes" element={<AllRecipes />} />
        <Route path="/Menu" element={<Menu />} />
        {/* <Route path="/Login" element={<Login />} /> */}
      </Routes>
    </>
  );
}
