import { useEffect, useState } from 'react';
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
import PastaIMG from '../../assets/pasta.jpg';

export default function AddRecipe({ setActivePage }) {
  useEffect(() => setActivePage('AddRecipe'), []);
  const [formState, setFormState] = useState({ name: 'Test', category: 'Dinner', cookTime: 'Stuff', description: 'Cool Thing', ingredients: '1 thing stuff, 2 stuff things', instructions: 'Do a thing, Do another thing' });

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
    };
    console.log(recipe);
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
                    <SImage src={PastaIMG}></SImage>
                  </ImageWrapper>
                </ImageContainer>
              </TopDiv>
              <BottomDiv>
                <TextAreaWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='ingredients'>Ingredients: {`(Separate by commas)`}</SLabel>
                    <STextArea name='ingredients' rows='3' value={formState.ingredients} onChange={handleChange}></STextArea>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='instructions'>Instructions: {`(Separate by commas)`}</SLabel>
                    <STextArea name='instructions' rows='3' value={formState.instructions} onChange={handleChange}></STextArea>
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
