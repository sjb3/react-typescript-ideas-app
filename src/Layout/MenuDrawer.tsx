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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  display: flex;
  justify-content: flex-end;
  margin: 10% 16px;
  align-items: center;
  cursor: pointer;
`;

const MenuLabel = styled.label`
  text-transform: uppercase;
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: ${ColorSet.DARK_GREY};
  cursor: pointer;
`;

const MenuIcon = styled.i`
  color: ${ColorSet.DARK_GREY};
  /* border: 3px solid ${ColorSet.SALMON};
  border-radius: 50%; */
  margin-left: 10%;
  color: red;
`;

const MenuList = styled.ul`
  padding: 0;
  list-style: none;
`;

const MenuEntry = styled.li`
  font-size: 1.2em;
  font-style: italic;
  color: ${ColorSet.DARK_GREY};
  cursor: pointer;
  border-bottom: 1px solid ${ColorSet.PALE_PINK};
  padding: 8% 3%;

  &:hover {
    color: ${ColorSet.DINGY_LAVENDER};
  }
`;

const menuLabels = [
  "Your Ideas",
  "Your Collections",
  "Explore",
  "ProfileSettings",
  "Statistics"
];

const LogoutTab = styled(MenuTab)`
  margin-top: auto;
  i {
    border: none;
  }
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
      <img
        src="https://media.giphy.com/media/iipZTES2UPnTG/giphy.gif"
        alt="Alexander_McQueen"
        style={{ width: "100%", height: "auto" }}
      />
      <MenuList>
        {menuLabels.map(label => (
          <MenuEntry key={label}>{label}</MenuEntry>
        ))}
      </MenuList>
      <LogoutTab>
        <MenuLabel>log out</MenuLabel>
        <MenuIcon className="material-icons">exit_to_app</MenuIcon>
      </LogoutTab>
    </MenuDrawerWrapper>
    <MenuDrawerOverlay onClick={toggleVisibility} isVisible={isVisible} />
  </>
);
