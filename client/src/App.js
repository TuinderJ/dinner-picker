import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Menu from "./components/Menu";
import { createGlobalStyle } from "styled-components";

// Color Palette use:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// Fonts use:
// font-family: 'Berkshire Swash', cursive;
// font-family: 'Nunito', sans-serif;

const GlobalStyle = createGlobalStyle`
* {
font-family: 'Nunito', sans-serif;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
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
