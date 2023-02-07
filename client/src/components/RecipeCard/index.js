import { Link } from 'react-router-dom';

export default function Card({ recipe }) {
  return (
    <div class='card'>
      <Link to={`/Recipe/${recipe._id}`}>
        <div class='recipeName'>
          <p class='title'>{recipe.name}</p>
        </div>
        <div class='imageTag'>
          <img src={recipe.images[0]} alt={recipe.name} class='src' />
        </div>
      </Link>
    </div>
  );
}
