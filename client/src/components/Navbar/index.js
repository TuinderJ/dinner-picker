import React, { useState } from "react";
import {
  NavbarContainer,
  LeftCotainer,
  RightCotainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  Toggler
} from "../Navbar/navbar.style";
import LogoPng from "../../assets/logo.png";

export default function Header() {
  return (
    <NavbarContainer>
      <NavbarInnerContainer>
        <LeftCotainer>
          <Logo src={LogoPng}></Logo>
        </LeftCotainer>
        <RightCotainer>
          <NavbarLinkContainer>
            <NavbarLink to="/AddRecipe">Add Recipe</NavbarLink>
            <NavbarLink to="AllRecipes">All Recipes</NavbarLink>
            <NavbarLink to="Menu">Menu</NavbarLink>
            <Toggler></Toggler>
          </NavbarLinkContainer>
        </RightCotainer>
      </NavbarInnerContainer>
    </NavbarContainer>
  );
}
