import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/Background02.png";
import MobileImg from "../../assets/MobileBG.png";
import IpadImg from "../../assets/IpadBG.png";

// COLORS:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// FONTS:
// font-family: 'Berkshire Swash', cursive; <---TITLES
// font-family: 'Nunito', sans-serif; < --- MAIN

export const BodyContainer = styled.div`
  background-image: url(${BackgroundImg});
  background-color: #fff1d8;
  width: 100%;
  height: 88vh;
  display: flex;
  text-align: center;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    background-image: url(${IpadImg});
    background-repeat: no-repeat;
  }
  
  @media screen and (max-width: 576px) {
    background-image: url(${MobileImg});
    background-repeat: no-repeat;
  }
  `;

export const MainContainer = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  flex: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff6464;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex: 20%;
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    flex: 30%;
    margin-top: 2rem;
  }
`;

export const TitleImage = styled.img`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const SignUpBtnContainer = styled.div`
  width: 100%;
  flex: 30%;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    flex: 70%;
  }
`;

export const SignUpBtn = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: #1b100e;
  border: none;
  font-family: "Nunito", sans-serif;
  color: #ff6464;
  font-size: 1.6rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 8.5rem;
    height: 3.5rem;
    font-size: 1.6rem;
  }

  @media screen and (max-width: 576px) {
    width: 7rem;
    height: 2.7rem;
    font-size: 1rem;
  }
`;
