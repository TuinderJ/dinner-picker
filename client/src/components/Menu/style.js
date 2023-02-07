import styled from 'styled-components';

export const MenuDiv = styled.div`
  margin: 1em auto;
  padding: 2em;
  border: 2px solid #1b100e;
  width: 90vw;

  @media screen and (max-width: 500px) {
    width: 75vw;
    border: none;
  }
`;

export const ClearMenuButton = styled.button`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  background-color: #1b100e;
  color: #ff6464;
  font-size: 2rem;
  padding: 0.5rem 1rem;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    font-size: 1rem;
  }
`;
