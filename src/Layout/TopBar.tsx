import React from "react";
import styled from "styled-components";
import { ColorSet } from "../ColorSet";
import chanel_logo from "../assets/chanel.jpg";

const TopBarWrapper = styled.header`
  display: flex;
  padding: 10px 32px;
  align-items: center;
  justify-content: space-between;
  background: ${ColorSet.DARK_GREY};

  i {
    color: white;
    cursor: pointer;
    font-size: 1.5em;

    &:hover {
      color: ${ColorSet.LIME_PUNCH};
    }
  }
`;

const MenuButton = styled.button`
  background: transparent;
  width: 3rem;
  height: 3rem;
  outline: none;
  cursor: pointer;
  border: none;
`;

// Build Hamburger menu manually
const MenuToggle = styled.span`
  display: block;
  width: 2rem;
  height: 3px;
  background: white;
  border-radius: 3px;
  background: ${ColorSet.LIME_PUNCH};
  position: relative;
  margin: auto;

  &::after,
  &::before {
    background: inherit;
    height: inherit;
    width: inherit;
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    margin: auto;
    border-radius: inherit;
  }

  &::after {
    top: 1.25rem;
  }
  &::before {
    top: -1.3rem;
  }
`;

interface IProps {
  toggleVisibility: () => void;
}

export const TopBar: React.FC<IProps> = ({ toggleVisibility }) => (
  <TopBarWrapper>
    <MenuButton onClick={toggleVisibility}>
      <MenuToggle />
    </MenuButton>

    <img
      src={chanel_logo}
      alt={chanel_logo}
      style={{ width: "3em", margin: "0 auto" }}
    />
    <div>
      <i className="material-icons">search</i>
      <i className="material-icons">account_circle</i>
    </div>
  </TopBarWrapper>
);
