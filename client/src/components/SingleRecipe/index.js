import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_RECIPE } from '../../utils/queries';
import {Img, RecipeInfo, RecipeDisplay, LeftDiv, MiddleDiv, Ingredients, IngredientsDiv, Instructions, ImageDiv} from './style';

const SingleRecipe = ({ setActivePage }) => {
  const { recipeId } = useParams();
  const { loading, data } = useQuery(QUERY_RECIPE, { variables: { recipeId: recipeId } });

  useEffect(() => setActivePage(''), []);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <RecipeInfo>
          <RecipeDisplay>
            <LeftDiv>
              <ImageDiv>
                <img src={data.recipe.images[0]} alt={data.recipe.name} className='recipePic' />
              </ImageDiv>

              <IngredientsDiv>
                <h2>Ingredients:</h2>
                <Ingredients>
                  <ul>
                    {data.recipe.ingredients?.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </Ingredients>
              </IngredientsDiv>
            </LeftDiv>

            <MiddleDiv>
              <h2>Instructions:</h2>
              <Instructions>
                <ul>
                  {data.recipe.instructions[0]?.steps.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </Instructions>
            </MiddleDiv>

            {/* <div class="botDiv">
          <h2>Additional Info Here:</h2>
        </div> */}
          </RecipeDisplay>
        </RecipeInfo>
      )}
    </>
  );
};

export default SingleRecipe;
