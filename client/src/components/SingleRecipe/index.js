import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_RECIPE } from '../../utils/queries';
import { FAVORITE_RECIPE } from '../../utils/mutations';

import { RecipeWrapper, RecipeHeader, RecipeContainer, RecipeDisplay, StyleSquare, StyledH2, StyledUl, StyledLi, LeftDiv, RightDiv, Ingredients, Instructions, EditLink, IconContainer, ImgDiv, AllBody, StyledMedia } from './style';

const SingleRecipe = ({ setActivePage }) => {
  const { recipeId } = useParams();
  const { loading, data } = useQuery(QUERY_RECIPE, { variables: { recipeId: recipeId } });
  const [favoriteRecipe, { error }] = useMutation(FAVORITE_RECIPE, { refetchQueries: ['', 'recipe'] });

  useEffect(() => setActivePage(''), []);

  const handleToggleFavorite = async () => await favoriteRecipe({ variables: { recipeId: data.recipe._id } });

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        // <AllBody>
        // <StyleSquare>
        // <RecipeWrapper>
        <RecipeContainer>
          <RecipeHeader>
            <EditLink to={`/EditRecipe/${data.recipe._id}`}>Edit</EditLink>
            <StyledH2>{data.recipe.name}</StyledH2>
            <IconContainer onClick={handleToggleFavorite}>{data.recipe.favorite ? 'Favorite' : 'Not Favorite'}</IconContainer>
          </RecipeHeader>
          <RecipeDisplay>
            <LeftDiv>
              <ImgDiv src={data.recipe.images[0]} alt={data.recipe.name} className='recipePic' />
              <Ingredients>
                <StyledH2>Ingredients:</StyledH2>
                <StyledUl>{data.recipe?.ingredients[0] ? data.recipe.ingredients.map((ingredient, index) => <StyledLi key={index}>{ingredient}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </Ingredients>
            </LeftDiv>
            <RightDiv>
              <Instructions>
                <StyledH2>Instructions:</StyledH2>
                <StyledUl>{data.recipe.instructions[0]?.steps[0] ? data.recipe.instructions[0].steps.map((instruction, index) => <StyledLi key={index}>{instruction}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </Instructions>
            </RightDiv>
          </RecipeDisplay>
        </RecipeContainer>
        // </RecipeWrapper>
        // </StyleSquare>
        // </AllBody>
      )}
    </>
  );
};

export default SingleRecipe;
