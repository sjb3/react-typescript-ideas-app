import React from "react";
import styled from "styled-components";
import { ColorSet } from "../ColorSet";

interface isVisibleDiv {
  isVisible: boolean;
}

const MenuDrawerWrapper = styled.div<isVisibleDiv>`
  width: 240px;
  height: 100%;
  position: fixed;
  top: 0;
  background: white;
  z-index: 12;
  transform: translateX(${props => (props.isVisible ? 0 : "-100%")});
  transition: transform 0.3s ease-out;
`;

const MenuDrawerOverlay = styled.div<isVisibleDiv>`
  position: fixed;
  width: 100vw;
  height: 100%;
  background: ${ColorSet.DARK_GREY};
  opacity: 0.3;
  top: 0;
  z-index: 11;
  opacity: ${props => (props.isVisible ? 0.3 : 0)};
  transition: opacity 0.3s ease-out;
`;

interface IProps {
  isVisible: boolean;
  toggleVisibility: () => void;
}

const MenuTab = styled.div`
  display: block;
  justify-content: flex-end;
  margin: 10% 16px;
  align-items: center;
  cursor: pointer;
`;

const MenuLabel = styled.label`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
  color: ${ColorSet.PALE_PINK};
  cursor: pointer;
`;

const MenuIcon = styled.i`
  color: ${ColorSet.LIME_PUNCH};
  border: 3px solid ${ColorSet.SALMON};
  border-radius: 50%;
  margin-left: 8px;
`;

export const MenuDrawer: React.FC<IProps> = ({
  isVisible,
  toggleVisibility
}) => (
  <>
    <MenuDrawerWrapper isVisible={isVisible}>
      <MenuTab onClick={toggleVisibility}>
        <MenuLabel>close</MenuLabel>
        <MenuIcon className="material-icons">close</MenuIcon>
      </MenuTab>
    </MenuDrawerWrapper>
    <MenuDrawerOverlay onClick={toggleVisibility} isVisible={isVisible} />
  </>
);
