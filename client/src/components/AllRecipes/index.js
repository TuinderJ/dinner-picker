import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { CardsContainer } from './AllRecipes.style';
import { QUERY_RECIPES } from '../../utils/queries';

export default function AllRecipes({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    setActivePage('AllRecipes');
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <CardsContainer>
          {data.recipes.map(recipe => (
            <div key={recipe._id} className='menuDisplay'>
              <div className='card'>
                <div className='recipeName'>
                  <p className='title'>{recipe.name}</p>
                </div>
              </div>
            </div>
          ))}
        </CardsContainer>
      )}
    </>
  );
}
