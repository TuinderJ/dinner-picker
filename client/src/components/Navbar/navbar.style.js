import styled from "styled-components";
import { Link } from "react-router-dom";

// COLORS:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// FONTS:
// font-family: 'Berkshire Swash', cursive;
// font-family: 'Nunito', sans-serif;

// MEDIA QUERY EXAMPLE

// background-color: red;
// width: 100%;
// height: 11vh;

// @media screen and (max-width: 992px) {
//   background-color: blue;
//   width: 100%;
//   height: 11vh;
// }

// @media screen and (max-width: 600px) {
//   background-color: yellow;
//   width: 100%;
//   height: 11vh;
// }
// NAVIGATION BAR MAIN CONTAINER

export const NavbarContainer = styled.nav`
  background-color: #fff1d8;
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 13vh;
    display: flex;
    flex-direction: column;
    border: 2px solid #1b100e;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 11vh;
    display: flex;
    flex-direction: column;
    border: 2px solid #1b100e;
  }
`;

// LOGO CONTAINER

export const LogoContainer = styled.div`
  flex: 20%;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #1b100e;

  @media (max-width: 768px) {
    flex: 70%;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
  }
`;

export const Logo = styled.img`
  width: 10%;

  @media (max-width: 576px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 20%;
  }
`;

// TABS & LOG BUTTON CONTAINER

export const ListContainer = styled.div`
  @media (max-width: 576px) {
    flex: 30%;
    width: 100%;
    height: 20%;
    border-top: 2px solid #1b100e;
    display: flex;
  }

  @media (max-width: 768px) {
    flex: 30%;
    width: 100%;
    height: 30%;
    border-top: 2px solid #1b100e;
    display: flex;
  }

  /* @media (max-width: 992px) {
    flex: 80%;
    width: 50%;
    height: 100%;
    border-top: 2px solid #1b100e;
    border-bottom: 2px solid #1b100e;
    display: flex;
  } */
`;

export const LinksContainer = styled.div`
  @media (max-width: 576px) {
    flex: 80%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  @media (max-width: 768px) {
    flex: 80%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  /* @media (max-width: 992px) {
    flex: 80%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  } */
`;

export const NavbarLink = styled(Link)`
  @media (max-width: 576px) {
    text-decoration: none;
    color: #1b100e;
    font-weight: 800;
    font-size: 11px;
  }

  @media (max-width: 768px) {
    text-decoration: none;
    color: #1b100e;
    font-weight: 800;
    font-size: 17px;
  }

  @media (max-width: 992px) {
    text-decoration: none;
    color: #1b100e;
    font-weight: 800;
    font-size: 12px;
  }
`;

export const LittleDot = styled.p`
  @media (max-width: 576px) {
    margin-top: 0.9rem;
    color: #1b100e;
  }

  @media (max-width: 768px) {
    margin-top: 0.9rem;
    color: #1b100e;
  }

  /* @media (max-width: 992px) {
    margin-top: 0.9rem;
    color: #1b100e;
  } */
`;

export const LogButtonContainer = styled.div`
  @media (max-width: 576px) {
    flex: 20%;
    display: flex;
    align-self: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    flex: 20%;
    width: 100%;
    height: 100%;
    display: flex;
    align-self: center;
    text-align: center;
  }

  @media (max-width: 992px) {
    flex: 20%;
    display: flex;
    align-self: center;
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;

export const LogButton = styled.button`
  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #1b100e;
    color: #ff6464;
    font-size: 12px;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #1b100e;
    color: #ff6464;
    font-size: 17px;
  }

  @media (max-width: 992px) {
    width: 100%;
    height: 100%;
    border: none;
    background-color: #1b100e;
    color: #ff6464;
    font-size: 12px;
  }
`;
