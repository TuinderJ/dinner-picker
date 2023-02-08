import { useEffect, useState } from 'react';

import { useMutation } from '@apollo/client';
import { QUERY_MENU } from '../../utils/queries';
import { ADD_RECIPE } from '../../utils/mutations';

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
} from './style';
import dinnerImage from '../../assets/dinner-image.png';

export default function AddRecipe({ setActivePage }) {
  const [addRecipe, { error: addRecipeError }] = useMutation(ADD_RECIPE, { refetchQueries: [{ query: QUERY_MENU }] });
  const [formState, setFormState] = useState({ name: '', category: '', cookTime: '', description: '', ingredients: '', instructions: '' });

  useEffect(() => setActivePage('AddRecipe'), []);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const ingredients = form.ingredients.value.split(',').map(ingredient => ingredient.trim());
    const instructions = [{ steps: form.instructions.value.split(',').map(ingredient => ingredient.trim()) }];
    const recipe = {
      name: form.name.value,
      category: form.category.value,
      cookTime: form.cookTime.value,
      description: form.description.value,
      ingredients,
      instructions,
      images: ['http://cdn.jamieoliver.com/recipe-database/oldImages/xtra_med/1460_1_1436891540.jpg'],
    };
    const { data } = await addRecipe({ variables: { ...recipe } });
    if (data.addRecipe) window.location.assign(`/Recipe/${data.addRecipe._id}`);
  };
  return (
    <AddBody>
      <StyleSquare>
        <SContainer>
          <STitleWrapper>
            <STitle>Add Recipe</STitle>
          </STitleWrapper>
          <SFormContainer>
            <SForm onSubmit={handleFormSubmit}>
              <TopDiv>
                <InputsContainer>
                  <InputWrapper>
                    <SLabel htmlFor='name'>Recipe Name:</SLabel>
                    <SInput type='text' name='name' value={formState.name} onChange={handleChange}></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='category'>Category:</SLabel>
                    <SInput type='text' name='category' value={formState.category} onChange={handleChange}></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='cookTime'>Cook Time:</SLabel>
                    <SInput type='text' name='cookTime' value={formState.cookTime} onChange={handleChange}></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='description'>Description:</SLabel>
                    <SInput type='text' name='description' value={formState.description} onChange={handleChange}></SInput>
                  </InputWrapper>
                </InputsContainer>
                <ImageContainer>
                  <ImageWrapper>
                    <SImage src={dinnerImage}></SImage>
                  </ImageWrapper>
                </ImageContainer>
              </TopDiv>
              <BottomDiv>
                <TextAreaWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='ingredients'>Ingredients: {`(Separate by commas)`}</SLabel>
                    <STextArea name='ingredients' rows='4' value={formState.ingredients} onChange={handleChange}></STextArea>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='instructions'>Instructions: {`(Separate by commas)`}</SLabel>
                    <STextArea name='instructions' rows='4' value={formState.instructions} onChange={handleChange}></STextArea>
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
