import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Router } from "react-navi";
import { RegisterPage } from "./auth/RegisterPage";
import { mount, route } from "navi";
import { LoginPage } from "./auth/LoginPage";

const routes = mount({
  "/": route({
    title: "Login",
    view: <LoginPage />
  }),
  "/register": route({
    title: "Register",
    view: <RegisterPage />
  })
});

ReactDOM.render(<Router routes={routes} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
