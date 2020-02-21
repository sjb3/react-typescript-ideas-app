import React, { useState } from "react";
import { TopBar } from "./TopBar";
import { NavigationBar } from "./NavigationBar";
import { MenuDrawer } from "./MenuDrawer";

export const Layout: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <TopBar toggleVisibility={toggleVisibility} />
      <NavigationBar />
      <MenuDrawer isVisible={isVisible} toggleVisibility={toggleVisibility} />
      {children}
    </>
  );
};
