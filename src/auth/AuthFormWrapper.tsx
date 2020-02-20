import React from "react";
import {
  AuthWrapper,
  BottomContainer,
  VioletField,
  FormWrapper,
  TopSentence,
  TopContainer,
  FormContainer,
  Separator
} from "./Auth.styled.component";

interface IProps {
  footer: JSX.Element;
}

export const AuthFormWrapper: React.FC<IProps> = ({ children, footer }) => (
  <AuthWrapper>
    <VioletField />
    <FormWrapper>
      <TopContainer>
        <TopSentence>Ideas</TopSentence>
        <Separator />
      </TopContainer>
      <FormContainer>{children}</FormContainer>
      <BottomContainer>{footer}</BottomContainer>
    </FormWrapper>
  </AuthWrapper>
);
