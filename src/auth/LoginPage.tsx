import React, { useState } from "react";
import { AuthForm } from "./Auth.styled.component";
import { onLogin } from "./auth.api";

export const LoginPage = () => {
  const [{ username, password }, setCredentials] = useState({
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const loginFunc = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await onLogin({
      username,
      password
    });
    // console.log(response);
    if (response && response.error) {
      setError(response.error);
    }
  };

  return (
    <div>
      <AuthForm onSubmit={loginFunc}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={e => setCredentials({ username: e.target.value, password })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={e => setCredentials({ username, password: e.target.value })}
        />
        <button type="submit">Login</button>
        {error.length > 0 && <p>{error}</p>}
      </AuthForm>
    </div>
  );
};
