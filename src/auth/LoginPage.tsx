import React, { useState } from "react";
import { Link, useNavigation } from "react-navi";
import {
  AuthForm,
  FooterParagraph,
  Input,
  FormButton,
  ErrorParagraph
} from "./Auth.styled.component";
import { AuthFormWrapper } from "./AuthFormWrapper";
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
    <AuthFormWrapper
      footer={
        <FooterParagraph>
          New to here?<Link href="/register"> register here</Link>
        </FooterParagraph>
      }
    >
      <AuthForm onSubmit={loginFunc}>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={e => setCredentials({ username: e.target.value, password })}
        />

        <label htmlFor="password">Password</label>
        <Input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setCredentials({ username, password: e.target.value })}
        />

        <FormButton type="submit">Login</FormButton>
        {error.length > 0 && (
          <ErrorParagraph>
            {error} <i className="material-icons">error</i>
          </ErrorParagraph>
        )}
      </AuthForm>
    </AuthFormWrapper>
  );
};
