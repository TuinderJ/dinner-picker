import React, { useEffect } from "react";

export default function Menu({ setActivePage }) {
  useEffect(() => {
    setActivePage("Menu");
  }, []);
  return <div>YOUT MENU GOES HERE</div>;
}
