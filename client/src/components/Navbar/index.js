import React from 'react';
import { NavbarBackground, LogBtn, NavbarContainer, LogoContainer, LinkLogo, Logo, ListContainer, LinksContainer, NavbarLink, LittleDot, LogButtonContainer, BlackSquare } from './style';
import LogoPng from '../../assets/logo.png';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

export default function Header({ activePage }) {
  const handleLogout = () => Auth.logout();

  return (
    <NavbarBackground>
      <NavbarContainer>
        <LogoContainer>
          <LinkLogo to='/'>
            <Logo src={LogoPng} />
          </LinkLogo>
        </LogoContainer>
        <ListContainer>
          {Auth.loggedIn() ? (
            <>
              <LinksContainer>
                <NavbarLink className={activePage === 'AddRecipe' ? 'active' : ''} to='/AddRecipe'>
                  ADD RECIPE
                </NavbarLink>
                <LittleDot>•</LittleDot>
                <NavbarLink className={activePage === 'AllRecipes' ? 'active' : ''} to='/AllRecipes'>
                  ALL RECIPES
                </NavbarLink>
                <LittleDot>•</LittleDot>
                <NavbarLink className={activePage === 'Menu' ? 'active' : ''} to='/Menu'>
                  MENU
                </NavbarLink>
              </LinksContainer>
              <LogButtonContainer>
                <LogBtn onClick={handleLogout}>LOGOUT</LogBtn>
              </LogButtonContainer>
            </>
          ) : (
            <>
              <LinksContainer></LinksContainer>
              <LogButtonContainer>
                <BlackSquare></BlackSquare>
              </LogButtonContainer>
            </>
          )}
        </ListContainer>
      </NavbarContainer>
    </NavbarBackground>
  );
}
