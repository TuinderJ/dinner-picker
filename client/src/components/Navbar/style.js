import styled from 'styled-components';
import { Link } from 'react-router-dom';

// NAVIGATION BAR MAIN CONTAINER

export const NavbarBackground = styled.div`
  background-color: #fff1d8;
  width: 100%;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito', sans-serif;

  @media screen and (max-width: 768px) {
    background-color: #fff1d8;
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Nunito', sans-serif;
  }
`;

export const NavbarContainer = styled.nav`
  background-color: #fff1d8;
  width: 97%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    flex-direction: column;
    border: 2px solid #1b100e;
  }

  @media screen and (max-width: 576px) {
  }
`;

// LOGO CONTAINER

export const LogoContainer = styled.div`
  flex: 20%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #1b100e;

  @media (max-width: 768px) {
    flex: 70%;
    width: 100%;
    height: 70%;
    border: none;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 80%;
    border: none;
  }
`;

export const LinkLogo = styled(Link)`
  flex: 20%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex: 70%;
    width: 100%;
    height: 70%;
    border: none;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 80%;
    border: none;
  }
`;

export const Logo = styled.img`
  width: 50%;

  @media (max-width: 768px) {
    width: 30%;
  }

  @media (max-width: 576px) {
    width: 40%;
  }
`;

// TABS & LOG BUTTON CONTAINER

export const ListContainer = styled.div`
  flex: 80%;
  width: 100%;
  height: 100%;
  border-top: 2px solid #1b100e;
  border-bottom: 2px solid #1b100e;
  display: flex;

  @media (max-width: 768px) {
    flex: 30%;
    height: 30%;
    border-top: 2px solid #1b100e;
    border-bottom: none;
  }

  @media (max-width: 576px) {
    height: 20%;
    border-top: 2px solid #1b100e;
  }
`;

export const LinksContainer = styled.div`
  flex: 80%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;

export const NavbarLink = styled(Link)`
  text-decoration: none;
  color: #1b100e;
  font-weight: 800;
  font-size: 20px;

  &.active {
    color: #ff6464;
  }

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 576px) {
    font-size: 11px;
  }
`;

export const LittleDot = styled.p`
  margin-top: 0.9rem;
  color: #1b100e;

  @media (max-width: 768px) {
    margin-top: 0.9rem;
    color: #1b100e;
  }

  @media (max-width: 576px) {
    margin-top: 0.9rem;
    color: #1b100e;
  }
`;

export const LogButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  flex: 20%;
  display: flex;
  align-self: center;
  text-align: center;

  @media (max-width: 768px) {
  }

  @media (max-width: 576px) {
  }
`;

export const BlackSquare = styled.div`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #1b100e;
  color: #ff6464;
  font-size: 19px;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;

export const LogBtn = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background-color: #1b100e;
  color: #ff6464;
  font-size: 19px;

  @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
