import React from "react";
import { AuthForm } from "./Auth.styled.component";

export const LoginPage = () => {
  return (
    <div>
      <AuthForm>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Enter Username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </AuthForm>
    </div>
  );
};
