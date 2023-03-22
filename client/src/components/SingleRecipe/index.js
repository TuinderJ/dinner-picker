import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Auth from '../../utils/auth';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_RECIPE } from '../../utils/queries';
import { FAVORITE_RECIPE, SAVE_RECIPE } from '../../utils/mutations';

import { RecipeHeader, RecipeContainer, RecipeDisplay, StyledH2, StyledUl, StyledLi, LeftDiv, RightDiv, IngredientsContainer, Instructions, EditLink, Button, IconContainer, Img } from './style';

const SingleRecipe = ({ setActivePage }) => {
  const { recipeId } = useParams();
  const { loading, data } = useQuery(QUERY_RECIPE, { variables: { recipeId: recipeId } });
  const [favoriteRecipe, { error: favoriteRecipeError }] = useMutation(FAVORITE_RECIPE, { refetchQueries: ['', 'recipe'] });
  const [saveRecipe, { error: saveRecipeError }] = useMutation(SAVE_RECIPE, { refetchQueries: ['', 'recipe'] });

  useEffect(() => setActivePage(''), []);

  const handleToggleFavorite = async () => await favoriteRecipe({ variables: { recipeId: data.recipe._id } });
  const handleSave = async () => {
    const saveRecipeData = await saveRecipe({ variables: { recipeId: data.recipe._id } });
    if (saveRecipeData.data.saveRecipe) window.location.assign(`/Recipe/${saveRecipeData.data.saveRecipe._id}`);
  };

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <RecipeContainer>
          <RecipeHeader>
            {Auth.loggedIn() ? Auth.getProfile().data._id === data.recipe.createdBy ? <EditLink to={`/EditRecipe/${data.recipe._id}`}>Edit</EditLink> : <></> : <></>}
            <StyledH2>{data.recipe.name}</StyledH2>
            {Auth.loggedIn() ? (
              Auth.getProfile().data._id === data.recipe.createdBy ? (
                <IconContainer onClick={handleToggleFavorite}>{data.recipe.favorite ? 'Favorite' : 'Not Favorite'}</IconContainer>
              ) : (
                <Button onClick={handleSave}>Save</Button>
              )
            ) : (
              <></>
            )}
          </RecipeHeader>
          <RecipeDisplay>
            <LeftDiv>
              <Img src={data.recipe.images[0]} alt={data.recipe.name} />
              <IngredientsContainer>
                <StyledH2>Ingredients:</StyledH2>
                <StyledUl>{data.recipe?.ingredients[0] ? data.recipe.ingredients.map((ingredient, index) => <StyledLi key={index}>{ingredient}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </IngredientsContainer>
            </LeftDiv>
            <RightDiv>
              <Instructions>
                <StyledH2>Instructions:</StyledH2>
                <StyledUl>{data.recipe.instructions[0]?.steps[0] ? data.recipe.instructions[0].steps.map((instruction, index) => <StyledLi key={index}>{instruction}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </Instructions>
            </RightDiv>
          </RecipeDisplay>
        </RecipeContainer>
      )}
    </>
  );
};

export default SingleRecipe;
