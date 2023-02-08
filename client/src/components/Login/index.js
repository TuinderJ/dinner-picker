import { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN, ADD_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';
import LoginImg from '../../assets/loginImg.jpg';
import { BorderBox, LeftBox, LogBox, MainLogContainer, RightBox, ButtonsBox, InputsBox, Button, SInput, Label, SForm, FormBtnBox, LoginBtn, SInputsWrapper, SImgWrapper, SImg } from './style';

export default function Header() {
  const [formState, setFormState] = useState({ email: '', password: '', firstName: '', lastName: '' });
  const [loggingIn, setLoggingIn] = useState(true);
  const [login, { error: loginError }] = useMutation(LOGIN);
  const [signup, { error: signupError }] = useMutation(ADD_USER);

  useEffect(() => {
    if (Auth.loggedIn()) window.location.assign('/');
  }, []);

  const handleFormSubmit = async e => {
    e.preventDefault();
    if (loggingIn) {
      try {
        const mutationResponse = await login({ variables: { email: formState.email, password: formState.password } });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (err) {
        alert(err);
      }
    } else {
      try {
        const mutationResponse = await signup({ variables: { email: formState.email, password: formState.password, lastName: formState.lastName, firstName: formState.firstName } });
        const token = mutationResponse.data.addUser.token;
        Auth.login(token);
      } catch (err) {
        alert(err);
      }
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleToggle = e => setLoggingIn(!loggingIn);
  return (
    <MainLogContainer>
      <BorderBox>
        <LogBox>
          <LeftBox>
            <SImgWrapper>
              <SImg src={LoginImg}></SImg>
            </SImgWrapper>
          </LeftBox>
          <RightBox>
            <ButtonsBox onClick={handleToggle}>
              <Button className={loggingIn ? 'active' : ''}>LOGIN</Button>
              <Button className={loggingIn ? '' : 'active'}>SIGN UP</Button>
            </ButtonsBox>
            <InputsBox>
              <SForm onSubmit={handleFormSubmit}>
                {loggingIn ? (
                  <></>
                ) : (
                  <>
                    <SInputsWrapper>
                      <Label htmlFor='firstName'>First Name:</Label>
                      <SInput type='text' onChange={handleChange} name='firstName' required></SInput>
                    </SInputsWrapper>
                    <SInputsWrapper>
                      <Label htmlFor='lastName'>Last Name:</Label>
                      <SInput type='text' onChange={handleChange} name='lastName' required></SInput>
                    </SInputsWrapper>
                  </>
                )}
                <SInputsWrapper>
                  <Label htmlFor='email'>Email:</Label>
                  <SInput name='email' onChange={handleChange} type='email' required></SInput>
                </SInputsWrapper>
                <SInputsWrapper>
                  <Label htmlFor='password'>Password:</Label>
                  <SInput name='password' onChange={handleChange} type='password' required></SInput>
                </SInputsWrapper>
                <FormBtnBox>
                  <LoginBtn type='submit'>{loggingIn ? 'LOGIN' : 'SIGN UP'}</LoginBtn>
                </FormBtnBox>
              </SForm>
            </InputsBox>
          </RightBox>
        </LogBox>
      </BorderBox>
    </MainLogContainer>
  );
}
