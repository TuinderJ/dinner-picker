import React from "react";
import {
  BorderBox,
  LeftBox,
  LogBox,
  MainLogContainer,
  RightBox,
  ButtonsBox,
  InputsBox,
  Button,
  Form,
  Input,
  Label,
  FormBtnBox,
  LoginBtn,
} from "../Login/login.style";

export default function Header() {
  return (
    <MainLogContainer>
      <BorderBox>
        <LogBox>
          <LeftBox>SPACE FOR FUTURE ADDS</LeftBox>
          <RightBox>
            <ButtonsBox>
              <Button >LOGIN</Button>
              <Button className="active">SIGN UP</Button>
            </ButtonsBox>
            <InputsBox>
              <Form>
                <Label>
                  Name:
                  <Input type="text" required></Input>
                </Label>
                <Label>
                  Lastname:
                  <Input type="text" required></Input>
                </Label>
                <Label>
                  Username:
                  <Input type="text" required></Input>
                </Label>
                <Label>
                  Password:
                  <Input type="password" required></Input>
                </Label>
                {/* <Button>SIGN UP</Button> */}
              </Form>
              <FormBtnBox>
                <LoginBtn>LOGIN</LoginBtn>
              </FormBtnBox>
            </InputsBox>
          </RightBox>
        </LogBox>
      </BorderBox>
    </MainLogContainer>
  );
}
