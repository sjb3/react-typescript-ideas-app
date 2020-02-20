import React, { useState } from "react";
import { Link } from "react-navi";
import {
  AuthForm,
  Input,
  FormButton,
  FooterParagraph
} from "./Auth.styled.component";
import { onRegister } from "./auth.api";
import { AuthFormWrapper } from "./AuthFormWrapper";

export const RegisterPage = () => {
  const [{ username, password, repeatPassword }, setRegisterData] = useState({
    username: "",
    password: "",
    repeatPassword: ""
  });

  const [error, setError] = useState("");

  const registerFunc = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password === repeatPassword) {
      // perform API call
      const response = await onRegister({
        username,
        password
      });
      if (response && response.error) {
        setError(response.error);
      }
    } else {
      setError("Passwords don't match");
    }
  };

  return (
    <AuthFormWrapper
      footer={
        <FooterParagraph>
          Already registered?<Link href="/login"> Login Now</Link>
        </FooterParagraph>
      }
    >
      <AuthForm onSubmit={registerFunc}>
        <label htmlFor="username">Username</label>
        <Input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={username}
          onChange={e =>
            setRegisterData({
              username: e.target.value,
              password,
              repeatPassword
            })
          }
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={password}
          onChange={e =>
            setRegisterData({
              username,
              password: e.target.value,
              repeatPassword
            })
          }
        />
        <label htmlFor="repeatPassword">Re-Password</label>
        <Input
          type="password"
          name="repeatPassword"
          placeholder="Repeat Password"
          value={repeatPassword}
          onChange={e =>
            setRegisterData({
              username,
              password,
              repeatPassword: e.target.value
            })
          }
        />
        <FormButton type="submit">Register</FormButton>
        {error.length > 0 && <p>{error}</p>}
      </AuthForm>
    </AuthFormWrapper>
  );
};
