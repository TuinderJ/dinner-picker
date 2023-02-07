import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import RecipeCard from '../RecipeCard';
import { AllBody, CardsContainer, StyleSquare } from './AllRecipes.style';
import { QUERY_RECIPES } from '../../utils/queries';

export default function AllRecipes({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    setActivePage('AllRecipes');
  }, []);

  return (
    <>
      {loading ? (
        <AllBody>
          <StyleSquare>
            <div>Loading</div>
          </StyleSquare>
        </AllBody>
      ) : (
        <AllBody>
          <StyleSquare>
            <CardsContainer>{data?.recipes[0] ? data.recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />) : <div>NO RECIPES</div>}</CardsContainer>
          </StyleSquare>
        </AllBody>
      )}
    </>
  );
}
