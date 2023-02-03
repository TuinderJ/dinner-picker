import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import AddRecipe from "./components/AddRecipe";
import AllRecipes from "./components/AllRecipes";
import Menu from "./components/Menu";
import Login from "./components/Login";
import "./style.css";

export default function App() {
  const [activePage, setActivePage] = useState("");
  return (
    <>
      <Navbar activePage={activePage}  />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/AddRecipe"
          element={<AddRecipe setActivePage={setActivePage} />}
        />
        <Route
          path="/AllRecipes"
          element={<AllRecipes setActivePage={setActivePage} />}
        />
        <Route path="/Menu" element={<Menu setActivePage={setActivePage} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </>
  );
}
