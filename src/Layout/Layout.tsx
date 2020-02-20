import React from "react";
import { TopBar } from "./TopBar";
import { NavigationBar } from "./NavigationBar";

export const Layout: React.FC = ({ children }) => (
  <>
    <TopBar />
    <NavigationBar />
    {children}
  </>
);
