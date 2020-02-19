import React, { useState } from "react";
import { Link, useNavigation } from "react-navi";
import {
  AuthForm,
  AuthWrapper,
  VioletField,
  FormWrapper,
  TopContainer,
  FormContainer,
  BottomContainer,
  TopSentence,
  Separator,
  FooterParagraph,
  Input,
  FormButton,
  ErrorParagraph
} from "./Auth.styled.component";
import { onLogin } from "./auth.api";

export const LoginPage = () => {
  const navigation = useNavigation();
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const loginFunc = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error, token } = await onLogin({
      username,
      password
    });
    // console.log(response);
    if (error) {
      setError(error);
    } else {
      navigation.setContext({ token });
      navigation.navigate("/");
    }
  };

  return (
    <AuthWrapper>
      <VioletField />
      <FormWrapper>
        <TopContainer>
          <TopSentence>Ideas</TopSentence>
          <Separator />
        </TopContainer>
        <FormContainer>
          <AuthForm onSubmit={loginFunc}>
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={e =>
                setCredentials({ username: e.target.value, password })
              }
            />

            <label htmlFor="password">Password</label>
            <Input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e =>
                setCredentials({ username, password: e.target.value })
              }
            />

            <FormButton type="submit">Login</FormButton>
            {error.length > 0 && (
              <ErrorParagraph>
                {error} <i className="material-icons">error</i>
              </ErrorParagraph>
            )}
          </AuthForm>
        </FormContainer>
        <BottomContainer>
          <FooterParagraph>
            Need an Account?
            <Link href="/register"> Register Now</Link>
          </FooterParagraph>
        </BottomContainer>
      </FormWrapper>
    </AuthWrapper>
  );
};
