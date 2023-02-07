import styled from 'styled-components';
import { Link } from 'react-router-dom';

// COLORS:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// FONTS:
// font-family: 'Berkshire Swash', cursive; <---TITLES
// font-family: 'Nunito', sans-serif; < --- MAIN

// BACKGROUND STYLING
export const AddBody = styled.div`
  width: 100%;
  height: 950px;
  background-color: #fff1d8;
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

export const SContainer = styled.div`
  width: 90%;
  height: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

//TITLE CONTAINER
export const STitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b100e;
`;

export const STitle = styled.div`
  width: 90%;
  height: 100%;
  font-size: 30px;
  font-weight: 600;
  color: #fff1d8;
  display: flex;
  align-items: center;
`;

//RECIPE INFORMATION CONTAINER
export const SFormContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.div`
  width: 90%;
  height: 90%;
`;

export const TopDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InputsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #1b100e;
`;

export const SLabel = styled.label`
  font-size: 18px;
  font-weight: 600;
`;

export const SInput = styled.input`
  width: 75%;
  height: 30px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1b100e;
  font-size: 15px;
  padding-left: 15px;

  &:focus {
    border: 2px solid #1b100e;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 96%;
  overflow: hidden;
  border: 2px solid;
`;

export const SImage = styled.img`
  width: 100%;
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: 50%;
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const STextArea = styled.textarea`
  width: 95%;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1b100e;
  font-size: 15px;
  color: #1b100e;
  resize: none;
  font-family: 'Nunito', sans-serif;

  &:focus {
    border: 2px solid #1b100e;
  }
`;

export const SBtnWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const SButton = styled.button`
  width: 130px;
  height: 40px;
  font-family: inherit;
  outline: none;
  border: none;
  background: #1b100e;
  color: #ff6464;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
`;
