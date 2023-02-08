import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Colors:
// Pinkysh #FF6464
// Paper Yellow  #FFF1D8
// Smoky Black #1B100E

// export const AllBody = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   overflow: hidden;
// `;

// export const StyleSquare = styled.div`
//   width: 97%;
//   border: 2px solid #1b100e;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   @media screen and (max-width: 576px) {
//     width: 100%;
//   }
// `;

// export const RecipeWrapper = styled.div`
//   width: 90%;
//   margin-top: 80px;
//   /* background-color: red; */
//   display: flex;
//   @media screen and (max-width: 576px) {
//   }
// `;

export const RecipeHeader = styled.header`
  width: 100%;
  background: #1b100e;
  color: #fff1d8;
  /* text-align: center; */
  /* padding: 0.25rem 0; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
`;

export const EditLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.25rem;
`;

export const StyledH2 = styled.h2`
  @media screen and (max-width: 900px) {
    margin-top: 1em;
    padding-left: none;
  }
`;

export const IconContainer = styled.div``;

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
