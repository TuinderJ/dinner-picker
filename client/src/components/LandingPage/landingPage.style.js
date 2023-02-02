import styled from "styled-components";
import { Link } from "react-router-dom";
import BackgroundImg from "../../assets/Background02.png";

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
`;

export const MainContainer = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  width: 100%;
  flex: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ff6464;
`;

export const TitleImage = styled.img`
  width: 50%;
`;

export const SignUpBtnContainer = styled.div`
  width: 100%;
  flex: 30%;
`;

export const SignUpBtn = styled.button`
  width: 10rem;
  height: 4rem;
  background-color: #1b100e;
  font-family: "Nunito", sans-serif;
  color: #ff6464;
  font-size: 1.6rem;
  cursor: pointer;
`;
