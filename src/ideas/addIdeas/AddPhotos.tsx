import React from "react";
import styled from "styled-components";
import { ColorSet } from "../../ColorSet";

interface IProps {
  variant?: "main";
}

const AddphotoButton = styled.button`
  width: 100px;
  height: 100px;
  background: none;
  border: 1px solid ${ColorSet.MINT_GREEN};
  border-radius: 50%;
`;

const AddphotoWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  margin-right: 20px;

  i {
    color: ${ColorSet.SALMON};
    background: ${props =>
      props.variant === "main" ? ColorSet.DINGY_LAVENDER : "none"};
    border-radius: 50%;
  }

  p {
    font-size: 10px;

    text-align: center;
    color: ${props =>
      props.variant === "main" ? ColorSet.DINGY_LAVENDER : "none"};
    border-radius: 50%;
  }

  ${AddphotoButton} {
    border-color: ${props =>
      props.variant === "main" ? "red" : ColorSet.DINGY_LAVENDER};

    &:hover {
      background: red;
      color: white;
    }
  }
`;

export const AddPhoto: React.FC<IProps> = ({ variant }) => (
  <AddphotoWrapper variant={variant}>
    <AddphotoButton>
      <i className="material-icons">add</i>
    </AddphotoButton>
    <p>Add photo</p>
    <p>{variant === "main" ? "Add Main Photo" : "Add Photo"}</p>
  </AddphotoWrapper>
);
