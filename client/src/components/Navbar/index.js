import React from "react";
import {
  NavbarBackground,
  NavbarContainer,
  LogoContainer,
  Logo,
  ListContainer,
  LinksContainer,
  NavbarLink,
  LittleDot,
  LogButtonContainer,
  LogButton,
} from "../Navbar/navbar.style";
import LogoPng from "../../assets/logo.png";

export default function Header({ activePage }) {
  return (
    <NavbarBackground>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={LogoPng}/>
        </LogoContainer>
        <ListContainer>
          <LinksContainer>
            {/* <NavbarLink
              className={activePage === "AddRecipe" ? "active" : ""}
              to="/AddRecipe"
            >
              ADD RECIPE
            </NavbarLink>
            <LittleDot>•</LittleDot>
            <NavbarLink
              className={activePage === "AllRecipes" ? "active" : ""}
              to="/AllRecipes"
            >
              ALL RECIPES
            </NavbarLink>
            <LittleDot>•</LittleDot>
            <NavbarLink
              className={activePage === "Menu" ? "active" : ""}
              to="/Menu"
            >
              MENU
            </NavbarLink> */}
          </LinksContainer>
          <LogButtonContainer>
            {/* <LogButton to="/Login">ACCOUNT</LogButton> */}
            <LogButton to="/Login">L O G I N</LogButton>
          </LogButtonContainer>
        </ListContainer>
      </NavbarContainer>
    </NavbarBackground>
  );
}
