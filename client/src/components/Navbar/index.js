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

export default function Header() {
  return (
    <NavbarBackground>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={LogoPng}></Logo>
        </LogoContainer>
        <ListContainer>
          <LinksContainer>
            <NavbarLink to="/AddRecipe">ADD RECIPE</NavbarLink>
            <LittleDot>•</LittleDot>
            <NavbarLink to="/AllRecipes">ALL RECIPES</NavbarLink>
            <LittleDot>•</LittleDot>
            <NavbarLink to="/Menu">MENU</NavbarLink>
          </LinksContainer>
          <LogButtonContainer>
            <LogButton to="/Login">ACCOUNT</LogButton>
            {/* <LogButton to="Login">L O G I N</LogButton> */}
          </LogButtonContainer>
        </ListContainer>
      </NavbarContainer>
    </NavbarBackground>
  );
}
