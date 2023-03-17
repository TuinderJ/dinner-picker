import styled from 'styled-components';

// BACKGROUND STYLING
export const AddBody = styled.div`
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

export const StyleSquare = styled.div`
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

export const SContainer = styled.div`
  width: 90%;
  height: 85%;

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 95%;
  }
`;

//TITLE CONTAINER
export const STitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b100e;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 8%;
  }
`;

export const STitle = styled.div`
  display: inline;
  font-size: 30px;
  font-weight: 600;
  color: #fff1d8;
  margin-left: 1.5rem;

  @media screen and (max-width: 576px) {
    font-size: 25px;
    width: max-content;
    margin-left: 0.5rem;
  }
`;

export const DeleteButton = styled.button`
  background-color: var(--smokyBlack);
  border: none;
  color: var(--pinkysh);
  cursor: pointer;
  padding-right: 1.5rem;
  font-size: 1.25rem;

  @media screen and (max-width: 576px) {
    padding-right: 0.5rem;
  }
`;

//RECIPE INFORMATION CONTAINER
export const SFormContainer = styled.div`
  width: 100%;
  height: 92%;

  @media screen and (max-width: 576px) {
    height: 100%;
  }
`;

export const SForm = styled.form`
  width: 100%;
  height: 100%;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    /* display: flex; */
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const TopDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 576px) {
    height: 60%;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const InputsContainer = styled.div`
  margin-top: 0.5rem;
  width: 50%;
  height: 100%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 70%;
  }
`;

export const InputWrapper = styled.div`
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 0.5rem;
`;

export const SLabel = styled.label`
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 576px) {
    font-size: 15px;
  }
`;

export const SInput = styled.input`
  width: 100%;
  height: 30px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1b100e;
  font-size: 15px;

  &:focus {
    border: 2px solid #1b100e;
  }

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 30%;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  height: 96%;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 60%;
    height: 85%;
  }
`;

export const SImage = styled.img`
  width: 100%;
`;

export const BottomDiv = styled.div`
  width: 100%;
  height: 50%;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 40%;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const STextArea = styled.textarea`
  width: 98%;
  height: 50px;
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

  @media screen and (max-width: 576px) {
    width: 95%;
  }
`;

export const SBtnWrapper = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-start;
  }
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
