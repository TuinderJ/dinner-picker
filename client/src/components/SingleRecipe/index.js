import { useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { QUERY_RECIPE } from '../../utils/queries';

const SingleRecipe = ({ setActivePage }) => {
  const { recipeId } = useParams();
  const { loading, data } = useQuery(QUERY_RECIPE, { variables: { recipeId: recipeId } });

  useEffect(() => setActivePage(''), []);

  return (
    <>
      {loading ? (
        <div>loading</div>
      ) : (
        <div className='recipeInfo'>
          <div className='recipeDisplay'>
            <div className='leftDiv'>
              <div className='imageDiv'>
                <img src={data.recipe.images[0]} alt='' className='recipePic' />
              </div>

              <div className='ingredientsDiv'>
                <h2>Ingredients:</h2>
                <div className='ingredients'>
                  <ul>
                    {data.recipe.ingredients?.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className='middleDiv'>
              <h2>Instructions:</h2>
              <div className='instructions'>
                <ul>
                  {data.recipe.instructions[0]?.steps.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* <div class="botDiv">
          <h2>Additional Info Here:</h2>
        </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SingleRecipe;
