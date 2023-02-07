import styled from 'styled-components';


// COLORS:
// Pinkysh #FF6464
// Paper Yellow #FFF1D8
// Smoky Black #1B100E

export const AllBody = styled.div`
  width: 100vw;
  /* height: 88vh; */
  background-color: #fff1d8;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Nunito', sans-serif;
`;

export const StyleSquare = styled.div`
  width: 97%;
  /* height: 95%; */
  border: 2px solid #1b100e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  width: 90%;
  /* height: 90%; */
  margin-top: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// :root {
//     --Pinkysh: #ff6464;
//     --paperYellow: #fff1d8;
//     --smokyBlack: #1b100e;
// }

// body {
//     background-color: var(--Pinkysh);
//     justify-content: center;
//     display: flex;
//     align-items: center;
// }

// .menuDisplay {
//     /* border: solid 2px var(--smokyBlack); */
//     margin-top: 6em;
//     width: 60%;
//     display: flex;
//     flex-direction: row;
//     justify-content: center;
//     flex-wrap: wrap;

// }

// .card {
//     border: solid 2px var(--smokyBlack);
//     background-color: var(--paperYellow);
//     /* border: solid 2px var(--russian-violet); */
//     /* background: linear-gradient(to right, white, var(--Nyanza)); */
//     /* border-radius: 5px; */

//     width: 14em;
//     height: 22em;
//     margin: 1em;
//     box-shadow: 4px 4px 10px var(--smokyBlack);
//     text-align: left;

// }

// .recipeName {
//     background-color: var(--smokyBlack);
//     height: 24%;
//     /* margin-right: -2rem;
//     margin-left: -2rem; */
//     margin-top: -1rem;
//     width: 100%;
// }

// .title {
//     padding-top: 1em;
//     margin-left: .8em;
//     color: white;

// }

// .contents {
//     border-bottom: solid 1px var(--smokyBlack);
//     padding-left: 1rem;
//     padding-bottom: 1rem;
//     color: var(--smokyBlack);
// }
