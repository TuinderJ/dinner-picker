import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "";

export default function App() {
    return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </>
  );
}