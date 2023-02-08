import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeLog = styled.div`
  background-color: var(--pinkysh);
  box-shadow: 4px 4px 10px var(--smokyBlack);
  margin: 1em;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 1rem 0;
  }
`;

export const SmallImage = styled.img`
  height: 5em;
  width: 5em;
  padding: 0.25em;
`;

export const RecipeSmall = styled(Link)`
  padding-left: 1em;
  font-size: xx-large;
  font-family: 'Nunito', sans-serif;
  text-decoration: none;
  color: #000;
  flex: 1;
  text-align: center;

  @media screen and (max-width: 500px) {
    padding-left: 0;
    font-size: large;
    font-weight: 600;
    text-align: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  text-align: center;
`;

export const EditButton = styled.button`
  background: #ff6464;
  background-image: -webkit-linear-gradient(top, #ff6464, #fff1d8);
  background-image: -moz-linear-gradient(top, #ff6464, #fff1d8);
  background-image: -ms-linear-gradient(top, #ff6464, #fff1d8);
  background-image: -o-linear-gradient(top, #ff6464, #fff1d8);
  background-image: linear-gradient(to bottom, #ff6464, #fff1d8);
  border-radius: 0px;
  box-shadow: 4px 4px 4px #666666;
  font-family: 'Nunito', sans-serif;
  color: #1b100e;
  font-size: 20px;
  border: solid #1b100e 2px;
  text-decoration: none;
  height: 4em;
  width: 5em;
  padding: 1em;
  margin-right: 0.25em;
  cursor: pointer;

  &:hover {
    background: #fff1d8;
    text-decoration: none;
  }

  @media screen and (max-width: 500px) {
    height: 3em;
    font-size: small;
    font-weight: 600;
  }
`;
