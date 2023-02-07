import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_RECIPE } from '../../utils/queries';

import { RecipeHeader, RecipeContainer, RecipeDisplay, StyledH2, StyledUl, StyledLi, LeftDiv, RightDiv, Ingredients, Instructions, ImgDiv } from './style';

const SingleRecipe = ({ setActivePage }) => {
  const { recipeId } = useParams();
  const { loading, data } = useQuery(QUERY_RECIPE, { variables: { recipeId: recipeId } });

  useEffect(() => setActivePage(''), []);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <RecipeContainer>
          <RecipeHeader>
            <StyledH2>{data.recipe.name}</StyledH2>
          </RecipeHeader>
          <RecipeDisplay>
            <LeftDiv>
              <ImgDiv src={data.recipe.images[0]} alt={data.recipe.name} className='recipePic' />
              <Ingredients>
                <StyledH2>Ingredients:</StyledH2>
                <StyledUl>{data.recipe.ingredients[0] ? data.recipe.ingredients.map((ingredient, index) => <StyledLi key={index}>{ingredient}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </Ingredients>
            </LeftDiv>
            <RightDiv>
              <Instructions>
                <StyledH2>Instructions:</StyledH2>
                <StyledUl>{data.recipe.instructions[0].steps[0] ? data.recipe.instructions[0].steps.map((instruction, index) => <StyledLi key={index}>{instruction}</StyledLi>) : <>Nothing Saved</>}</StyledUl>
              </Instructions>
            </RightDiv>
          </RecipeDisplay>
        </RecipeContainer>
      )}
    </>
  );
};

export default SingleRecipe;
