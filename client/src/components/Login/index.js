import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Form } from './style';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
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

const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);

  const handleLoginFormSubmit = async e => {
    e.preventDefault();
    try {
      const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
      const token = mutationResponse.data.login.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

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
