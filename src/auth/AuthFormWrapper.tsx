import React from "react";
import {
  AuthForm,
  AuthWrapper,
  BottomContainer,
  VioletField,
  FormWrapper,
  TopSentence,
  TopContainer,
  FormContainer,
  Separator,
  FormButton,
  ErrorParagraph,
  FooterParagraph
} from "./Auth.styled.component";
import { Link } from "react-navi";

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
