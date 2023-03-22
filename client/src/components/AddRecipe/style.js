import styled from 'styled-components';

// BACKGROUND STYLING
export const AddBody = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (max-width: 576px) {
    max-height: 750px;
  }
`;

export const StyleSquare = styled.div`
  width: 97%;
  padding: 1rem 0;
  border: 2px solid #1b100e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const SContainer = styled.div`
  width: 90%;

  @media screen and (max-width: 576px) {
    width: 90%;
  }
`;

//TITLE CONTAINER
export const STitleWrapper = styled.div`
  width: 100%;
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1b100e;

  @media screen and (max-width: 576px) {
    width: 100%;
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

  @media screen and (max-width: 576px) {
  }
`;

export const SForm = styled.form`
  width: 100%;

  @media screen and (max-width: 576px) {
    width: 100%;
    /* display: flex; */
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const TopDiv = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;

  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const InputsContainer = styled.div`
  margin-top: 0.5rem;
  width: 50%;
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const InputWrapper = styled.div`
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
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 60%;
  }
`;

export const SImage = styled.img`
  max-height: 23rem;
`;

export const BottomDiv = styled.div`
  width: 100%;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export const STextArea = styled.textarea`
  width: 98%;
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

export const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const Li = styled.li``;

export const RemoveListItemIcon = styled.i`
  font-size: 1.25rem;
  cursor: pointer;
  margin-left: 0.5rem;
`;

export const AddAnotherButton = styled.button`
  margin-top: 0.75rem;
`;

export const SBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    display: flex;
    align-items: flex-start;
  }
`;

export const SButton = styled.button`
  width: 130px;
  font-family: inherit;
  outline: none;
  border: none;
  background: #1b100e;
  color: #ff6464;
  font-size: 19px;
  text-align: center;
  cursor: pointer;
`;
