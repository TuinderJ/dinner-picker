import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import RecipeCard from '../RecipeCard';
import { CardsContainer } from './AllRecipes.style';
import { QUERY_RECIPES } from '../../utils/queries';

export default function AllRecipes({ setActivePage }) {
  const { loading, data } = useQuery(QUERY_RECIPES);

  useEffect(() => {
    setActivePage('AllRecipes');
  }, []);

  return <>{loading ? <div>Loading</div> : <CardsContainer>{data?.recipes[0] ? data.recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />) : <div>NO RECIPES</div>}</CardsContainer>}</>;
}
