import styled from 'styled-components';

export const H2 = styled.h2`
  padding-left: 1em;
`;

export const RecipeLog = styled.div`
  background-color: var(--Pinkysh);
  box-shadow: 4px 4px 10px var(--smokyBlack);
  height: 6em;
  margin: 1em;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const SmallImage = styled.img`
  height: 5em;
  width: 5em;
  padding: .25em;
`;

export const RecipeSmall = styled.div`
  padding-left: 1em;
  font-size: xx-large;
  font-family: "Nunito", sans-serif;
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
  padding: 10px 20px 10px 20px;
  border: solid #1b100e 2px;
  text-decoration: none;
  height: 4em;
  width: 5em;
  padding: 1em;
  margin-right: .25em;
  &:hover {
    background: #fff1d8;
    text-decoration: none;
  }
`;

export const MediaQuery = styled.div`
  @media only screen and (max-width: 500px) {
    .smallImage {
      height: 4em;
      width: 4em;
      padding: none;
      font-size:xx-small
    }

    .editButton {
      height: 3em;
      width: 3em;
    }

    .recipeLog {
      background-color: var(--Pinkysh);
        box-shadow: 4px 4px 10px var(--smokyBlack);
        height: 4em;
        margin: 1em;
        align-items: center;
        align-items: center;
        display: flex;
        justify-content: space-between;
    }

    .buttons {
      display: flex;
      text-align: center;
    }
  }
`;