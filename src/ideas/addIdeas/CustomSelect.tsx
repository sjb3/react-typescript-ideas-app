import React, { useState } from "react";
import styled from "styled-components";
import { ColorSet } from "../../ColorSet";

const options = [
  "Glamour",
  "Town & Country",
  "Tatler",
  "W",
  "Vogue",
  "Bazzar",
  "LinkedIn",
  "Craigslist",
  "Seattle Times",
  "Guardian",
  "Indeed",
  "Glassdoors"
];
const SelectOpener = styled.div`
  border: 1px solid red;
  background: ${ColorSet.LIME_PUNCH};
  color: red;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 16px;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;

  &:hover {
    background: white;
  }

  i {
    color: pink;
    font-size: 48px;
  }

  span {
    text-transform: capitalize;
  }
`;

const OptionList = styled.ul`
  top: 40px;
  left: 0;
  min-width: 250px;
  background: pink;
  color: yellow;
  margin: 0;
  padding-inline-start: 0;
  list-style: none;
  text-transform: uppercase;
  max-height: 200px;
  overflow: scroll;

  li {
    border-bottom: 1px solid ${ColorSet.DINGY_LAVENDER};
    font-size: 12px;
    margin: 4px;
    margin-top: 8px;

    &:hover {
      background: ${ColorSet.DARK_GREY};
    }
  }
`;
export const CustomSelect: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <SelectOpener onClick={() => setIsOpen(!isOpen)}>
      <span>{selectedOption || "Add Category"}</span>
      <i className="material-icons">arrow_down</i>
      {isOpen && (
        <OptionList>
          {options.map(option => (
            <li key={option} onClick={() => setSelectedOption(option)}>
              {option}
            </li>
          ))}
        </OptionList>
      )}
    </SelectOpener>
  );
};
