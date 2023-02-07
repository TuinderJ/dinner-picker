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
  const [formState, setFormState] = useState({ name: 'Test', category: 'Dinner', cookTime: 'Stuff' });

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
      name: form.RecipeName.value,
      category: form.Category.value,
      cookTime: form.CookTime.value,
      description: form.Description.value,
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
                    <SLabel htmlFor='RecipeName'>Recipe Name:</SLabel>
                    <SInput type='text' name='RecipeName' value={formState.name} onChange={handleChange}></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='Category'>Category:</SLabel>
                    <SInput type='text' name='Category' value='Dinner'></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='CookTime'>Cook Time:</SLabel>
                    <SInput type='text' name='CookTime' value='Stuff'></SInput>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='Description'>Description:</SLabel>
                    <SInput type='text' name='Description' value='Cool Thing'></SInput>
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
                    <STextArea name='ingredients' rows='3' value='1 thing stuff, 2 stuff things'></STextArea>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='instructions'>Instructions: {`(Separate by commas)`}</SLabel>
                    <STextArea name='instructions' rows='3' value='Do a thing, Do another thing'></STextArea>
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
