import styled from 'styled-components';

export const AllBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 20px;

  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

export const StyleSquare = styled.div`
  width: 97%;
  border: 2px solid #1b100e;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
  }
`;

export const CardsContainer = styled.div`
  width: 98%;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 576px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;
