import React from 'react';
import styled from 'styled-components';

export const Root = styled.div`
  --Pinkysh: #ff6464;
  --paperYellow: #fff1d8;
  --smokyBlack: #1b100e;
`;

export const Body = styled.body`
  background-color: var(--Pinkysh);
  color: var(--smokyBlack);
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Img = styled.img`
  border: solid 5px var(--Pinkysh);
  width: 100%;
  height: 90%;
`;

const RecipeInfo = styled.div`
  margin-top: 3em;
  border-bottom: solid 1px var(--smokyBlack);
  background-color: var(--paperYellow);
  width: 85vw;
  box-shadow: 4px 4px 10px var(--smokyBlack);
`;

const H2 = styled.h2`
  padding-left: 1em;
`;

const RecipeDisplay = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1em auto;
  width: 85vw;
  flex-wrap: true;
`;

const RecipePic = styled.div`
  border-radius: 18%;
  width: 20em;
  height: 20em;
  margin-left: 2em;
  margin-right: 2em;
`;

const LeftDiv = styled.div`
  width: 24em;
  padding: 1em;
  align-content: center;
`;

const MiddleDiv = styled.div`
  border-left: solid 2px var(--smokyBlack);
  height: 45em;
  padding-right: 1em;
`;

const Ingredients = styled.div`
  padding-left: 1em;
  padding-top: 1em;
`;

const Instructions = styled(Ingredients)`
  padding-right: 1em;
`;

const StyledMedia = `
  @media only screen and (max-width: 900px) {
    .recipeInfo {
        align-items: center;
        max-width: 80%;
        text-align: left;
    }
  
    .recipeDisplay {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 80%;
        margin: auto;
        text-align: left;
        align-items: center;
    }
  
    .leftDiv {
        border-top:  solid 2px var(--smokyBlack);
        width: 100%;
        border-top: 2em;
        text-align: left;
        align-items: center; 
    }
  
    .imageDiv {
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
    
    .ingredientsDiv {
        text-align: left;
    }
  
    h2 {
        margin-top: 1em;
        padding-left: none;
    }
    
    img {
        border: solid 5px var(--Pinkysh);
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
