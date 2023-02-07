import React, { useEffect } from 'react';
import {
  AddBody,
  StyleSquare,
  SContainer,
  STitleWrapper,
  STitle,
  SForm,
  TopDiv,
  InputsContainer,
  BottomDiv,
  SFormContainer,
  SLabel,
  InputWrapper,
  SInput,
  STextArea,
  ImageContainer,
  ImageWrapper,
  SImage,
  SBtnWrapper,
  SButton,
  TextAreaWrapper,
} from './addRecipe.style';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import PastaIMG from '../../assets/pasta.jpg';

export default function AddRecipe({ setActivePage }) {
  useEffect(() => {
    setActivePage('AddRecipe');
  }, []);
  return (
    <AddBody>
      <StyleSquare>
        <SContainer>
          <STitleWrapper>
            <STitle>Add Recipe</STitle>
          </STitleWrapper>
          <SFormContainer>
            <SForm>
              <TopDiv>
                <InputsContainer>
                  <InputWrapper>
                    <SLabel htmlFor='RecipeName'>Recipe Name:</SLabel>
                    <SInput type='text' name='RecipeName'></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='Category'>Category:</SLabel>
                    <SInput type='text' name='Category'></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='CookTime'>Cook Time:</SLabel>
                    <SInput type='text' name='CookTime'></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='Description'>Description:</SLabel>
                    <SInput type='text' name='Description'></SInput>
                  </InputWrapper>
                </InputsContainer>
                <ImageContainer>
                  <ImageWrapper>
                    <SImage src={PastaIMG}></SImage>
                  </ImageWrapper>
                </ImageContainer>
              </TopDiv>
              <BottomDiv>
                <TextAreaWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='ingredients'>Ingredients:</SLabel>
                    <STextArea name='ingredients' rows='3'></STextArea>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='instructions'>Instructions:</SLabel>
                    <STextArea name='instructions' rows='3'></STextArea>
                  </InputWrapper>
                </TextAreaWrapper>
                <SBtnWrapper>
                  <SButton type='submit'>SUBMIT</SButton>
                </SBtnWrapper>
              </BottomDiv>
            </SForm>
          </SFormContainer>
        </SContainer>
      </StyleSquare>
    </AddBody>
  );
}
