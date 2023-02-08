import styled from 'styled-components';

export const MainLogContainer = styled.div`
  background-color: #fff1d8;
  width: 100%;
  height: 950px;
  display: flex;
  text-align: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    max-height: 750px;
  }
`;

export const BorderBox = styled.div`
  width: 97%;
  height: 97%;
  border: 2px solid #1b100e;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-start;
  }
`;

export const LogBox = styled.div`
  width: 70%;
  height: 90%;
  display: flex;
  align-items: center;
  border: 2px #ff6464;
  border-style: solid hidden solid solid;

  @media screen and (max-width: 576px) {
    width: 90%;
    /* height: 100%; */
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border: 2px solid #1b100e;
    margin-top: 20px;
  }
`;

export const LeftBox = styled.div`
  width: 60%;
  height: 100%;
  background-color: #ff6464;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const SImgWrapper = styled.div`
  width: 80%;
  height: 80%;
  background-color: gray;
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const SImg = styled.img`
  width: 100%;
`;

export const RightBox = styled.div`
  width: 40%;
  height: 100%;
  border: 2px #1b100e;
  border-style: solid solid solid hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 100%;
    border: 2px #1b100e;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const ButtonsBox = styled.div`
  width: 90%;
  height: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #1b100e;

  @media screen and (max-width: 576px) {
    width: 90%;
    height: 14%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 2px solid #1b100e;
  }
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

  @media (max-width: 576px) {
    width: 40%;
    height: 5vh;
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
  }
`;

export const InputsBox = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 576px) {
    width: 100%;
    height: 86%;
  }
`;

export const SForm = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SInputsWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;
export const Label = styled.label`
  font-size: 20px;
  font-weight: 600;

  @media screen and (max-width: 576px) {
    font-size: 18px;
  }
`;

export const SInput = styled.input`
  width: 97%;
  height: 25px;
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: 2px solid #1b100e;
  font-size: 19px;
  padding: 5px 0px 5px 10px;
  margin-top: 10px;

  &:focus {
    border: 2px solid #1b100e;
  }
`;

export const FormBtnBox = styled.div`
  width: 100%;
`;

export const LoginBtn = styled.button`
  width: 150px;
  height: 40px;
  background-color: #1b100e;
  color: #fff1d8;
  font-size: 1.3rem;
  cursor: pointer;
  border: none;
`;
