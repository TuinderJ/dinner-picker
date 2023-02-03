import React, { useEffect } from 'react';
import { BodyContainer, MainContainer, SignUpLink, SignUpBtnContainer, TitleImage, TitleContainer } from './style';
import TitlePng from '../../assets/Title.png';
import Auth from '../../utils/auth';

export default function LandingPage({ setActivePage }) {
  useEffect(() => {
    setActivePage('');
  }, []);
  return (
    <BodyContainer>
      <MainContainer>
        <TitleContainer>
          <TitleImage src={TitlePng} />
        </TitleContainer>
        {Auth.loggedIn() ? (
          <></>
        ) : (
          <SignUpBtnContainer>
            <SignUpLink to='/login'>SIGN UP / LOGIN</SignUpLink>
          </SignUpBtnContainer>
        )}
      </MainContainer>
    </BodyContainer>
  );
}
