import React from 'react';
import { BodyContainer, MainContainer, SignUpBtn, SignUpBtnContainer, TitleImage, TitleContainer } from './style';
import TitlePng from '../../assets/Title.png';

export default function landingPage() {
  return (
    <BodyContainer>
      <MainContainer>
        <TitleContainer>
          <TitleImage src={TitlePng} />
        </TitleContainer>
        <SignUpBtnContainer>
          <SignUpBtn>SIGN UP</SignUpBtn>
        </SignUpBtnContainer>
      </MainContainer>
    </BodyContainer>
  );
}
