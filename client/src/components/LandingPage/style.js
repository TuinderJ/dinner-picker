import styled from 'styled-components';
import BackgroundImg from '../../assets/Background02.png';
import MobileImg from '../../assets/MobileBG.png';
import IpadImg from '../../assets/IpadBG.png';
import { Link } from 'react-router-dom';

export const BodyContainer = styled.div`
  background-color: #fff1d8;
  width: 100%;
  height: 88vh;
  display: flex;
  text-align: center;
  justify-content: center;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  flex-direction: column;
  background-image: url(${BackgroundImg});
  background-repeat: no-repeat;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    background-image: url(${IpadImg});
  }

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    background-image: url(${MobileImg});
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

export const SignUpLink = styled(Link)`
  width: 10rem;
  height: 4rem;
  background-color: #1b100e;
  border: none;
  font-family: 'Nunito', sans-serif;
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
