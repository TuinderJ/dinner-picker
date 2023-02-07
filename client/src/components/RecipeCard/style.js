import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SCARD = styled.div`
  border: solid 2px #1b100e;
  width: 300px;
  height: 400px;
  margin: 15px;
  color: #1b100e;
  font-family: 'Nunito', sans-serif;
`;

export const SLink = styled(Link)`
  text-decoration: none;
`;
export const STitleWrapper = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b100e;
`;
export const STitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #fff1d8;
`;
export const SImgWrapper = styled.div`
  width: 100%;
  height: 90%;
  overflow: hidden;
`;
export const SImg = styled.img`
  width: 100%;
`;
