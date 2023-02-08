import { SCARD, SImg, SLink, SImgWrapper, STitle, STitleWrapper } from './style';

export default function Card({ recipe }) {
  return (
    <SCARD>
      <SLink to={`/Recipe/${recipe._id}`}>
        <STitleWrapper>
          <STitle>{recipe.name}</STitle>
        </STitleWrapper>
        <SImgWrapper>
          <SImg src={recipe.images[0]} alt={recipe.name}></SImg>
        </SImgWrapper>
      </SLink>
    </SCARD>
  );
}
