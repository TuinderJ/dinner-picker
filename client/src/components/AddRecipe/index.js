import React, { useEffect } from "react";

export default function AddRecipe({ setActivePage }) {
  useEffect(() => {
    setActivePage("AddRecipe");
  }, []);
  return <div>ADD RECIPE</div>;
}
