import React from 'react';
import { NavbarBackground, NavbarContainer, LogoContainer, Logo, ListContainer, LinksContainer, NavbarLink, LittleDot, LogButtonContainer, LogButton } from './navbar.style';
import LogoPng from '../../assets/logo.png';
import Auth from '../../utils/auth';

export default function Header({ activePage }) {
  const handleLogout = () => Auth.logout();

  return (
    <NavbarBackground>
      <NavbarContainer>
        <LogoContainer>
          <Logo src={LogoPng} />
        </LogoContainer>
        <ListContainer>
          {Auth.loggedIn() ? (
            <>
              <LinksContainer>
                <NavbarLink to='/AddRecipe'>ADD RECIPE</NavbarLink>
                <LittleDot>•</LittleDot>
                <NavbarLink to='/AllRecipes'>ALL RECIPES</NavbarLink>
                <LittleDot>•</LittleDot>
                <NavbarLink to='/Menu'>MENU</NavbarLink>
              </LinksContainer>
              <LogButtonContainer>
                <LogButton onClick={handleLogout}>ACCOUNT</LogButton>
              </LogButtonContainer>
            </>
          ) : (
            <LogButtonContainer>
              {/* <LogButton onClick={handleLogin}>L O G I N</LogButton> */}
              <NavbarLink to='/Login'>Login</NavbarLink>
            </LogButtonContainer>
          )}
        </ListContainer>
      </NavbarContainer>
    </NavbarBackground>
  );
}
