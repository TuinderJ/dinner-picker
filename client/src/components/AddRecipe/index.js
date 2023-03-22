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
  Ul,
  Li,
  RemoveListItemIcon,
  AddAnotherButton,
  SButton,
  TextAreaWrapper,
} from './style';
import dinnerImage from '../../assets/dinner-image.png';

export default function AddRecipe({ setActivePage }) {
  const [addRecipe, { error: addRecipeError }] = useMutation(ADD_RECIPE, { refetchQueries: [{ query: QUERY_MENU }] });
  const [formState, setFormState] = useState({ name: '', images: '', category: '', cookTime: '', description: '', ingredients: [], instructions: [{ steps: [] }] });
  const [listIds, setListIds] = useState({ ingredients: 0, instructions: 0 });

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

    const ingredientsList = document.getElementById('ingredients');
    const ingredients = [];
    for (let i = 0; i < ingredientsList.children.length - 1; i++) {
      const li = ingredientsList.children[i];
      if (li.children[0].value !== '') ingredients.push(li.children[0].value);
    }

    const instructionsList = document.getElementById('instructions');
    const instructions = [{ steps: [] }];
    for (let i = 0; i < instructionsList.children.length - 1; i++) {
      const li = instructionsList.children[i];
      if (li.children[0].value !== '') instructions[0].steps.push(li.children[0].value);
    }

    const recipe = {
      name: form.name.value,
      images: form.images.value ? [form.images.value] : [dinnerImage],
      category: form.category.value,
      cookTime: form.cookTime.value,
      description: form.description.value,
      ingredients,
      instructions,
    };
    try {
      const { data } = await addRecipe({ variables: { ...recipe } });
      if (data.addRecipe) window.location.assign(`/Recipe/${data.addRecipe._id}`);
    } catch (error) {
      alert(error);
    }
  };

  const handleAddIngredient = async e => {
    e.preventDefault();
    const id = listIds.ingredients;
    setListIds({ ...listIds, ingredients: id + 1 });

    const ingredients = [...formState.ingredients, { value: '', id }];
    setFormState({ ...formState, ingredients });
  };

  const handleIngredientChange = async e => {
    const ingredients = [...formState.ingredients];
    for (let i = 0; i < ingredients.length; i++) if (ingredients[i].id === Number(e.target.dataset.id)) ingredients[i].value = e.target.value;
    setFormState({ ...formState, ingredients });
  };

  const handleRemoveIngredient = async e => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const oldIngredients = [...formState.ingredients];

    const ingredients = oldIngredients.filter(step => step.id !== Number(id));
    setFormState({ ...formState, ingredients });
  };

  const handleAddInstruction = async e => {
    e.preventDefault();
    const id = listIds.instructions;
    setListIds({ ...listIds, instructions: id + 1 });
    const instructions = [{ steps: [...formState.instructions[0].steps, { value: '', id }] }];
    setFormState({ ...formState, instructions });
  };

  const handleInstructionChange = async e => {
    const instructions = { ...formState.instructions };
    for (let i = 0; i < instructions[0].steps.length; i++) if (instructions[0].steps[i].id === Number(e.target.dataset.id)) instructions[0].steps[i].value = e.target.value;
    setFormState({ ...formState, instructions });
  };

  const handleRemoveInstruction = async e => {
    e.preventDefault();
    const { id } = e.target.dataset;
    const oldInstructions = { ...formState.instructions };

    const instructions = [{ steps: oldInstructions[0].steps.filter(step => step.id !== Number(id)) }];
    setFormState({ ...formState, instructions });
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
                  <TextAreaWrapper>
                    <SLabel htmlFor='images'>Picture Link:</SLabel>
                    <STextArea type='url' name='images' value={formState.images} onChange={handleChange}></STextArea>
                  </TextAreaWrapper>
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
                    <SImage src={formState.images} alt={formState.name}></SImage>
                  </ImageWrapper>
                </ImageContainer>
              </TopDiv>
              <BottomDiv>
                <TextAreaWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='ingredients'>Ingredients: {`(Separate by commas)`}</SLabel>
                    <Ul id='ingredients'>
                      {formState.ingredients.map((ingredient, index) => (
                        <Li key={ingredient.id}>
                          <SInput data-id={ingredient.id} type='text' value={formState.ingredients[index].value} onChange={handleIngredientChange} />
                          <RemoveListItemIcon className='fa fa-trash-o' aria-hidden='true' data-id={ingredient.id} onClick={handleRemoveIngredient} />
                        </Li>
                      ))}
                      <AddAnotherButton onClick={handleAddIngredient}>{formState.ingredients.length ? 'Add Another' : 'Add an Ingredient'}</AddAnotherButton>
                    </Ul>
                  </InputWrapper>
                  <InputWrapper>
                    <SLabel htmlFor='instructions'>Instructions: {`(Separate by commas)`}</SLabel>
                    <Ul id='instructions'>
                      {formState.instructions[0].steps.map((instruction, index) => (
                        <Li key={instruction.id}>
                          <SInput data-id={instruction.id} type='text' value={formState.instructions[0].steps[index].value} onChange={handleInstructionChange} />
                          <RemoveListItemIcon className='fa fa-trash-o' aria-hidden='true' data-id={instruction.id} onClick={handleRemoveInstruction} />
                        </Li>
                      ))}
                      <AddAnotherButton onClick={handleAddInstruction}>{formState.instructions[0].steps.length ? 'Add Another' : 'Add an instruction'}</AddAnotherButton>
                    </Ul>
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
