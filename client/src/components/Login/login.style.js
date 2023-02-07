import styled from 'styled-components';

export const MainLogContainer = styled.div`
  background-color: #fff1d8;
  width: 100%;
  height: 950px;
  display: flex;
  text-align: center;
  justify-content: center;

  /* @media screen and (max-width: 768px) {
  } */

  /* @media screen and (max-width: 576px) {
  } */
`;
export const BorderBox = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogBox = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: center;
  border: 2px #ff6464;
  border-style: solid hidden solid solid;
`;

export const LeftBox = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ff6464;
`;
export const RightBox = styled.div`
  width: 40%;
  height: 100%;
  border: 2px #1b100e;
  border-style: solid solid solid hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;

export const ButtonsBox = styled.div`
  width: 90%;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #1b100e;
`;

export const Button = styled.button`
  width: 30%;
  height: 4vh;
  background-color: transparent;
  color: #1b100e;
  font-size: 19px;
  cursor: pointer;

  &.active {
    width: 60%;
    border: 2px solid #1b100e;
    background-color: #1b100e;
    color: #ff6464;
  }

  /* @media (max-width: 768px) {
    font-size: 17px;
  }

  @media (max-width: 576px) {
    font-size: 12px;
  } */
`;

export const InputsBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Nunito', sans-serif;
  margin-top: 2rem;
`;

export const Label = styled.label`
  width: 80%;
  height: 90%;
  background-color: transparent;
  border: none;
  margin-top: 50px;
  text-align: left;
  font-size: 20px;
`;

export const Input = styled.input`
  width: 85%;
  height: 28px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid #1b100e;
  margin-top: 15px;
  padding: 2px;
  display: flex;

  &:active {
    border: none;
  }
`;

export const FormBtnBox = styled.div`
  width: 100%;
  height: 40%;
  margin-top: 5rem;
`;

export const LoginBtn = styled.button`
  width: 130px;
  height: 50px;
  background-color: #1b100e;
  color: #fff1d8;
  font-size: 1.3rem;
`;
