import styled from 'styled-components';
import { Link } from 'react-router-dom';

// COLORS:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// FONTS
// font-family: 'Nunito', sans-serif;

export const AllBody = styled.div`
  width: 100vw;
  height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
`;

export const StyleSquare = styled.div`
  width: 97%;
  height: 95%;
  border: 2px solid #1b100e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.form`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
export const SInputWrapper = styled.div`
  width: 700px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const SLabel = styled.label`
  font-size: 50px;
  font-weight: 900;
  margin-bottom: 50px;
`;
export const SInput = styled.input`
  width: 670px;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1b100e;
  font-size: 30px;
  padding-left: 15px;

  &:focus {
    border: 2px solid #1b100e;
  }
`;
export const SSelect = styled.select`
  width: 500px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #1b100e;
`;
export const SOption = styled.option`
  width: 300px;
  background-color: #fff1d8;
  border: 2px solid #1b100e;

  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;

  &:focus {
    background-color: transparent;
  }
`;
export const SBtn = styled.button`
  width: 300px;
  height: 50px;
  background-color: #1b100e;
  color: #ff6464;
  font-size: 25px;
  font-family: inherit;
  outline: none;
  border: none;
  cursor: pointer;
`;
