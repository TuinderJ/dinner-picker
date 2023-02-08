import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SCARD = styled.div`
  width: 300px;
  height: 400px;
  margin: 15px;
  border: solid 2px #1b100e;

  @media screen and (max-width: 576px) {
    width: 350px;
    height: 150px;
    margin: 10px;
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;

export const STitleWrapper = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b100e;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: flex-start;
  }
`;

export const STitle = styled.div`
  padding-left: 15px;
  font-size: 18px;
  font-weight: 600;
  color: #fff1d8;

  @media screen and (max-width: 576px) {
    font-size: 16px;
  }
`;

export const SImgWrapper = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;
  display: flex;
  align-items: center;
`;
export const SImg = styled.img`
  width: 100%;
  height: auto;
`;
