import { Link } from 'react-router-dom';
import { SCARD, SImg, SImgWrapper, STitle, STitleWrapper } from './style';

export default function Card({ recipe }) {
  return (
    <SCARD>
      <Link to={`/Recipe/${recipe._id}`}>
        <STitleWrapper>
          <STitle>{recipe.name}</STitle>
        </STitleWrapper>
        <SImgWrapper>
          <SImg src={recipe.images[0]} alt={recipe.name}></SImg>
        </SImgWrapper>
      </Link>
    </SCARD>
  );
}
