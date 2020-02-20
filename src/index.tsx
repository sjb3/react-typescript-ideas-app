import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-navi";
import { RegisterPage } from "./auth/RegisterPage";
import { mount, route } from "navi";
import { LoginPage } from "./auth/LoginPage";
import { IdeasPage } from "./ideas/IdeasListPage";
// import { withAuthentication } from "./auth/authenticatedRoute";
import { BOUNCE_IT_TOKEN_KEY } from "./auth/auth.api";
import { AddIdeasPage } from "./AddIdeas/AddIdeasPage";
import { createGlobalStyle } from "styled-components";
import { MyAccountPage } from "./MyAccount/MyAccountPage";
// import RoutesUrls from "./utils/routesUrls";

const GlobalStyle = createGlobalStyle`
body {
    @import url('https://fonts.googleapis.com/css?family=Lacquer&display=swap');
    font-family: 'Lacquer', sans-serif;
}
`;

const routes = mount({
  // Protected route

  // "/": withAuthentication(
  //   route({
  //     title: "Ideas",
  //     view: <IdeasPage />
  //   })
  // ),

  // Unprotected route
  "/": route({
    title: "Ideas",
    view: <IdeasPage />
  }),
  "/login": route({
    title: "Login",
    view: <LoginPage />
  }),
  "/register": route({
    title: "Register",
    view: <RegisterPage />
  }),
  "/add": route({
    title: "Add",
    view: <AddIdeasPage />
  }),
  "/me": route({
    title: "My Account",
    view: <MyAccountPage />
  })
});

ReactDOM.render(
  <>
    <GlobalStyle />
    <Router
      routes={routes}
      context={{ token: localStorage.getItem(BOUNCE_IT_TOKEN_KEY) }}
    />
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
