import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/add" element={<AddRecipe />} />
        <Route path="/all" element={<AllRecipes />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </>
  );
}
