import styled from 'styled-components';

// COLORS:
// pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

// FONTS:
// font-family: 'Berkshire Swash', cursive; <---TITLES
// font-family: 'Nunito', sans-serif; < --- MAIN

export const MenuDiv = styled.div`
  margin: 1em auto;
  padding: 2em;
  border: 2px solid #1b100e;
  width: 90vw;

  @media screen and (max-width: 500px) {
    width: 75vw;
    border: none;
  }
`;

export const ClearMenuButton = styled.button`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  background-color: #1b100e;
  color: #ff6464;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;

//MENU GENERATOR STYLING
export const MenuBody = styled.div`
  width: 100%;
  height: 950px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    max-height: 750px;
  }
`;

export const MenuStyleSquare = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
  }
`;

export const SFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const SForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 200px;
    justify-content: space-evenly;
  }
`;

export const SLabel = styled.label`
  font-size: 60px;
  font-weight: 600;
  color: #ff6464;

  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
`;

export const SInput = styled.input`
  width: 80px;
  height: 50px;
  background-color: transparent;
  outline: none;
  border: 2px solid #1b100e;
  font-size: 50px;
  font-weight: 600;
  padding: 10px 0px 5px 15px;
  margin-top: 10px;
  text-align: center;
  font-family: 'Nunito', sans-serif;

  @media screen and (max-width: 576px) {
    width: 40px;
    height: 20px;
    font-size: 25px;
    padding: 10px 10px 10px 10px;
    margin-top: 0px;
  }
`;

export const SSelect = styled.select`
  font-family: 'Nunito', sans-serif;
  width: 800px;
  height: 50px;
  background-color: transparent;
  border: 2px solid #1b100e;
  font-size: 20px;
  font-weight: 600;
  padding-left: 15px;

  @media screen and (max-width: 576px) {
    width: 250px;
    height: 30px;
    font-size: 15px;
    font-weight: 600;
    padding-left: 10px;
  }
`;

export const SOption = styled.option`
  background-color: #1b100e;
  color: #fff1d8;
  border: none;

  &:hover {
    background-color: green;
  }

  @media screen and (max-width: 576px) {
  }
`;

export const SBtn = styled.button`
  width: 200px;
  height: 60px;
  background-color: #1b100e;
  color: #fff1d8;
  font-size: 2rem;
  cursor: pointer;
  border: none;

  @media screen and (max-width: 576px) {
    width: 150px;
    height: 40px;
    font-size: 1rem;
  }
`;
