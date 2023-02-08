import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RecipeHeader = styled.header`
  width: 100%;
  background: #1b100e;
  color: var(--paperYellow);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    gap: 0.5rem;
  }
`;

export const EditLink = styled(Link)`
  color: var(--paperYellow);
  text-decoration: none;
  font-size: 1.25rem;
  padding-left: 1rem;

  @media screen and (max-width: 900px) {
    font-size: 1rem;
    padding-left: 0.75rem;
  }
`;

export const StyledH2 = styled.h2`
  @media screen and (max-width: 900px) {
    margin-top: 1em;
    padding-left: none;
    font-size: 1rem;
    text-align: center;
  }
`;

export const IconContainer = styled.div`
  padding-right: 1rem;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding-right: 0.5rem;
  }
`;

export const StyledUl = styled.ul`
  padding-left: 0;
  list-style: none;

  @media screen and (max-width: 900px) {
    padding: 0;
  }
`;

export const StyledLi = styled.li`
  margin-bottom: 0.75rem;
  border-bottom: 1px dotted #444;
`;

export const RecipeContainer = styled.div`
  margin: 3em auto;
  background-color: var(--paperYellow);
  width: 85vw;
  border: 2px solid #1b100e;

  @media screen and (max-width: 900px) {
    margin: 0.5rem auto;
    border: none;
    align-items: center;
    width: 100%;
    text-align: left;
  }
`;

export const RecipeDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em auto;
  width: 85vw;
  flex-wrap: true;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: auto;
    text-align: left;
    align-items: center;
  }
`;

export const LeftDiv = styled.div`
  width: 24em;
  padding: 1em;
  align-content: center;

  @media screen and (max-width: 900px) {
    width: 100vw;
    padding: 0;
    text-align: left;
    align-items: center;
  }
`;

export const ImgDiv = styled.img`
  width: 100%;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
  }
`;

export const Ingredients = styled.div`
  padding-left: 1em;
  padding-top: 1em;

  @media screen and (max-width: 900px) {
    padding: 0 0.75rem;
  }
`;

export const RightDiv = styled.div`
  border-left: solid 2px var(--smokyBlack);
  padding: 0 1em;

  @media screen and (max-width: 900px) {
    border-left: none;
    border-top: solid 2px var(--smokyBlack);
    width: 100vw;
    padding: 0;
    margin-top: 1em;
  }
`;

export const Instructions = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  padding-top: 1em;

  @media screen and (max-width: 900px) {
    padding: 0 0.75rem;
  }
`;

export const StyledMedia = `
  @media screen and (max-width: 900px) {
    h2 {
        margin-top: 1em;
        padding-left: none;
    }
    
    img {
        border: solid 5px var(--pinkysh);
        width: 1vw;
        height: 1vw;
        margin: auto;
        margin-top: 1em;
    }
    .middleDiv {
        border-left: none;
        border-top:  solid 2px var(--smokyBlack);
        text-align: left;
        width: 100%;
        margin-top: 1em;
    }

    `;
