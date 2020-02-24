import React from "react";
import styled from "styled-components";
import { ColorSet } from "../../ColorSet";

interface IProps {
  iconName: string;
  // voteNumber: number;
  onAddVote: (id: string) => void;
  ideaId: string;
}

const VoteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${ColorSet.LIME_PUNCH};
  justify-content: center;
  border-radius: 15px;
  cursor: pointer;
  margin-right: 15px;
  max-height: 75px;
  align-items: center;

  i {
    color: ${ColorSet.SALMON};
    padding: 8px;
  }

  span {
    padding-bottom: 8px;
  }

  &:hover {
    i {
      opacity: 0.5;
    }
  }
`;

export const Vote: React.FC<IProps> = ({
  iconName,
  // voteNumber,
  onAddVote,
  ideaId
}) => {
  return (
    <VoteWrapper onClick={() => onAddVote(ideaId)}>
      <i className="material-icons">{iconName}</i>
      {/* <span>{voteNumber}</span> */}
    </VoteWrapper>
  );
};
