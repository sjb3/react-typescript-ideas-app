import React from "react";
import { Idea } from "../common/types";
import styled from "styled-components";
import { ColorSet } from "../ColorSet";

const IdeaRowWrapper = styled.div`
  border-bottom: 1px solid ${ColorSet.DARK_GREY};
  display: flex;
  padding: 16px;
  align-items: center;
`;
const DescriptionWrapper = styled.span`
  margin-left: 5px;
  display: flex;
  flex-direction: column;

  h4 {
    color: red;
  }

  p {
    font-style: italic;
    color: green;
  }
`;

const BookMarkButton = styled.button`
  border: none;
  background: transparent;
  outline: none;
  cursor: pointer;
  margin-left: auto;

  &:hover {
    color: ${ColorSet.PALE_PINK};
  }

  i {
    font-size: 2em;
  }
`;

type Props = Idea & {
  upvote: (id: string) => void;
  downvote: (id: string) => void;
  bookmark: (id: string) => void;
};

export const IdeaRow: React.FC<Props> = ({ idea, description }) => (
  <IdeaRowWrapper>
    <DescriptionWrapper>
      <h4>{idea}</h4>
      <p>{description}</p>
    </DescriptionWrapper>
    <BookMarkButton>
      <i className="material-icons">bookmark_border</i>
    </BookMarkButton>
  </IdeaRowWrapper>
);
